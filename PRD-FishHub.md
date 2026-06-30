# Product Requirements Document
# FishHub v1.0

---

**Status:** Draft
**Versão:** 1.0
**Data:** Junho de 2026
**Autor:** FishHub Team

---

## Sumário Executivo

FishHub é uma rede social especializada em pesca esportiva, projetada para se tornar a maior comunidade de pescadores do Brasil. O aplicativo resolve o problema de fragmentação do conteúdo de pesca nas redes sociais genéricas, oferecendo uma plataforma dedicada onde cada pescaria vira um registro permanente e organizado.

Diferente do Instagram ou Facebook, onde posts de pesca se perdem em meio a conteúdo irrelevante, FishHub centraliza tudo que um pescador precisa: registro detalhado de capturas, mapa nacional de pesqueiros, avaliações comunitárias, rankings competitivos e, futuramente, uma inteligência artificial especializada que ajuda a planejar pescarias.

O público-alvo inclui desde pescadores amadores que querem registrar seus momentos até proprietários de pesqueiros que buscam divulgação eficiente. O modelo de negócio combina assinaturas premium, marketplace e publicidade segmentada, criando múltiplas fontes de receita sustentáveis.

---

## 1. Objetivos e Metas

### 1.1 Objetivos do Produto

1. **Criar a maior comunidade de pesca esportiva do Brasil** - Ser o aplicativo referência para pescadores
2. **Tornar o app indispensável diariamente** - Usuários devem abrir todos os dias para ver conteúdo novo
3. **Estabelecer ecossistema completo** - Social + Marketplace + IA em uma única plataforma
4. **Conectar pescadores e pesqueiros** - Facilitar a descoberta e avaliação de locais
5. **Gerar dados valiosos** - Construir a maior base de dados de pesca esportiva do país

### 1.2 Métricas de Sucesso (KPIs)

| Métrica | Meta (6 meses) | Meta (12 meses) | Meta (24 meses) |
|---------|----------------|-----------------|-----------------|
| Usuários ativos mensais (MAU) | 10.000 | 50.000 | 200.000 |
| Usuários ativos diários (DAU) | 2.000 | 15.000 | 60.000 |
| Capturas registradas/dia | 500 | 2.500 | 10.000 |
| Pesqueiros cadastrados | 200 | 1.000 | 5.000 |
| Taxa de retenção D7 | 40% | 50% | 55% |
| Taxa de retenção D30 | 20% | 30% | 35% |
| NPS (Net Promoter Score) | > 50 | > 60 | > 70 |
| Avaliações de pesqueiros/mês | 500 | 3.000 | 15.000 |

### 1.3 Métricas de Negócio

| Métrica | Meta (12 meses) | Meta (24 meses) |
|---------|-----------------|-----------------|
| Assinantes Premium | 500 | 3.000 |
| Pesqueiros com perfil oficial | 100 | 500 |
| MRR (Monthly Recurring Revenue) | R$ 15.000 | R$ 150.000 |
| CAC (Customer Acquisition Cost) | < R$ 15 | < R$ 10 |
| LTV (Lifetime Value) | > R$ 60 | > R$ 100 |

---

## 2. Público-Alvo Detalhado

### 2.1 Personas

#### Persona 1: João - Pescador Amador
| Campo | Descrição |
|-------|-----------|
| **Idade** | 25-45 anos |
| **Ocupação** | Administrador, vendedor, motorista |
| **Perfil** | Pesca nos fins de semana, 2-4 vezes por mês |
| **Objetivo** | Registrar capturas, descobrir novos pesqueiros |
| **Frustração** | Não acha bons pesqueiros, perde fotos no celular |
| **Comportamento** | Usa Instagram para postar,.Grupo de WhatsApp |
| **Dispositivo** | Android intermediário |

#### Persona 2: Maria - Proprietária de Pesqueiro
| Campo | Descrição |
|-------|-----------|
| **Idade** | 35-55 anos |
| **Ocupação** | Empresária do ramo de lazer |
| **Perfil** | Dona de pesqueiro há 5+ anos |
| **Objetivo** | Divulgar o pesqueiro, atrair clientes |
| **Frustração** | Difícil alcançar novos clientes, avaliações ruins no Google |
| **Comportamento** | Usa Facebook e WhatsApp para divulgar |
| **Dispositivo** | Android básico/médio |

