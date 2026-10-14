# ⛪ Site Oficial — Igreja Cristã Evangélica em Cohatrac (ICE Cohatrac)

[![Next.js](https://img.shields.io/badge/Next.js-16.4-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![AICEB](https://img.shields.io/badge/Denomina%C3%A7%C3%A3o-AICEB-navy)](https://aiceb.com.br/)
[![Status](https://img.shields.io/badge/Status-Produ%C3%A7%C3%A3o%20Pronta-emerald)](#)

Portal institucional e aplicação web dinâmica da **Igreja Cristã Evangélica em Cohatrac (ICE Cohatrac)**, localizada em São Luís - MA. O projeto foi construído em **Next.js com App Router**, com design sóbrio, reverente e de alta qualidade visual, alinhado à identidade histórica e reformada da denominação (**AICEB** — fundada em 1947 no Maranhão).

---

## 📋 Sumário
1. [Visão Geral & Recursos](#-visão-geral--recursos)
2. [Estrutura do Projeto](#-estrutura-do-projeto)
3. [Execução em Desenvolvimento Local](#-execução-em-desenvolvimento-local)
4. [Guia de Deploy no Linux com Apache (Passo a Passo)](#-guia-de-deploy-no-linux-com-apache-passo-a-passo)
   - [Opção 1: Serviço Systemd (Inicialização Automática no Boot)](#1-serviço-systemd-recomendado-para-linux)
   - [Opção 2: Gerenciador de Processos PM2](#2-opção-alternativa-pm2)
   - [Configuração do Apache 2.4 como Reverse Proxy](#3-configuração-do-apache-24-reverse-proxy)
   - [Certificado SSL HTTPS Gratuito (Certbot / Let's Encrypt)](#4-certificado-ssl-https-gratuito-certbot--lets-encrypt)
5. [Scripts de Automação Incluídos](#-scripts-de-automação-incluídos)
6. [Personalização de Imagens & Logos](#-personalização-de-imagens--logos)
7. [Dados Institucionais](#-dados-institucionais)

---

## 🌟 Visão Geral & Recursos

- **Aplicação Completa em Next.js:** Rápida, dinâmica, acessível e otimizada para SEO local em São Luís - MA.
- **Identidade Visual Fiel:** Paleta oficial baseada nas cores da igreja e da AICEB (Azul Marinho `#0A1E36` / `#12385F`, Azul Royal `#1D5B9B`, Dourado Sóbrio `#C89B3C` e superfícies limpas).
- **11 Seções Institucionais Completas:**
  1. **Navbar Fixa:** Logo com fallback inteligente, menu responsivo mobile e indicador pulsante de transmissão ao vivo.
  2. **Hero:** Apresentação solene, lema bíblico, botões de ação e barra rápida de horários.
  3. **Sobre Nós:** História da fundação em 2002, filiação histórica à AICEB, selo institucional e estatísticas.
  4. **No Que Cremos:** Cards imponentes dos *Cinco Solas da Reforma* e Accordion interativo com a *Confissão de Fé da AICEB*.
  5. **Liderança:** Corpo pastoral (Pr. Madson Oliveira, Pr. Mário Rúbens, Ev. Daniel) e governo eclesiástico (Presbitério e Junta Diaconal).
  6. **Ministérios:** 6 departamentos (EBD, Coral/Louvor, Ministério Infantil, Jovens/Adolescentes, Famílias e Missões).
  7. **Programação Semanal:** Grade completa de cultos com destaque para os cultos de domingo e reuniões de oração.
  8. **Sermões & Transmissões:** Player dinâmico interativo conectado às transmissões reais do canal oficial `@ICECOHATRAC` no YouTube (+750 vídeos).
  9. **Dízimos & Ofertas:** Card de contribuição com versículo (2 Co 9:7), chave PIX oficial (CNPJ) com botão de cópia rápida em 1 clique (feedback visual) e espaço para QR Code.
  10. **Contato, Oração & Visitas:** Formulário funcional com abas para *Pedidos de Oração* (com integração via API) e *Planejamento de Visitas*, além do mapa interativo do Google Maps no Cohatrac.
  11. **Rodapé:** Dados jurídicos (CNPJ, razão social), links rápidos de navegação e redes oficiais.

---

## 📂 Estrutura do Projeto

```text
├── deploy/                           # Arquivos de infraestrutura e produção
│   ├── apache-ice-cohatrac.conf      # VirtualHost do Apache 2.4 (Reverse Proxy + WebSockets)
│   ├── ice-cohatrac.service          # Unit do Systemd para auto-start no boot do Linux
│   └── ecosystem.config.js           # Configuração de cluster para PM2 (opcional)
├── scripts/                          # Scripts de automação shell (.sh)
│   ├── setup-apache.sh               # Instala e habilita o VirtualHost no Apache
│   ├── install-service.sh            # Instala e inicializa o serviço systemd no Linux
│   └── deploy.sh                     # Script de pull, build e restart automático
├── public/                           # Arquivos públicos estáticos
│   └── assets/img/                   # Pasta para imagens reais (logos, hero, qr code)
├── src/
│   ├── app/
│   │   ├── api/                      # Rotas de API dinâmicas
│   │   │   ├── pedidos-oracao/route.ts
│   │   │   └── visitas/route.ts
│   │   ├── globals.css               # Design System com tokens de cores e tipografia
│   │   ├── layout.tsx                # Layout raiz com Schema.org Church e metadados SEO
│   │   └── page.tsx                  # Montagem da página principal
│   ├── components/                   # Componentes modulares da interface
│   │   ├── icons/SocialIcons.tsx     # Ícones vetoriais SVG limpos
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
│       └── churchData.ts             # Dados centralizados da igreja para fácil manutenção
├── package.json
└── tsconfig.json
```

---

## 💻 Execução em Desenvolvimento Local

### Pré-requisitos
- **Node.js** v20+ ou v24+
- **NPM** ou **Bun**

### 1. Clonar o repositório
```bash
git clone https://github.com/LeinadSaia/Site-ICE-Cohatrac.git
cd Site-ICE-Cohatrac
```

### 2. Instalar dependências
```bash
npm install
```

### 3. Rodar o servidor de desenvolvimento
```bash
npm run dev
```
Acesse `http://localhost:3000` no seu navegador.

---

## 🐧 Guia de Deploy no Linux com Apache (Passo a Passo)

Para rodar a aplicação em um servidor Linux (Ubuntu, Debian ou similar) atrás do servidor web **Apache**:

### 1. Serviço Systemd (Recomendado para Linux)
O **systemd** garante que a aplicação seja iniciada automaticamente assim que o servidor Linux ligar ou reiniciar, e que seja reiniciada automaticamente caso ocorra alguma falha.

Você pode instalar o serviço automaticamente com o script fornecido:
```bash
sudo bash scripts/install-service.sh
```

Ou manualmente criando o arquivo `/etc/systemd/system/ice-cohatrac.service`:
```ini
[Unit]
Description=Servico Web Next.js - Igreja Crista Evangelica em Cohatrac
After=network.target

[Service]
Type=simple
User=seu_usuario
WorkingDirectory=/caminho/do/projeto/Site-ICE-Cohatrac
Environment=NODE_ENV=production
Environment=PORT=3000
ExecStart=/usr/bin/npm run start
Restart=always
RestartSec=5s
StandardOutput=journal
StandardError=journal
SyslogIdentifier=ice-cohatrac

[Install]
WantedBy=multi-user.target
```

Comandos para gerenciar o serviço:
```bash
# Recarregar configurações do systemd
sudo systemctl daemon-reload

# Ativar para iniciar junto com o sistema (boot)
sudo systemctl enable ice-cohatrac.service

# Iniciar ou reiniciar
sudo systemctl restart ice-cohatrac.service

# Ver status do serviço
sudo systemctl status ice-cohatrac.service

# Acompanhar logs em tempo real
sudo journalctl -u ice-cohatrac.service -f
```

---

### 2. Opção Alternativa: PM2
Se você preferir utilizar o gerenciador de processos **PM2**:
```bash
# Instalar o PM2 globalmente
npm install -g pm2

# Iniciar o Next.js com o arquivo de ecossistema
pm2 start ecosystem.config.js

# Salvar lista para reinicialização no boot do Linux
pm2 save
pm2 startup
```

---

### 3. Configuração do Apache 2.4 (Reverse Proxy)

O Apache receberá as requisições HTTP na porta 80 (ou HTTPS na porta 443) e as repassará internamente para o Next.js rodando na porta 3000.

#### Passo 3.1: Habilitar os módulos necessários no Apache
```bash
sudo a2enmod proxy
sudo a2enmod proxy_http
sudo a2enmod proxy_wstunnel
sudo a2enmod rewrite
sudo a2enmod headers
sudo a2enmod deflate
```

#### Passo 3.2: Copiar e ativar o VirtualHost
Você pode rodar o script automático:
```bash
sudo bash scripts/setup-apache.sh
```

Ou copiar manualmente o arquivo:
```bash
sudo cp deploy/apache-ice-cohatrac.conf /etc/apache2/sites-available/ice-cohatrac.conf
sudo a2ensite ice-cohatrac.conf
sudo apache2ctl configtest
sudo systemctl reload apache2
```

---

### 4. Certificado SSL HTTPS Gratuito (Certbot / Let's Encrypt)
Para habilitar o cadeado de segurança verde HTTPS com certificado gratuito que renova sozinho:
```bash
# Instalar o Certbot com plugin Apache
sudo apt update
sudo apt install certbot python3-certbot-apache -y

# Gerar e configurar o certificado automaticamente no Apache
sudo certbot --apache -d icecohatrac.com.br -d www.icecohatrac.com.br
```

---

## ⚡ Scripts de Automação Incluídos

| Script | Função | Como Executar |
| :--- | :--- | :--- |
| `scripts/setup-apache.sh` | Habilita os módulos proxy do Apache, copia o VirtualHost e recarrega o servidor. | `sudo bash scripts/setup-apache.sh` |
| `scripts/install-service.sh` | Instala a unit do systemd, define o auto-start no boot do Linux e inicia a aplicação. | `sudo bash scripts/install-service.sh` |
| `scripts/deploy.sh` | Baixa novidades do Git (`pull`), instala pacotes, roda `build` e reinicia o serviço. | `bash scripts/deploy.sh` |

---

## 🖼️ Personalização de Imagens & Logos

O código foi arquitetado com **fallbacks inteligentes** em SVG. Isso significa que mesmo sem nenhuma imagem enviada, o site exibe ícones sagrados elegantes (cruz, Bíblia aberta e QR Code vetorial).

Quando você quiser adicionar as imagens oficiais da igreja, basta colocá-las na pasta `public/assets/img/`:

1. **Logo Principal:** `public/assets/img/logo-ice-cohatrac.png`
   - Exibida na barra de navegação, na seção Sobre a Igreja e no Rodapé.
2. **Foto de Fundo do Hero:** `public/assets/img/hero-bg.jpg`
   - Foto do templo da igreja ou assembleia.
3. **QR Code do PIX:** `public/assets/img/qrcode-pix-ice.png`
   - Imagem do QR Code oficial gerada pelo banco da igreja.

---

## 🏛️ Dados Institucionais da Igreja

- **Razão Social:** Igreja Cristã Evangélica da AICEB em Cohatrac
- **Nome Usual:** Igreja Cristã Evangélica em Cohatrac (ICE Cohatrac)
- **Denominação:** Aliança das Igrejas Cristãs Evangélicas do Brasil (AICEB - 1947)
- **CNPJ:** `05.349.364/0001-03` (Ativa desde 14/06/2002)
- **Endereço:** Rua Dois Mil e Cem (Rua 2100), Quadra 23, Nº 11 — Bairro Parque Aurora / Cohatrac, São Luís - MA, CEP `65051-856`
- **YouTube Oficial:** [@ICECOHATRAC](https://www.youtube.com/@ICECOHATRAC) (+750 vídeos)
- **Instagram:** [@icecohatrac](https://www.instagram.com/icecohatrac/)
- **Lema:** *Soli Deo Gloria — A Deus toda a glória.*
