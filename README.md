# ⛪ Site Oficial — Igreja Cristã Evangélica em Cohatrac (ICE Cohatrac)

[![Next.js](https://img.shields.io/badge/Next.js-16.4-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Denominação](https://img.shields.io/badge/Denomina%C3%A7%C3%A3o-AICEB-navy)](https://aiceb.com.br/)
[![Status](https://img.shields.io/badge/Status-Produ%C3%A7%C3%A3o%20Pronta-emerald)](#)

Portal institucional e aplicação web dinâmica da **Igreja Cristã Evangélica em Cohatrac (ICE Cohatrac)**, situada em São Luís - MA. Desenvolvido em **Next.js com App Router**, com design sóbrio, reverente e de padrão internacional, perfeitamente alinhado à herança histórica e reformada da denominação (**AICEB** — fundada em 1947 no Maranhão).

---

## 📋 Sumário
1. [Visão Geral & Recursos](#-visão-geral--recursos)
2. [Estrutura do Projeto](#-estrutura-do-projeto)
3. [Deploy Automatizado na VM Linux (Recomendado)](#-deploy-automatizado-na-vm-linux-em-1-comando)
4. [Atualização Contínua em Produção](#-atualização-contínua-em-produção)
5. [Execução em Desenvolvimento Local](#-execução-em-desenvolvimento-local)
6. [Configurações Manuais do Apache & Systemd](#-configurações-manuais-do-apache--systemd)
7. [Personalização de Imagens & Logos](#-personalização-de-imagens--logos)
8. [Dados Institucionais](#-dados-institucionais)

---

## 🌟 Visão Geral & Recursos

- **Tecnologia Moderna:** Next.js 16 (App Router), React 19, TypeScript e CSS Modules com variáveis semânticas centralizadas.
- **Identidade Visual Sóbria e Nobre:** Paleta oficial baseada nas cores da igreja e da AICEB (Azul Noturno `#0A1E36`, Azul Royal `#1D5B9B`, Dourado Litúrgico `#C89B3C` e superfícies contrastantes).
- **100% Responsivo:** Menu hamburger com drawer lateral animado, sem overflow horizontal em telas pequenas (desde 320px até 4K).
- **11 Seções Institucionais Completas:**
  1. **Navbar:** Logo oficial com fallback SVG, menu responsivo mobile e indicador dinâmico de culto ao vivo.
  2. **Hero:** Apresentação solene da igreja, lema bíblico (*Soli Deo Gloria*), botões de ação e grade rápida de cultos.
  3. **Sobre Nós:** História da fundação (2002), filiação à AICEB, selo institucional e valores da congregação.
  4. **No Que Cremos:** Cards dos *Cinco Solas da Reforma* e Accordion interativo com a *Confissão de Fé da AICEB* (estruturada em tópicos doutrinários).
  5. **Liderança:** Corpo pastoral (Pr. Madson Oliveira, Pr. Mário Rúbens, Ev. Daniel) e conselho eclesiástico (Presbitério e Diaconia).
  6. **Ministérios:** Departamentos oficiais (EBD, Coral da ICE Cohatrac, Ministério Infantil - MCC, Jovens, Famílias e Missões).
  7. **Programação Semanal:** Grade completa de cultos dominicais, oração e reuniões departamentais (Clube dos Homens, DLOM e Cadetes a Jato).
  8. **Transmissões & Mensagens:** Integração em tempo real com o canal oficial do YouTube ([@ICECOHATRAC](https://www.youtube.com/@ICECOHATRAC)), detectando transmissões ao vivo ou exibindo os vídeos mais recentes com títulos originais do YouTube.
  9. **Dízimos & Ofertas:** Card reverente com texto bíblico (2 Coríntios 9:7), chave PIX oficial da igreja (CNPJ) com cópia em 1 clique e feedback tátil/visual.
  10. **Contato, Oração & Mapa:** 
      - Formulários integrados via API para *Pedidos de Oração* e *Planejamento de Visitas*.
      - Mapa do Google Maps **travado com precisão métrica no templo** na Rua 2100 (Parque Aurora / Cohatrac II), com botão de recentralização e rota direta.
  11. **Rodapé Institucional:** Dados cadastrais (CNPJ, endereço completo), links institucionais, links rápidos e redes oficiais.

---

## 📂 Estrutura do Projeto

```text
Site-ICE-Cohatrac/
├── setup-vm.sh                       # 🚀 Script mestre de deploy automatizado em 1 comando na VM
├── deploy.sh                         # 🔄 Script de atualização rápida (pull + build + restart)
├── deploy/                           # Arquivos de infraestrutura de produção
│   ├── apache-ice-cohatrac.conf      # VirtualHost do Apache 2.4 (Reverse Proxy + WebSockets)
│   ├── ice-cohatrac.service          # Unit do Systemd para auto-start no boot do Linux
│   └── ecosystem.config.js           # Configuração de cluster para PM2 (opcional)
├── scripts/                          # Scripts utilitários de suporte
│   ├── deploy.sh                     # Rotina de deploy contínuo
│   ├── setup-apache.sh               # Configuração rápida dos módulos Apache
│   └── install-service.sh            # Instalação isolada da unit systemd
├── public/                           # Arquivos estáticos servidos diretamente
│   ├── assets/img/                   # Logos, banners e fotos da congregação
│   └── icon.png                      # Favicon da aplicação
├── src/
│   ├── app/
│   │   ├── api/                      # Rotas de API dinâmicas do Next.js
│   │   │   ├── pedidos-oracao/route.ts
│   │   │   ├── transmissoes/route.ts # Busca automática de lives e vídeos do YouTube
│   │   │   └── visitas/route.ts
│   │   ├── globals.css               # Design System global e tokens de tema
│   │   ├── layout.tsx                # Layout raiz, SEO, OpenGraph e Schema.org
│   │   └── page.tsx                  # Estrutura principal da página
│   ├── components/                   # Componentes modulares reutilizáveis
│   │   ├── icons/SocialIcons.tsx     # Ícones vetoriais SVG
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── AboutSection.tsx
│   │   ├── FaithSection.tsx
│   │   ├── LeadershipSection.tsx
│   │   ├── MinistriesSection.tsx
│   │   ├── ScheduleSection.tsx
│   │   ├── SermonsSection.tsx
│   │   ├── GivingSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── Footer.tsx
│   └── data/
│       └── churchData.ts             # Base centralizada de dados da igreja
├── package.json
└── tsconfig.json
```

---

## 🚀 Deploy Automatizado na VM Linux (Em 1 Comando)

Criamos um assistente interativo em Bash (`setup-vm.sh`) que faz **toda a configuração da VM do zero**, sem que você precise configurar o Apache ou o systemd na mão:

### Como rodar na sua VM:

1. Clone o repositório na sua máquina virtual (ou envie os arquivos):
   ```bash
   git clone https://github.com/LeinadSaia/Site-ICE-Cohatrac.git
   cd Site-ICE-Cohatrac
   ```

2. Execute o assistente de deploy com `sudo`:
   ```bash
   sudo bash setup-vm.sh
   ```

### O que o script faz automaticamente por você:
- 🔍 **Identificação e Instalação:** Verifica se o **Apache2** e o **Node.js LTS (20/22)** estão presentes; caso não estejam, instala-os automaticamente via repositórios oficiais.
- 💬 **Assistente Interativo:** Pergunta qual é o **domínio ou IP** do seu servidor, a **porta interna** desejada e se deseja ativar o **SSL (HTTPS gratuito com Let's Encrypt / Certbot)**.
- 🌐 **Configuração do Apache:** Ativa todos os módulos necessários (`proxy`, `proxy_http`, `proxy_wstunnel`, `rewrite`, `headers`, `deflate`), gera o VirtualHost otimizado e desativa a tela padrão do Apache (`000-default`).
- 📦 **Compilação:** Executa `npm install` e `npm run build` gerando a versão de produção otimizada.
- ⚙️ **Inicialização com Systemd:** Cria o serviço `ice-cohatrac.service`, ativa para iniciar junto com o boot da VM e inicia a aplicação.
- 🔒 **Certificado SSL (Opcional):** Se solicitado, executa o Certbot e configura o redirecionamento automático de HTTP para HTTPS.
- 🩺 **Teste de Saúde:** Testa a resposta local da aplicação e exibe o resumo completo com links e comandos de gerenciamento.

---

## 🔄 Atualização Contínua em Produção

Após a primeira instalação, sempre que houver novas alterações ou commits no GitHub, basta entrar na pasta do projeto na VM e rodar:

```bash
bash deploy.sh
```

O comando executará:
1. `git pull origin main` (baixa as últimas alterações).
2. `npm install` (atualiza eventuais dependências).
3. `npm run build` (recompila o site).
4. `sudo systemctl restart ice-cohatrac.service` (reinicia o serviço sem downtime perceptível).

---

## 💻 Execução em Desenvolvimento Local

Caso deseje testar ou desenvolver novas funcionalidades na sua máquina local:

### Pré-requisitos
- Node.js 20+ ou 24+
- NPM ou Bun

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em modo de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

---

## 🛠️ Configurações Manuais do Apache & Systemd

Se você preferir executar as etapas separadamente em vez de usar o `setup-vm.sh`:

### 1. Serviço Systemd (Manual)
O arquivo de modelo está em `deploy/ice-cohatrac.service`. Para instalar via script dedicado:
```bash
sudo bash scripts/install-service.sh
```
Ou comande diretamente:
```bash
# Ver status da aplicação
sudo systemctl status ice-cohatrac

# Acompanhar logs em tempo real
sudo journalctl -u ice-cohatrac -f

# Reiniciar aplicação
sudo systemctl restart ice-cohatrac
```

### 2. VirtualHost do Apache (Manual)
O arquivo de modelo está em `deploy/apache-ice-cohatrac.conf`. Para configurar:
```bash
sudo bash scripts/setup-apache.sh
```
Ou manualmente:
```bash
sudo a2enmod proxy proxy_http proxy_wstunnel rewrite headers deflate
sudo cp deploy/apache-ice-cohatrac.conf /etc/apache2/sites-available/ice-cohatrac.conf
sudo a2ensite ice-cohatrac.conf
sudo apache2ctl configtest
sudo systemctl reload apache2
```

---

## 🖼️ Personalização de Imagens & Logos

O projeto possui **fallbacks visuais elegantes em SVG**. Isso significa que mesmo sem imagens customizadas na pasta, o site é 100% funcional e com estética limpa.

Para adicionar as imagens reais da igreja, salve-as em `public/assets/img/`:
- **Logo da Igreja:** `public/assets/img/logo-ice-cohatrac.png`
- **Banner / Foto do Templo:** `public/assets/img/banner-igreja.png` ou `public/assets/img/hero-bg.jpg`
- **QR Code do PIX:** `public/assets/img/qrcode-pix-ice.png`

---

## 🏛️ Dados Institucionais da Igreja

- **Razão Social:** Igreja Cristã Evangélica da AICEB em Cohatrac
- **Nome Usual:** Igreja Cristã Evangélica em Cohatrac (ICE Cohatrac)
- **Denominação:** Aliança das Igrejas Cristãs Evangélicas do Brasil (AICEB - 1947)
- **CNPJ:** `05.349.364/0001-03`
- **Endereço:** Rua Dois Mil e Cem (Rua 2100), Quadra 23, Nº 11 — Bairro Parque Aurora / Cohatrac, São Luís - MA, CEP `65051-856`
- **Coordenadas Exatas do Templo:** `-2.5374585, -44.2121065`
- **YouTube Oficial:** [@ICECOHATRAC](https://www.youtube.com/@ICECOHATRAC)
- **Instagram Oficial:** [@icecohatrac](https://www.instagram.com/icecohatrac/)
- **Lema:** *Soli Deo Gloria — A Deus toda a glória.*