#### Persona 3: Pedro - Pescador Profissional
| Campo | Descrição |
|-------|-----------|
| **Idade** | 20-35 anos |
| **Ocupação** | Pescador competitivo, guia de pesca |
| **Perfil** | Pesca 3-5 vezes por semana, participa de torneios |
| **Objetivo** | Ranking, reconhecimento, conteúdo para redes |
| **Frustração** | Não tem plataforma séria para competir |
| **Comportamento** | YouTuber, Influenciador, usa todas as redes |
| **Dispositivo** | iPhone ou Android top |

#### Persona 4: Carlos - Fabricante/Lojista
| Campo | Descrição |
|-------|-----------|
| **Idade** | 30-50 anos |
| **Ocupação** | Dono de loja ou marca de iscas/equipamentos |
| **Perfil** | Quer vender mais, fidelizar clientes |
| **Objetivo** | Divulgar produtos, patrocinar eventos |
| **Frustração** | Publicidade cara e sem foco em pesca |
| **Comportamento** | Instagram Ads, patrocínio de campeonatos |
| **Dispositivo** | Computador + Smartphone |

### 2.2 Jobs to be Done

| Persona | Job | Situação | Expectativa | Ansiedade |
|---------|-----|----------|-------------|-----------|
| João | Registrar captura | "Acertei um peixe grande!" | Foto + dados completos salvos | Vou esquecer os detalhes |
| João | Descobrir pesqueiro | "Quero ir pescar amanhã" | Mapa + avaliações confiáveis | Vai ser ruim e vou perder tempo |
| Maria | Divulgar pesqueiro | "Preciso de mais clientes" | Página bonita e profissional | Não vou conseguir competir |
| Maria | Responder feedback | "Tiveram uma reclamação" | Dialogar publicamente | Vou perder clientes |
| Pedro | Competir | "Quero ser reconhecido" | Rankings justos e transparente | Não vou ser valorizado |
| Pedro | Aprender | "Como pescar tambaqui?" | Conteúdo de qualidade | Informação dispersa |
| Carlos | Vender | "Meus clientes precisam de info" | Público qualificado | Investimento sem retorno |

---

## 3. Funcionalidades MVP - Especificação Detalhada

### 3.1 Autenticação

#### US-001: Cadastro de Usuário
**Como** pescador, **quero** me cadastrar no aplicativo, **para** começar a usar todas as funcionalidades.

**Critérios de Aceite:**
- [ ] Cadastro por email + senha OU Google OAuth
- [ ] Campos obrigatórios: nome completo, email, senha, username
- [ ] Validação de email com código (expira em 24h)
- [ ] Senha deve ter: 8+ caracteres, 1 maiúscula, 1 número
- [ ] Username: 3-20 caracteres, apenas letras, números, underscore
- [ ] Criar perfil básico automaticamente após confirmação
- [ ] Termos de uso obrigatórios (checkbox)
- [ ] Mensagem de erro clara para email duplicado

**Definição de Pronto:**
- Cadastro funciona em Android e iOS
- Tempo de cadastro < 60 segundos
- Email de confirmação chega em < 5 minutos

---

#### US-002: Login
**Como** usuário, **quero** fazer login, **para** acessar minha conta existente.

**Critérios de Aceite:**
- [ ] Login por email + senha OU Google
- [ ] Botão "Lembrar-me" (mantém sessão por 30 dias)
- [ ] Link "Esqueceu a senha?"
- [ ] Mensagem de erro genérica por segurança
- [ ] Bloqueio após 5 tentativas (15 minutos)
- [ ] Biometria (Face ID / Fingerprint) opcional

---

#### US-003: Recuperação de Senha
**Como** usuário, **quero** recuperar minha senha, **para** não perder acesso à conta.

