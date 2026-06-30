-- ============================================
-- FishHub - Script de Criação do Banco
-- Execute este script no SQL Editor do Supabase
-- ============================================

-- ============================================
-- TABELA: users (Usuários)
-- ============================================
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  username TEXT UNIQUE NOT NULL,
  full_name TEXT NOT NULL,
  avatar_url TEXT,
  banner_url TEXT,
  bio TEXT CHECK (char_length(bio) <= 200),
  city TEXT,
  state TEXT,
  is_premium BOOLEAN DEFAULT FALSE,
  is_fishery_owner BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- TABELA: fisheries (Pesqueiros)
-- ============================================
CREATE TABLE fisheries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id UUID REFERENCES users(id) ON DELETE SET NULL,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  address TEXT,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  latitude DECIMAL(10, 8) NOT NULL,
  longitude DECIMAL(11, 8) NOT NULL,
  phone TEXT,
  instagram TEXT,
  website TEXT,
  opening_hours JSONB,
  entry_price DECIMAL(10, 2),
  photos TEXT[] DEFAULT '{}',
  videos TEXT[] DEFAULT '{}',
  rules TEXT,
  species_available TEXT[] DEFAULT '{}',
  is_verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- TABELA: catches (Capturas)
-- ============================================
CREATE TABLE catches (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  fishery_id UUID REFERENCES fisheries(id) ON DELETE SET NULL,
  species TEXT NOT NULL,
  weight DECIMAL(6, 2) NOT NULL CHECK (weight >= 0.1 AND weight <= 500),
  length DECIMAL(5, 1) CHECK (length >= 1 AND length <= 300),
  bait TEXT NOT NULL,
  equipment TEXT,
  photo_url TEXT,
  video_url TEXT,
  notes TEXT CHECK (char_length(notes) <= 500),
  caught_at TIMESTAMPTZ NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- TABELA: posts (Publicações)
-- ============================================
CREATE TABLE posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  catch_id UUID REFERENCES catches(id) ON DELETE SET NULL,
  content TEXT CHECK (char_length(content) <= 500),
  photo_url TEXT,
  video_url TEXT,
  likes_count INTEGER DEFAULT 0,
  comments_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- TABELA: reviews (Avaliações)
-- ============================================
CREATE TABLE reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  fishery_id UUID REFERENCES fisheries(id) ON DELETE CASCADE,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment TEXT CHECK (char_length(comment) <= 500),
  photo_url TEXT,
  criteria JSONB NOT NULL DEFAULT '{
    "fish_quantity": 3,
    "cleanliness": 3,
    "restaurant": 3,
    "bathroom": 3,
    "service": 3,
    "price": 3,
    "structure": 3
  }',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, fishery_id)
);

-- ============================================
-- TABELA: likes (Curtidas)
-- ============================================
CREATE TABLE likes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  post_id UUID REFERENCES posts(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, post_id)
);

-- ============================================
-- TABELA: comments (Comentários)
-- ============================================
CREATE TABLE comments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  post_id UUID REFERENCES posts(id) ON DELETE CASCADE,
  parent_id UUID REFERENCES comments(id) ON DELETE CASCADE,
  content TEXT NOT NULL CHECK (char_length(content) <= 500),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- TABELA: follows (Seguidores)
-- ============================================
CREATE TABLE follows (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  follower_id UUID REFERENCES users(id) ON DELETE CASCADE,
  following_id UUID REFERENCES users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(follower_id, following_id),
  CHECK (follower_id != following_id)
);

