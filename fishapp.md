# FishHub - Documento do Projeto

> A maior comunidade de pesca esportiva do Brasil. O "Strava da pesca".

---

## 1. Visão Geral

### Conceito
Rede social especializada em pesca esportiva. Cada pescaria vira um registro, os pesqueiros têm páginas oficiais, há rankings, comunidades, eventos, blog e uma IA especializada que ajuda antes e durante a pescaria.

### Público-Alvo
- Pescadores iniciantes e experientes
- Pesqueiros (proprietários)
- Fabricantes de massas e equipamentos
- Guias de pesca
- Lojas de pesca
- Influenciadores do ramo

### Proposta de Valor
Nenhum aplicativo brasileiro reúne, em um único lugar:
- Rede social especializada em pesca
- Perfis oficiais de pesqueiros
- Diário digital de pescarias
- Mapa nacional de pesqueiros
- Estatísticas detalhadas de capturas
- IA treinada para pesca esportiva
- Marketplace especializado
- Sistema de rankings e conquistas
- Comunidades por pesqueiro
- Conteúdo técnico e educativo

### O que NÃO somos
- Não somos um Instagram genérico
- Não somos Facebook
- Somos algo pensado para pescadores

---

## 2. Nome e Marca

### Opções de Nome
| Nome | Observação |
|------|------------|
| FishHub | ⭐ Favorito - memorável, fácil de falar |
| Hook | Curto e direto |
| Pesca+ | Regional |
| FishNet | Técnico |
| AquaHub | Abrangente |
| FishBook | Social |
| Pesca BR | Nacional |
| FishLife | Estilo de vida |
| Monster Fishing | Para usar marca futuramente |

**Critérios para escolha:** memorável, fácil de falar, funciona como marca.

---

## 3. Funcionalidades MVP (v1.0)

### 3.1 Autenticação e Perfis

**Cadastro/Login:**
- Cadastro completo
- Login
- Recuperação de senha

**Perfil do Pescador:**
- Foto de perfil e banner
- Bio
- Cidade/Estado
- Quantidade de capturas
- Maior peixe capturado
- Espécies capturadas
- Pesqueiros visitados
- Seguidores/Seguindo
- Conquistas e nível

### 3.2 Feed

**Tipos de Postagem:**
- Foto
- Vídeo
- Texto

**Interações:**
- Curtidas
- Comentários
- Compartilhamentos
- Salvar publicação
- Denunciar

**Padrão de postagem de captura:**
```
🐟 Espécie
⚖️ Peso
📍 Pesqueiro
📅 Data
🎣 Massa utilizada
📸 Foto
```

### 3.3 Capturas (Funcionalidade Exclusiva)

Cada peixe vira um registro detalhado:

| Campo | Obrigatório |
|-------|-------------|
| Espécie | Sim |
| Peso | Sim |
| Comprimento | Não |
| Pesqueiro | Sim |
| Data | Sim |
| Horário | Sim |
| Massa utilizada | Sim |
| Equipamento | Não |
| Foto/Vídeo | Sim |
| Observações | Não |

**Estatísticas do usuário:**
- Maior peixe (por espécie)
- Total de capturas
- Quantidade por espécie
- Dias consecutivos pescando

### 3.4 Pesqueiros

**Página Oficial:**
- Fotos e vídeos
- Localização (mapa)
- Horário de funcionamento
- Valor da entrada
- Tipos de peixe disponíveis
- Recordes do local
- Regras
- Contato (WhatsApp, Instagram, Site)
- Reservas
- Avaliações
- Fotos enviadas por visitantes
- Eventos e promoções
- Feed próprio

**Painel do Proprietário:**
- Responder avaliações
- Criar eventos
- Publicar promoções
- Atualizar preços e estoque de peixes
- Postar vídeos
- Anunciar torneios

### 3.5 Mapa

**Diferencial competitivo:**
- Mapa completo do Brasil
- Todos os pesqueiros cadastrados como pontos
- Ao clicar: Fotos, Vídeos, Espécies, Preço, Contato, Ranking, Avaliações, Eventos

### 3.6 Pesquisa

Busca por:
- Pessoas
- Pesqueiros
- Espécies

### 3.7 Notificações

- Novo seguidor
- Curtidas
- Comentários
- Menções

### 3.8 Mídia

Upload de:
- Fotos
- Vídeos

---

## 4. Funcionalidades Futuras (v2.0+)

### Blog
- Qualquer pessoa pode publicar
- **Categorias:** Relato, Tutorial, Dicas, Equipamentos, Massas, Pesqueiros, Eventos, Campeonatos, Receitas de massas

### Ranking
- Brasil / Estado / Cidade / Pesqueiro
- Maior peixe
- Mais capturas
- Mais curtidas
- Top fotógrafos
- Top pescadores

### Conquistas
- Primeiro peixe
- Primeiro tamba
- Primeiro peixe acima de 20kg
- 100 capturas
- 1000 curtidas
- Visitou 10 pesqueiros
- Top fotógrafo
- Top pescador

### Eventos
- Calendário de eventos
- Campeonatos
- Encontros
- Festivais
- Torneios

### Comunidades
- Cada pesqueiro possui uma comunidade
- Usuários conversam, postam fotos, marcam encontros
- Perguntam qual massa está funcionando

### Chat
- Mensagens entre usuários

### Sistema de Clipes
- Vídeos curtos (30-60 segundos)
- Parecido com Reels

### Inteligência Artificial (Grande Diferencial)

O pescador pergunta: *"Vou pescar no Pesqueiro X amanhã."*