**Critérios de Aceite:**
- [ ] Tela "Esqueceu a senha?" com campo de email
- [ ] Email de recuperação em até 5 minutos
- [ Link expira em 24 horas
- [ ] Nova senha: 8+ caracteres, diferentes da anterior
- [ ] Confirmação de alteração por email
- [ ] Toast de sucesso: "Senha alterada com sucesso"

---

### 3.2 Perfil do Pescador

#### US-004: Ver Perfil
**Como** usuário, **quero** visualizar meu perfil, **para** ver minhas estatísticas e informações.

**Critérios de Aceite:**
- [ ] Foto de perfil (máx 5MB, JPG/PNG)
- [ ] Banner de capa (máx 10MB)
- [ ] Nome completo
- [ ] Username (@username)
- [ ] Bio (máx 200 caracteres)
- [ ] Cidade/Estado
- [ ] Data de cadastro
- [ ] Estatísticas: total capturas, maior peixe, espécies
- [ ] Contadores: seguidores, seguindo
- [ ] Conquistas (badges)
- [ ] Nível do pescador
- [ ] Tab de capturas recentes
- [ ] Botão "Editar Perfil" (próprio) ou "Seguir" (outros)

---

#### US-005: Editar Perfil
**Como** usuário, **quero** editar minhas informações, **para** manter meu perfil atualizado.

**Critérios de Aceite:**
- [ ] Editar: nome, bio, cidade, estado
- [ ] Upload foto de perfil com crop circular
- [ ] Upload banner com preview
- [ ] Validação: bio máx 200 chars
- [ ] Salvar alterações com toast de sucesso
- [ ] Cancelar volta sem salvar
- [ ] Loading durante upload

---

### 3.3 Feed

#### US-006: Visualizar Feed
**Como** usuário, **quero** ver um feed de publicações, **para** acompanhar o que outros pescadores estão postando.

**Critérios de Aceite:**
- [ ] Feed infinito (paginação de 20 posts)
- [ ] Posts ordenados por data (recentes primeiro)
- [ ] Cada post mostra: foto, autor, dados da captura, likes, comments
- [ ] Pull-to-refresh
- [ ] Skeleton loading durante carregamento
- [ ] Empty state quando não há posts
- [ ] Botão flutuante "+" para criar post

---

#### US-007: Criar Postagem
**Como** usuário, **quero** criar uma publicação, **para** compartilhar minha pescaria com a comunidade.

**Critérios de Aceite:**
- [ ] Upload de 1 foto (obrigatório) ou vídeo
- [ ] Limites: foto 10MB, vídeo 50MB
- [ ] Texto: máx 500 caracteres
- [ ] Selecionar pesqueiro (busca ou criar novo)
- [ ] Selecionar espécie do peixe
- [ ] Peso em kg (obrigatório para capturas)
- [ ] Marcar massas/equipamentos (opcional)
- [ ] Preview antes de publicar
- [ ] Publicar em até 30 segundos (upload em background)
- [ ] Post aparece no feed imediatamente (otimista)

---

### 3.4 Capturas

#### US-008: Registrar Captura
**Como** pescador, **quero** registrar cada peixe que capturei, **para** ter um histórico completo e detalhado.

**Critérios de Aceite:**

| Campo | Tipo | Obrigatório | Validação |
|-------|------|-------------|-----------|
| Espécie | Select | Sim | Lista pré-definida + "Outra" |
| Peso | Number | Sim | 0.1 - 500 kg, 1 casa decimal |
| Comprimento | Number | Não | 1 - 300 cm |
| Pesqueiro | Select/Busca | Sim | Buscar ou cadastrar novo |
| Data | Date | Sim | Não pode ser futuro |
| Horário | Time | Sim | - |
| Massa utilizada | Text/Select | Sim | Máx 100 caracteres |
| Equipamento | Text | Não | Máx 200 caracteres |
| Foto/Vídeo | Media | Sim | Máx 10MB foto, 50MB vídeo |
| Observações | Text | Não | Máx 500 caracteres |

**Regras de Negócio:**
- Captura vinculada ao perfil do usuário
- Atualiza automaticamente: total de capturas, maior peixe
- Cria post no feed automaticamente (se habilitado)
- Histórico imutável (não pode editar após 24h)

---

#### US-009: Visualizar Histórico de Capturas
**Como** usuário, **quero** ver todas as minhas capturas, **para** acompanhar minha evolução ao longo do tempo.

**Critérios de Aceite:**
- [ ] Lista cronológica (mais recente primeiro)
- [ ] Filtros: espécie, pesqueiro, período, peso
- [ ] Ordenação: data, peso, espécie
- [ ] Cards com: foto, espécie, peso, data, pesqueiro
- [ ] Click no card abre detalhes completos
- [ ] Estatísticas automáticas visíveis
- [ ] Gráfico de capturas por mês (básico)

---

### 3.5 Pesqueiros

#### US-010: Visualizar Página do Pesqueiro
**Como** usuário, **quero** ver a página completa de um pesqueiro, **para** decidir se vou até lá.

**Critérios de Aceite:**
- [ ] Galeria de fotos (próprias + visitantes)
- [ ] Vídeos (se disponíveis)
- [ ] Localização no mapa (link para Waze/Google Maps)
- [ ] Endereço completo
- [ ] Horário de funcionamento
- [ ] Preço da entrada
- [ ] Espécies disponíveis (lista)
- [ ] Recordes do local
- [ ] Regras do pesqueiro
- [ ] Contato: WhatsApp, Instagram, Site
- [ ] Avaliações: média + reviews
- [ ] Feed de posts recentes
- [ ] Eventos e promoções ativos
- [ ] Botão "Avaliar" (visitantes)
- [ ] Botão "Como Chegar" (abre mapa)

---

#### US-011: Avaliar Pesqueiro
**Como** usuário, **quero** avaliar um pesqueiro que visitei, **para** ajudar outros pescadores na decisão.

**Critérios de Aceite:**
- [ ] Nota geral: 1-5 estrelas (obrigatório)
- [ ] Critérios individuais (1-5 cada):
  - Quantidade de peixes
  - Limpeza
  - Restaurante
  - Banheiro
  - Atendimento
  - Preço
  - Estrutura
- [ ] Comentário: máx 500 caracteres
- [ ] Foto opcional (máx 5MB)
- [ ] 1 avaliação por usuário por pesqueiro
- [ ] Pode editar avaliação em até 30 dias
- [ ] Média recalculada automaticamente
- [ ] Aparece na página do pesqueiro

---

### 3.6 Mapa

#### US-012: Visualizar Mapa de Pesqueiros
**Como** usuário, **quero** ver um mapa com todos os pesqueiros, **para** descobrir opções perto de mim.

**Critérios de Aceite:**
- [ ] Mapa interativo (Mapbox ou Google Maps)
- [ ] Marcadores personalizados por pesqueiro
- [ ] Cluster automático quando zoom baixo
- [ ] Meu localização atual (botão "Localizar")
- [ ] Click rápido no marcador: popup com nome, nota, foto
- [ ] Click longo ou detalhe: navega para página completa
- [ ] Filtros: espécie, preço, avaliação, distância
- [ ] Busca por nome no mapa
- [ ] Marcadores coloridos por avaliação (verde = bom, vermelho = ruim)

---

### 3.7 Pesquisa

#### US-013: Buscar Conteúdo
**Como** usuário, **quero** buscar pessoas, pesqueiros e espécies, **para** encontrar o que preciso rapidamente.

**Critérios de Aceite:**
- [ ] Barra de busca no header
- [ ] Busca por: pessoas, pesqueiros, espécies
- [ ] Resultados em tempo real (debounce 300ms)
- [ ] Histórico de buscas (últimas 10)
- [ ] Sugestões automáticas
- [ ] Empty state: "Nenhum resultado para 'xxx'"
- [ ] Click no resultado navega para página

---

### 3.8 Notificações

#### US-014: Receber Notificações
**Como** usuário, **quero** ser notificado de interações, **para** não perder nada importante.

**Critérios de Aceite:**
- [ ] Push notification para:
  - Novo seguidor
  - Curtida no post
  - Comentário no post
  - Menção em comentário
  - Resposta a comentário
- [ ] Centro de notificações in-app
- [ ] Badge no ícone (contagem)
- [ ] Marcar como lida (swipe ou click)
- [ ] Configurações: ativar/desativar por tipo
- [ ] Não notificar o próprio usuário

---

### 3.9 Interações Sociais

#### US-015: Curtir Post
**Como** usuário, **quero** curtir posts, **para** demonstrar apoio ao conteúdo.

**Critérios de Aceite:**
- [ ] Botão de curtir (coração)
- [ ] Toggle: curtir/descurtir
- [ ] Contador de likes atualizado em tempo real
- [ ] Animação ao curtir
- [ ] Lista de quem curtiu (visível para autor)

---

#### US-016: Comentar Post
**Como** usuário, **quero** comentar em posts, **para** interagir com a comunidade.

**Critérios de Aceite:**
- [ ] Campo de comentário expandível
- [ ] Máx 500 caracteres
- [ ] Publicar com botão ou Enter
- [ ] Comentários em thread
- [ ] Editar/excluir próprio comentário
- [ ] Notificar autor do post
- [ ] Notificar mencionados (@username)

---

#### US-017: Seguir Usuário
**Como** usuário, **quero** seguir outros pescadores, **para** ver mais conteúdo deles no feed.

**Critérios de Aceite:**
- [ ] Botão "Seguir" no perfil e nos posts
- [ ] Toggle: seguir/deixar de seguir
- [ ] Contador de seguidores atualizado
- [ ] Feed personalizado: posts de quem sigo + descobertas
- [ ] Notificar quando alguém seguir

---

### 3.10 Mídia

#### US-018: Upload de Fotos
**Como** usuário, **quero** fazer upload de fotos, **para** ilustrar minhas capturas e posts.

**Critérios de Aceite:**
- [ ] Selecionar da galeria ou tirar foto
- [ ] Formatos: JPG, PNG, HEIC
- [ ] Tamanho máximo: 10MB
- [ ] Compressão automática
- [ ] Preview antes de confirmar
- [ ] Crop básico disponível
- [ ] Upload em background (não bloqueia UI)
- [ ] Progresso de upload visível

---

#### US-019: Upload de Vídeos
**Como** usuário, **quero** fazer upload de vídeos, **para** compartilhar momentos especiais.

**Critérios de Aceite:**
- [ ] Selecionar da galeria
- [ ] Formatos: MP4, MOV
- [ ] Tamanho máximo: 50MB
- [ ] Duração máxima: 5 minutos
- [ ] Thumbnail automático
- [ ] Player integrado no feed
- [ ] Upload em background
- [ ] Progresso visível

---

## 4. Fluxos de Usuário

### 4.1 Fluxo de Cadastro

```
┌─────────────┐
│  Tela Login  │
└──────┬──────┘
       │ Click "Cadastrar"
       ▼
┌─────────────────┐
│ Formulário      │
│ - Nome          │
│ - Email         │
│ - Senha         │
│ - Username      │
└──────┬──────────┘
       │ Submit
       ▼
┌─────────────────┐
│ Verificar Email  │
│ (código 6 dígitos)│
└──────┬──────────┘
       │ Código correto
       ▼
┌─────────────────┐
│ Completar Perfil │
│ - Foto (opc)     │
│ - Bio (opc)      │
│ - Cidade         │
└──────┬──────────┘
       │ Pular ou Salvar
       ▼
┌─────────────────┐
│   Dashboard      │
└─────────────────┘
```

### 4.2 Fluxo de Captura

```
┌─────────────┐
│  Home/Feed   │
└──────┬──────┘
       │ Click "+"
       ▼
┌─────────────────┐
│ Nova Captura     │
│ 1. Pesqueiro     │
│ 2. Espécie       │
│ 3. Peso          │
│ 4. Massa         │
│ 5. Foto/Vídeo    │
│ 6. Observações   │
└──────┬──────────┘
       │ Publicar
       ▼
┌─────────────────┐
│ Upload mídia     │
│ (progresso)      │
└──────┬──────────┘
       │ Sucesso
       ▼
┌─────────────────┐
│ Captura criada!  │
│ → Aparece no feed│
│ → Atualiza stats │
└─────────────────┘
```

### 4.3 Fluxo de Avaliação

```
┌─────────────────┐
│ Página Pesqueiro │
└──────┬──────────┘
       │ Click "Avaliar"
       ▼
┌─────────────────┐
│ Modal Avaliação  │
│ - Nota geral     │
│ - Critérios      │
│ - Comentário     │
│ - Foto (opc)     │
└──────┬──────────┘
       │ Enviar
       ▼
┌─────────────────┐
│ Avaliação salva  │
│ Média atualizada │
│ Aparece na lista │
└─────────────────┘
```

### 4.4 Fluxo de Busca

```
┌─────────────┐
│ Header       │
│ [🔍 Buscar] │
└──────┬──────┘
       │ Click
       ▼
┌─────────────────┐
│ Tela de Busca   │
│ - Histórico     │
│ - Busca ativa   │
└──────┬──────────┘
       │ Digita
       ▼
┌─────────────────┐
│ Resultados      │
│ - Pessoas       │
│ - Pesqueiros    │
│ - Espécies      │
└──────┬──────────┘
       │ Click resultado
       ▼
┌─────────────────┐
│ Página destino  │
└─────────────────┘
```

---

## 5. Requisitos Não-Funcionais

### 5.1 Performance

| Requisito | Meta | Medição |
|-----------|------|---------|
| Tempo de carregamento do feed | < 2 segundos | Lighthouse, Firebase |
| Tempo de upload de foto | < 5s (3G) | Teste real |
| Tempo de resposta de API | < 500ms | p95 |
| Tempo de abertura do app | < 3 segundos | Cold start |
| Tamanho do APK/IPA | < 50MB | Build |

### 5.2 Segurança

| Requisito | Implementação |
|-----------|---------------|
| Autenticação | JWT com refresh token |
| Senhas | bcrypt, 12 rounds |
| Controle de acesso | Row Level Security (RLS) no Supabase |
| Validação | Server-side em todas as APIs |
| Rate limiting | 100 req/min por usuário |
| Transporte | HTTPS obrigatório |
| Dados sensíveis | Criptografia em repouso |
| Logs | Auditoria de ações críticas |

### 5.3 Usabilidade

| Requisito | Nível |
|-----------|-------|
| Acessibilidade | WCAG 2.1 AA |
| Funcionalidade offline | Leitura de cache |
| Suporte a rede | 3G, 4G, 5G, WiFi |
| Idioma | Português (BR) |
| Orientação | Portrait e Landscape |

### 5.4 Compatibilidade

| Plataforma | Versão Mínima |
|------------|---------------|
| iOS | 14.0+ |
| Android | 8.0 (API 26)+ |
| Expo SDK | 50+ |
| Node.js | 18+ |

---

## 6. Estrutura de Dados

### 6.1 Modelo de Dados (PostgreSQL/Supabase)

```sql
-- ============================================
-- TABELA: users
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
  photos TEXT[],
  videos TEXT[],
  rules TEXT,
  species_available TEXT[],
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
  criteria JSONB NOT NULL,
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
  type TEXT NOT NULL,
  from_user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  post_id UUID,
  comment_id UUID,
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
-- INDEXES
-- ============================================
CREATE INDEX idx_catches_user ON catches(user_id);
CREATE INDEX idx_catches_fishery ON catches(fishery_id);
CREATE INDEX idx_catches_species ON catches(species);
CREATE INDEX idx_catches_caught_at ON catches(caught_at DESC);
CREATE INDEX idx_posts_user ON posts(user_id);
CREATE INDEX idx_posts_created_at ON posts(created_at DESC);
CREATE INDEX idx_reviews_fishery ON reviews(fishery_id);
CREATE INDEX idx_follows_follower ON follows(follower_id);
CREATE INDEX idx_follows_following ON follows(following_id);
CREATE INDEX idx_notifications_user ON notifications(user_id, is_read);

-- ============================================
-- FUNÇÕES E TRIGGERS
-- ============================================

-- Atualizar contadores de likes
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

CREATE TRIGGER trigger_likes_count
AFTER INSERT OR DELETE ON likes
FOR EACH ROW EXECUTE FUNCTION update_likes_count();

-- Atualizar contadores de comentários
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

CREATE TRIGGER trigger_comments_count
AFTER INSERT OR DELETE ON comments
FOR EACH ROW EXECUTE FUNCTION update_comments_count();
```

### 6.2 Diagrama ER (Simplificado)

```
┌─────────┐       ┌─────────┐       ┌─────────┐
│  users  │──────<│ follows │>──────│  users  │
└────┬────┘       └─────────┘       └─────────┘
     │
     ├──────<┌─────────┐
     │       │  posts  │
     │       └────┬────┘
     │            │
     ├──────<┌────┴────┐
     │       │  likes  │
     │       └─────────┘
     │
     ├──────<┌──────────┐
     │       │ comments │
     │       └──────────┘
     │
     ├──────<┌─────────┐
     │       │ catches │>──────<┌──────────┐
     │       └─────────┘        │fisheries │
     │                          └──────────┘
     │
     └──────<┌──────────┐
             │ reviews  │
             └──────────┘
```

---

## 7. Design System

### 7.1 Paleta de Cores

| Cor | Hex | Uso |
|-----|-----|-----|
| Azul Primário | #0066CC | Botões principais, links, header |
| Verde Sucesso | #00AA55 | Capturas, feedback positivo |
| Laranja Atenção | #FF8800 | Avisos, eventos, destaque |
| Vermelho Erro | #CC0000 | Erros, exclusões, perigo |
| Cinza Texto | #333333 | Texto principal |
| Cinza Secundário | #666666 | Texto auxiliar |
| Cinza Claro | #F5F5F5 | Fundo |
| Branco | #FFFFFF | Cards, superfícies |

### 7.2 Tipografia

| Elemento | Fonte | Tamanho | Peso |
|----------|-------|---------|------|
| H1 | Inter | 28px | Bold |
| H2 | Inter | 22px | Bold |
| H3 | Inter | 18px | SemiBold |
| Body | Inter | 16px | Regular |
| Caption | Inter | 14px | Regular |
| Small | Inter | 12px | Regular |
| Mono (dados) | JetBrains Mono | 14px | Regular |

### 7.3 Espaçamento

| Token | Valor |
|-------|-------|
| xs | 4px |
| sm | 8px |
| md | 16px |
| lg | 24px |
| xl | 32px |
| xxl | 48px |

### 7.4 Componentes

| Componente | Descrição |
|------------|-----------|
| ButtonPrimary | Fundo azul, texto branco, arredondado |
| ButtonSecondary | Fundo transparente, borda azul |
| CardCatch | Card com foto, dados da captura |
| CardFishery | Card com foto, nome, avaliação |
| InputText | Campo de texto com label |
| InputNumber | Campo numérico com validação |
| Avatar | Circular, tamanhos: sm, md, lg |
| Badge | Conquistas e níveis |
| BottomNav | 5 itens: Home, Captura, Mapa, Notif, Perfil |
| Header | Logo, busca, notificações |

---

## 8. Arquitetura Técnica

### 8.1 Stack Tecnológica

```
┌─────────────────────────────────────────────┐
│                  FRONTEND                    │
│  React Native + Expo + TypeScript           │
│  React Navigation + React Query             │
│  NativeWind (Tailwind CSS)                  │
└──────────────────┬──────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────┐
│                  BACKEND                     │
│  Supabase                                   │
│  ├── Auth (JWT + OAuth)                     │
│  ├── PostgreSQL (banco de dados)            │
│  ├── Storage (fotos e vídeos)               │
│  ├── Realtime (subscriptions)               │
│  └── Edge Functions (lógica customizada)    │
└─────────────────────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────┐
│               SERVIÇOS EXTERNOS             │
│  ├── Mapbox (mapas)                         │
│  ├── Firebase Cloud Messaging (push)        │
│  └── OpenAI API (IA - futuro)               │
└─────────────────────────────────────────────┘
```

### 8.2 Estrutura de Pastas

```
fishhub/
├── app/                    # Rotas Expo Router
│   ├── (auth)/            # Telas de autenticação
│   ├── (tabs)/            # Telas principais (tab nav)
│   └── [id]/              # Telas dinâmicas
├── components/            # Componentes reutilizáveis
│   ├── ui/               # Componentes genéricos
│   ├── captures/         # Componentes de capturas
│   ├── fisheries/        # Componentes de pesqueiros
│   └── feed/             # Componentes do feed
├── lib/                   # Utilitários
│   ├── supabase.ts       # Cliente Supabase
│   ├── api.ts            # Chamadas API
│   └── utils.ts          # Funções auxiliares
├── hooks/                 # Custom hooks
├── types/                 # Tipos TypeScript
├── constants/             # Constantes
└── assets/               # Imagens, fontes
```

---

## 9. Monetização

### 9.1 Fontes de Receita

| Fonte | Modelo | Preço Estimado |
|-------|--------|----------------|
| **Perfil Oficial Pesqueiro** | Assinatura mensal | R$ 79/mês |
| **Plano Premium Pescador** | Assinatura mensal | R$ 19,90/mês |
| **Destaque Patrocinado** | Pay-per-view | R$ 0,50/clique |
| **Marketplace** | Comissão | 10% por venda |
| **Eventos** | Venda de espaço | R$ 200-500/evento |
| **Publicidade Display** | CPM | R$ 15/mil impressões |

### 9.2 Benefits Premium

**Pescador Premium (R$ 19,90/mês):**
- Estatísticas avançadas
- Storage ilimitado
- IA consultora (futuro)
- Badge exclusivo
- Suporte prioritário

**Pesqueiro Oficial (R$ 79/mês):**
- Página verificada
- Analytics completo
- Criar eventos/promoções
- Responder avaliações
- Destaque no mapa
- Relatórios mensais

---

## 10. Roadmap

### Fase 1: MVP (Semanas 1-12)

| Semana | Entregável |
|--------|------------|
| 1-2 | Setup projeto, autenticação completa |
| 3-4 | Perfis, edição de perfil |
| 5-6 | Feed, criar postagens |
| 7-8 | Sistema de capturas |
| 9-10 | Pesqueiros, avaliações |
| 11 | Mapa, busca |
| 12 | Testes, ajustes, beta |

### Fase 2: Expansão (Meses 4-6)
- Blog/Notícias
- Rankings
- Conquistas
- Eventos
- Comunidades
- Chat

### Fase 3: IA (Meses 7-9)
- IA especialista em pesca
- Recomendações
- Diário automático
- Relatórios inteligentes

### Fase 4: Marketplace (Meses 10-12)
- Venda de produtos
- Integração com lojas
- Sistema de pagamentos

---

## 11. Riscos e Mitigações

| Risco | Probabilidade | Impacto | Mitigação |
|-------|---------------|---------|-----------|
| Poucos pesqueiros cadastrados | Alta | Alto | Seed com 50 pesqueiros manuais |
| Baixa retenção inicial | Alta | Alto | Onboarding guiado, push notification |
| Performance ruim | Média | Alto | Cache, lazy loading, otimização |
| Custos Supabase altos | Média | Médio | Monitorar desde dia 1, plano free |
| Moderacao de conteúdo | Média | Médio | Sistema de denúncia + IA (futuro) |
| Concorrência | Baixa | Baixo | Foco em nicho, não existe similar |

---

## 12. Critérios de Aceite Gerais

### 12.1 Para cada US ser considerada "Pronta":
- [ ] Código implementado e revisado
- [ ] Testes unitários (cobertura > 80%)
- [ ] Testes de integração
- [ ] UI responsiva (Android + iOS)
- [ ] Acessibilidade verificada
- [ ] Performance dentro das metas
- [ ] Documentação atualizada
- [ ] Deploy em staging aprovado

### 12.2 Para release do MVP:
- [ ] Todas as US do MVP implementadas
- [ ] Testes E2E passando
- [ ] Performance >= benchmark
- [ ] Sem bugs críticos ou altos
- [ ] App aprovado nas lojas
- [ ] Monitoramento configurado

---

## 13. Anexos

### 13.1 Glosário

| Termo | Definição |
|-------|-----------|
| Captura | Registro de um peixe pescado |
| Pesqueiro | Local de pesca esportiva |
| Massa | Iscas artificiais (tipo de isca) |
| Tamba | Tambaqui |
| MAU | Monthly Active Users |
| DAU | Daily Active Users |
| NPS | Net Promoter Score |
| CAC | Customer Acquisition Cost |
| LTV | Lifetime Value |
| MRR | Monthly Recurring Revenue |

### 13.2 Referências
- Supabase Documentation: https://supabase.com/docs
- React Native: https://reactnative.dev
- Expo: https://docs.expo.dev
- Mapbox: https://docs.mapbox.com

---

**Fim do Documento**

*Versão 1.0 - Junho 2026*