-- ============================================
-- TABELA: notifications (Notificações)
-- ============================================
CREATE TABLE notifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  type TEXT NOT NULL CHECK (type IN ('like', 'comment', 'follow', 'mention')),
  from_user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  post_id UUID REFERENCES posts(id) ON DELETE SET NULL,
  comment_id UUID REFERENCES comments(id) ON DELETE SET NULL,
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- TABELA: species (Espécies)
-- ============================================
CREATE TABLE species (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT UNIQUE NOT NULL,
  scientific_name TEXT,
  description TEXT,
  max_weight DECIMAL(6, 2),
  photo_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- INDEXES (Performance)
-- ============================================
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_username ON users(username);

CREATE INDEX idx_fisheries_owner ON fisheries(owner_id);
CREATE INDEX idx_fisheries_city ON fisheries(city, state);
CREATE INDEX idx_fisheries_slug ON fisheries(slug);
CREATE INDEX idx_fisheries_location ON fisheries(latitude, longitude);

CREATE INDEX idx_catches_user ON catches(user_id);
CREATE INDEX idx_catches_fishery ON catches(fishery_id);
CREATE INDEX idx_catches_species ON catches(species);
CREATE INDEX idx_catches_caught_at ON catches(caught_at DESC);

CREATE INDEX idx_posts_user ON posts(user_id);
CREATE INDEX idx_posts_created_at ON posts(created_at DESC);

CREATE INDEX idx_reviews_fishery ON reviews(fishery_id);
CREATE INDEX idx_reviews_user ON reviews(user_id);

CREATE INDEX idx_likes_user ON likes(user_id);
CREATE INDEX idx_likes_post ON likes(post_id);

CREATE INDEX idx_comments_post ON comments(post_id);
CREATE INDEX idx_comments_user ON comments(user_id);

CREATE INDEX idx_follows_follower ON follows(follower_id);
CREATE INDEX idx_follows_following ON follows(following_id);

CREATE INDEX idx_notifications_user ON notifications(user_id, is_read);
CREATE INDEX idx_notifications_created ON notifications(created_at DESC);

-- ============================================
-- FUNÇÕES E TRIGGERS
-- ============================================

-- Função para atualizar contagem de likes
CREATE OR REPLACE FUNCTION update_likes_count()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE posts SET likes_count = likes_count + 1 WHERE id = NEW.post_id;
  ELSIF TG_OP = 'DELETE' THEN
    UPDATE posts SET likes_count = likes_count - 1 WHERE id = OLD.post_id;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- Trigger para likes
CREATE TRIGGER trigger_likes_count
AFTER INSERT OR DELETE ON likes
FOR EACH ROW EXECUTE FUNCTION update_likes_count();

-- Função para atualizar contagem de comentários
CREATE OR REPLACE FUNCTION update_comments_count()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE posts SET comments_count = comments_count + 1 WHERE id = NEW.post_id;
  ELSIF TG_OP = 'DELETE' THEN
    UPDATE posts SET comments_count = comments_count - 1 WHERE id = OLD.post_id;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- Trigger para comentários
CREATE TRIGGER trigger_comments_count
AFTER INSERT OR DELETE ON comments
FOR EACH ROW EXECUTE FUNCTION update_comments_count();

-- Função para atualizar updated_at automaticamente
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers para updated_at
CREATE TRIGGER update_users_updated_at
BEFORE UPDATE ON users
FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_fisheries_updated_at
BEFORE UPDATE ON fisheries
FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_catches_updated_at
BEFORE UPDATE ON catches
FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_posts_updated_at
BEFORE UPDATE ON posts
FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_reviews_updated_at
BEFORE UPDATE ON reviews
FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_comments_updated_at
BEFORE UPDATE ON comments
FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ============================================
-- RLS (Row Level Security)
-- ============================================

-- Habilitar RLS em todas as tabelas
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE fisheries ENABLE ROW LEVEL SECURITY;
ALTER TABLE catches ENABLE ROW LEVEL SECURITY;
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE likes ENABLE ROW LEVEL SECURITY;
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE follows ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE species ENABLE ROW LEVEL SECURITY;

-- Políticas para users
CREATE POLICY "Usuários podem ver todos os perfis"
  ON users FOR SELECT
  USING (true);

CREATE POLICY "Usuários podem editar próprio perfil"
  ON users FOR UPDATE
  USING (auth.uid() = id);

-- Políticas para fisheries
CREATE POLICY "Pesqueiros são públicos"
  ON fisheries FOR SELECT
  USING (true);

CREATE POLICY "Proprietários podem criar pesqueiros"
  ON fisheries FOR INSERT
  WITH CHECK (auth.uid() = owner_id);

CREATE POLICY "Proprietários podem editar own fishery"
  ON fisheries FOR UPDATE
  USING (auth.uid() = owner_id);

-- Políticas para catches
CREATE POLICY "Capturas são públicas"
  ON catches FOR SELECT
  USING (true);

CREATE POLICY "Usuários podem criar capturas"
  ON catches FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Usuários podem editar próprias capturas"
  ON catches FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Usuários podem deletar próprias capturas"
  ON catches FOR DELETE
  USING (auth.uid() = user_id);

-- Políticas para posts
CREATE POLICY "Posts são públicos"
  ON posts FOR SELECT
  USING (true);

CREATE POLICY "Usuários podem criar posts"
  ON posts FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Usuários podem editar próprios posts"
  ON posts FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Usuários podem deletar próprios posts"
  ON posts FOR DELETE
  USING (auth.uid() = user_id);

-- Políticas para reviews
CREATE POLICY "Reviews são públicas"
  ON reviews FOR SELECT
  USING (true);

CREATE POLICY "Usuários podem criar reviews"
  ON reviews FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Usuários podem editar próprias reviews"
  ON reviews FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Usuários podem deletar próprias reviews"
  ON reviews FOR DELETE
  USING (auth.uid() = user_id);

-- Políticas para likes
CREATE POLICY "Likes são públicos"
  ON likes FOR SELECT
  USING (true);

CREATE POLICY "Usuários podem curtir"
  ON likes FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Usuários podem descurtir"
  ON likes FOR DELETE
  USING (auth.uid() = user_id);

-- Políticas para comments
CREATE POLICY "Comentários são públicos"
  ON comments FOR SELECT
  USING (true);

CREATE POLICY "Usuários podem comentar"
  ON comments FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Usuários podem editar próprios comentários"
  ON comments FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Usuários podem deletar próprios comentários"
  ON comments FOR DELETE
  USING (auth.uid() = user_id);

-- Políticas para follows
CREATE POLICY "Follows são públicos"
  ON follows FOR SELECT
  USING (true);

CREATE POLICY "Usuários podem seguir"
  ON follows FOR INSERT
  WITH CHECK (auth.uid() = follower_id);

CREATE POLICY "Usuários podem deixar de seguir"
  ON follows FOR DELETE
  USING (auth.uid() = follower_id);

-- Políticas para notifications
CREATE POLICY "Usuários veem próprias notificações"
  ON notifications FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Sistema pode criar notificações"
  ON notifications FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Usuários podem marcar como lida"
  ON notifications FOR UPDATE
  USING (auth.uid() = user_id);

-- Políticas para species
CREATE POLICY "Espécies são públicas"
  ON species FOR SELECT
  USING (true);

-- ============================================
-- DADOS INICIAIS (Espécies)
-- ============================================
INSERT INTO species (name, scientific_name, max_weight, description) VALUES
  ('Tambaqui', 'Colossoma macropomum', 50, 'Um dos peixes mais procurados no Brasil. Pode atingir mais de 30kg.'),
  ('Tambacu', 'Híbrido de Tambaqui e Pacu', 40, 'Híbrido vigoroso, muito pescado em pesqueiros.'),
  ('Tambatinga', 'Híbrido de Tambaqui e Tambaqui', 35, 'Híbrido de crescimento rápido.'),
  ('Piaractus brachypomus', 'Pacu-prata', 25, 'Parente do tambaqui, muito apreciado na pesca esportiva.'),
  ('Piaractus mesopotamicus', 'Pacu', 40, 'Conhecido por morder frutas, muito pescado no Pantanal.'),
  ('Brycon hilarii', 'Matrinxã', 15, 'Peixe ágil e fighters, muito procurado por pescadores esportivos.'),
  ('Salminus hilarii', 'Dourado', 30, 'O "rei dos rios", peixe icônico da pesca brasileira.'),
  ('Pseudoplatystoma corruscans', 'Pintado', 80, 'O maior bagre do Brasil, peixe de grande porte.'),
  ('Zungaro jahu', 'Jaú', 50, 'Bagre de grande porte, muito pescado em rios.'),
  ('Pimelodus maculatus', 'Mandi', 5, 'Bagre pequeno, muito comum em pesqueiros.'),
  ('Prochilodus lineatus', 'Curimba', 5, 'Peixe de escamas, muito comum em rios.'),
  ('Hoplias malabaricus', 'Traíra', 8, 'Predador agressivo, excelente para pesca com isca.'),
  ('Cichla monoculus', 'Tucunaré', 8, 'Peixe colorido e agressivo, muito pescado com isca artificial.'),
  ('Geophagus brasiliensis', 'Cará', 3, 'Peixe ornamental e comestível, comum em lagos.'),
  ('Oreochromis niloticus', 'Tilápia', 3, 'Peixe muito cultivado e pescado em pesqueiros.');

-- ============================================
-- CONCLUSÃO
-- ============================================
-- Banco de dados criado com sucesso!
-- Próximo passo: Configurar as variáveis de ambiente no app