A IA responde:
- Previsão do tempo
- Vento
- Pressão atmosférica
- Melhor horário
- Massas mais usadas naquele local
- Relatos recentes
- Profundidade recomendada
- Equipamento sugerido
- Peixes ativos

**Quanto mais usuários, melhor a IA fica.**

### Diário de Pesca Automático
- Detecta automaticamente onde você está
- Pergunta: *"Deseja iniciar uma pescaria?"*
- Registra durante o dia: peixes, fotos, vídeos, equipamentos, massas
- Gera relatório completo no final

### Marketplace
- Massas, Varas, Molinetes, Anzóis, Linhas
- Camisetas, Bonés, Acessórios

---

## 5. Páginas de Espécies

Cada espécie tem sua própria página:

**Exemplo: Tambaqui**
- Descrição
- Peso máximo
- Recordes
- Melhores massas
- Melhores horários
- Melhores pesqueiros
- Vídeos e Fotos
- Dicas

---

## 6. Tecnologias

| Camada | Tecnologia |
|--------|------------|
| Frontend | React Native + Expo + TypeScript |
| Navegação | React Navigation |
| State | React Query |
| Estilo | NativeWind (Tailwind para React Native) |
| Backend | Supabase |
| Banco | PostgreSQL |
| Storage | Supabase Storage |
| Realtime | Supabase Realtime |
| APIs Serverless | Supabase Edge Functions |
| IA | OpenAI API + Base de conhecimento própria |
| Mapas | Mapbox (mais flexível) ou Google Maps |
| Notificações | Firebase Cloud Messaging |

---

## 7. Arquitetura Sugerida

### Estrutura de Pastas
```
FishHub/
├── 00-VISAO-GERAL.md
├── 01-ROADMAP.md
├── 02-REGRAS-DE-NEGOCIO.md
├── 03-ARQUITETURA.md
├── 04-DESIGN-SYSTEM.md
├── 05-BANCO-DE-DADOS.md
├── 06-BACKEND.md
├── 07-FRONTEND.md
├── 08-AUTENTICACAO.md
├── 09-USUARIOS.md
├── 10-FEED.md
├── 11-CAPTURAS.md
├── 12-PESQUEIROS.md
├── 13-MAPA.md
├── 14-COMENTARIOS.md
├── 15-CURTIDAS.md
├── 16-NOTIFICACOES.md
├── 17-UPLOADS.md
├── 18-ADMIN.md
├── 19-SEGURANCA.md
├── 20-API.md
├── 21-MONETIZACAO.md
├── 22-TESTES.md
├── 23-LANCAMENTO.md
└── README.md
```

### Módulos Independentes
- Autenticação
- Perfis
- Rede Social (feed, curtidas, comentários, seguidores)
- Capturas
- Pesqueiros
- Mapa
- Notificações

---

## 8. Monetização

| Fonte | Descrição |
|-------|-----------|
| Perfis oficiais | Assinatura mensal para pesqueiros |
| Destaque patrocinado | Para pesqueiros e lojas |
| Publicidade | Segmentada para fabricantes |
| Marketplace | Comissão sobre vendas |
| Plano Premium | Estatísticas avançadas, storage ilimitado, IA exclusiva |
| Eventos | Venda de espaços para campeonatos |

---

## 9. Roadmap

### Fase 1 - MVP
**Objetivo:** Colocar no ar rapidamente com valor real.

| Funcionalidade | Status |
|----------------|--------|
| Cadastro/Login | ✅ |
| Perfil | ✅ |
| Feed | ✅ |
| Curtidas/Comentários | ✅ |
| Fotos/Vídeos | ✅ |
| Seguir usuários | ✅ |
| Busca | ✅ |
| Página dos pesqueiros | ✅ |
| Mapa | ✅ |
| Cadastro de capturas | ✅ |

### Fase 2 - Expansão
- Blog
- Ranking
- Conquistas
- Eventos
- Comunidades
- Chat
- Notificações

### Fase 3 - IA e Inteligência
- IA especialista em pesca
- Recomendação de massas
- Melhor horário
- Clima e pressão atmosférica
- Histórico do pesqueiro
- Relatórios

### Fase 4 - Marketplace
- Venda de massas, varas, equipamentos
- Camisetas, bonés, acessórios

---

## 10. Etapas de Desenvolvimento

| Etapa | Conteúdo |
|-------|----------|
| 1. Planejamento | Marca, identidade visual, modelo de negócio, MVP, arquitetura |
| 2. Design | Protótipo, fluxos de navegação, design system |
| 3. Desenvolvimento | React Native, Supabase, PostgreSQL, APIs |
| 4. Lançamento | Testes beta, ajustes, publicação, estratégia de crescimento |

---

## 11. Sprints de Desenvolvimento

| Sprint | Foco |
|--------|------|
| Sprint 1 | Fundação (nome, identidade, arquitetura, banco, design system) |
| Sprint 2 | Protótipo (telas navegáveis, fluxos, validação) |
| Sprint 3 | MVP (auth, perfis, feed, diário, capturas, pesqueiros, mapa) |
| Sprint 4 | Beta (testes com pescadores, ajustes, publicação) |

---

## 12. Diferencial Competitivo

> *"Pense no que cada grande plataforma representa: Instagram → Fotos, Strava → Esportes, LinkedIn → Profissionais, iFood → Delivery. Nós vamos criar: A maior comunidade de pesca esportiva do Brasil."*

O objetivo é que qualquer pessoa envolvida com pesca abra esse aplicativo todos os dias.

---

## 13. Próximos Passos

1. Criar PRD (Product Requirements Document) profissional
2. Definir nome definitivo
3. Criar identidade visual
4. Prototipar telas
5. Iniciar desenvolvimento do MVP
