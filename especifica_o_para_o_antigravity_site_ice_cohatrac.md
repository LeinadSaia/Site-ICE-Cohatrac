# 🚀 PROJECT_SPEC.md — Site Oficial: Igreja Cristã Evangélica em Cohatrac (ICE Cohatrac)

> **🤖 INSTRUÇÕES DIRETAS PARA O AGENTE ANTIGRAVITY:**
> Olá, Antigravity! Este documento é a **Fonte Única da Verdade (Single Source of Truth)** e o **PRD (Product Requirements Document)** para o desenvolvimento do site institucional da **Igreja Cristã Evangélica em Cohatrac (ICE Cohatrac)**, localizada em São Luís - MA.
> 
> **Sua Missão:** Construir uma aplicação web moderna, responsiva, acessível, rápida e com excelente SEO local, inspirada na sobriedade e organização dos portais das igrejas da **AICEB** (como a referência `icetimon.com.br`), utilizando rigorosamente a **Identidade Visual (Cores e Espaços de Logo)**, dados reais, textos, horários, vídeos e diretrizes de UI/UX detalhados abaixo. **Não utilize textos genéricos (Lorem Ipsum)**: todo o copywriting necessário já está pronto neste arquivo.

---

## 1. Identidade Visual, Paleta da Logo e Espaços de Marca (Design System)

### 1.1. A Identidade Visual da ICE Cohatrac & AICEB
A identidade visual da **ICE Cohatrac** (presente em seu perfil oficial, transmissões de culto, púlpito e materiais gráficos da **AICEB**) é construída sobre símbolos clássicos da fé cristã reformada: **a Bíblia Sagrada aberta, a Cruz vazia e elementos que remetem à luz da Palavra e à comunhão**.

As cores oficiais da igreja combinam a **sobriedade institucional do Azul Marinho e Azul Royal** (muito presentes na identidade histórica da AICEB e nos cenários/artes de transmissão da ICE Cohatrac) com o **Dourado/Âmbar** (que representa a realeza de Cristo, a luz das Escrituras e os *Cinco Solas*) e o **Branco Puro** ao fundo para transmitir paz, clareza e reverência.

### 1.2. Paleta de Cores Oficial da Igreja (Configuração Obrigatória no CSS / Tailwind)
Antigravity, declare exatamente estas variáveis no `:root` do CSS ou na configuração do `tailwind.config.js` para que toda a interface reflita as cores da logo e da identidade da igreja:

```css
:root {
  /* CORES PRINCIPAIS DA LOGO & IDENTIDADE ICE COHATRAC */
  --ice-navy-dark: #0A1E36;     /* Azul Noite Profundo - Fundo do Rodapé, Hero Overlay e Textos de Alto Contraste */
  --ice-blue-primary: #12385F;  /* Azul Marinho Institucional (Cor Principal da Marca / Cabeçalhos / Seções) */
  --ice-blue-royal: #1D5B9B;    /* Azul Royal / Celeste AICEB (Botões Secundários, Ícones, Destaques da Logo) */
  --ice-blue-light: #EBF3FA;    /* Azul Claríssimo Suave (Fundo de Badges, Cards de Destaque e Hover) */

  /* CORES DE DESTAQUE (CRUZ / BÍBLIA / LUZ DA PALAVRA) */
  --ice-gold-primary: #C89B3C;  /* Dourado Sóbrio / Âmbar Reformado (Botões CTA Principais, Detalhes da Logo, Bordas 5 Solas) */
  --ice-gold-hover: #B08428;    /* Dourado Escuro para Hover de Botões */
  --ice-gold-soft: #FDF8EC;     /* Creme Dourado Suave (Fundo de Versículos e Destaques Doutrinários) */

  /* CORES NEUTRAS E DE SUPERFÍCIE */
  --ice-bg-main: #F8FAFC;       /* Branco Gelo / Fundo Geral da Página */
  --ice-bg-card: #FFFFFF;       /* Branco Puro para Cards e Navbar */
  --ice-text-main: #1E293B;     /* Cinza Chumbo Escuro para Leitura Perfeita */
  --ice-text-muted: #64748B;    /* Cinza Médio para Subtítulos e Horários */
}
```

* **Regra de Aplicação das Cores para o Antigravity:**
  1. **Cabeçalho (Navbar):** Fundo branco (`#FFFFFF`) com borda inferior sutil e detalhes em Azul Institucional (`#12385F`) e Dourado (`#C89B3C`).
  2. **Botões Primários (CTAs):** Fundo Dourado (`#C89B3C`) com texto em Azul Noite (`#0A1E36`) em negrito, ou Fundo Azul Royal (`#1D5B9B`) com texto Branco (`#FFFFFF`).
  3. **Seções Alternadas:** Intercale seções em Branco Puro (`#FFFFFF`), Branco Gelo (`#F8FAFC`) e uma seção de forte impacto institucional (como *Os 5 Solas* ou *Sermões*) em Azul Marinho Institucional (`#12385F`) com textos claros e bordas douradas (`#C89B3C`).

---

### 1.3. Espaços Reservados para a Logo Oficial (`Logo Placeholders`) — INSTRUÇÃO CRÍTICA
> **Atenção, Antigravity!** O desenvolvedor adicionará o arquivo de imagem final da logo da igreja (`logo-ice-cohatrac.png` ou `logo-ice-cohatrac.svg`) na pasta `/assets/img/` posteriormente. 
> **Você DEVE deixar o espaço estruturado e pronto para receber a imagem em 3 lugares estratégicos**, com um *fallback* elegante (usando um ícone SVG provisório da Bíblia/Cruz + Tipografia da Igreja) que não quebre o layout caso a imagem ainda não esteja na pasta!

Implemente o componente da Logo seguindo exatamente este padrão HTML/Tailwind:

#### A. Espaço da Logo na Navbar (`<header>`)
* **Dimensões Reservadas:** Container flexível com altura de `h-12` a `h-14` (`48px` a `56px` no desktop) e largura automática (`w-auto`), preparado para logo horizontal ou símbolo + texto ao lado.
* **Estrutura de Código Obrigatória para o Antigravity usar:**
  ```html
  <!-- ESPAÇO OFICIAL DA LOGO ICE COHATRAC (NAVBAR) -->
  <a href="#inicio" class="flex items-center gap-3 group focus:outline-none" aria-label="Página Inicial - ICE Cohatrac">
    <!-- Container da Imagem da Logo (Basta colocar o arquivo em /assets/img/logo-ice-cohatrac.png) -->
    <div class="relative flex items-center justify-center w-12 h-12 rounded-lg bg-[#12385F] border-2 border-[#C89B3C]/40 overflow-hidden shadow-sm shrink-0">
      <img 
        src="/assets/img/logo-ice-cohatrac.png" 
        alt="Logo Igreja Cristã Evangélica em Cohatrac" 
        class="w-full h-full object-contain p-1"
        onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
      />
      <!-- Fallback Automático Elegante enquanto a imagem oficial não é inserida -->
      <div class="hidden items-center justify-center w-full h-full text-[#C89B3C]">
        <!-- Ícone SVG de Bíblia Aberta / Cruz Reformada -->
        <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
      </div>
    </div>

    <!-- Texto Institucional ao lado da Logo -->
    <div class="flex flex-col">
      <span class="font-serif font-bold text-lg md:text-xl tracking-tight text-[#0A1E36] group-hover:text-[#1D5B9B] transition-colors leading-none">
        ICE Cohatrac
      </span>
      <span class="text-[11px] uppercase tracking-widest text-[#C89B3C] font-semibold mt-1">
        Igreja Cristã Evangélica • AICEB
      </span>
    </div>
  </a>
  ```

#### B. Espaço da Logo na Seção "Sobre a Igreja" (Selo / Brasão Institucional)
* Na seção `#sobre`, crie um card ou moldura circular/retangular destacada (`w-32 h-32` ou `w-40 h-40`) apontando para `/assets/img/logo-ice-cohatrac.png` (com o mesmo sistema de *fallback* elegante) para exibir a logo da igreja em tamanho maior ao lado da história de fundação em 2002.

#### C. Espaço da Logo no Rodapé (`<footer>`)
* Reserve o espaço para a versão clara/negativa da logo (`/assets/img/logo-ice-cohatrac-branca.png` ou a mesma logo dentro de um badge claro) com dimensões `h-14 w-auto` acima do CNPJ e endereço da igreja.

---

### 1.4. Tipografia e Dados Institucionais Oficiais
* **Tipografia (Google Fonts):**
  * **Títulos (Headings):** `Merriweather` ou `Playfair Display` (transmite reverência, tradição bíblica e seriedade doutrinária).
  * **Corpo e UI (Body/Sans):** `Inter` ou `Plus Jakarta Sans` (leitura limpa em telas mobile e desktop).
* **Dados Institucionais (Para Metadados, Rodapé e Schema.org):**
  * **Nome Usual / Marca:** Igreja Cristã Evangélica em Cohatrac (`ICE Cohatrac`)
  * **Razão Social:** Igreja Cristã Evangélica da AICEB em Cohatrac
  * **Denominação:** Filiada à **AICEB** (Aliança das Igrejas Cristãs Evangélicas do Brasil — fundada em 1947 no Maranhão)
  * **CNPJ:** `05.349.364/0001-03` (Ativa desde 14/06/2002)
  * **Endereço Completo:** Rua Dois Mil e Cem (Rua 2100), Quadra 23, Nº 11 — Bairro Parque Aurora / Cohatrac, São Luís - MA, CEP: `65051-856`
  * **Reputação Local:** 4.8 / 5.0 estrelas no Google Maps
  * **Links Oficiais Externos:**
    * **YouTube Oficial:** `https://www.youtube.com/@ICECOHATRAC` (Mais de 750 vídeos transmitidos)
    * **Instagram Oficial:** `https://www.instagram.com/icecohatrac/`
    * **Linktree Oficial:** `https://linktr.ee/Icecohatrac`
    * **Google Maps Direto:** `https://maps.google.com/?cid=2873994002996943705`

---

## 2. Arquitetura de Seções e Componentes (Ordem de Renderização)

Antigravity, estruture o site com navegação suave (`scroll-behavior: smooth`) contendo as seguintes **11 seções obrigatórias**:

---

### SEÇÃO 1: Header / Navbar Fixa (`<header>`)
* **Comportamento:** Fixo no topo (`sticky top-0 z-50`), fundo branco (`#FFFFFF/95`) com `backdrop-blur-md`, borda inferior dourada/azul sutil, sombra suave ao rolar a página e menu hambúrguer funcional no mobile.
* **Logo:** Utilize exatamente o **Componente de Espaço da Logo (Seção 1.3.A)** com suporte ao arquivo `/assets/img/logo-ice-cohatrac.png`.
* **Links de Navegação:**
  1. `Início` (`#inicio`)
  2. `A Igreja` (`#sobre`)
  3. `No Que Cremos` (`#cremos`)
  4. `Liderança` (`#lideranca`)
  5. `Ministérios` (`#ministerios`)
  6. `Horários` (`#horarios`)
  7. `Mensagens` (`#sermoes`)
  8. `Contribua` (`#contribua`)
* **Botão CTA no Topo:** Botão destacado **"Ao Vivo / YouTube"** (com ícone de ponto vermelho pulsante) levando para `#sermoes`.

---

### SEÇÃO 2: Hero Section (`#inicio`)
* **Visual:** Banner imponente com fundo em gradiente institucional (`from-[#0A1E36]/95 via-[#12385F]/90 to-[#0A1E36]/95`), imagem de fundo inspiradora (templo cristão/comunhão/Bíblia aberta) e detalhes em Dourado (`#C89B3C`).
* **Badge Superior:** `"Filiada à AICEB • Desde 2002 no Cohatrac e Parque Aurora"`
* **Headline Principal (H1):** `"Uma igreja família, firmada na Palavra e proclamando a Graça de Cristo em São Luís."`
* **Subheadline:** `"Bem-vindo à Igreja Cristã Evangélica em Cohatrac. Celebramos a Deus com reverência, ensinamos as Escrituras Sagradas com fidelidade e acolhemos você e sua família com amor cristão."`
* **Botões de Ação (CTAs):**
  * **CTA Primário (Dourado `#C89B3C`):** `"Planeje sua Visita"` (rola para `#contato`).
  * **CTA Secundário (Borda Branca/Azul):** `"Assista aos Cultos Online"` (leva para `#sermoes`).
* **Barra Rápida de Destaque (Quick Info Bar abaixo do Hero):**
  * 📍 *Rua 2100, Qd. 23, Nº 11 — Parque Aurora / Cohatrac*
  * ☀️ *Domingos às 09h00 (EBD) e às 18h00 (Culto de Adoração)*
  * 📖 *Terças às 19h30 (Culto de Oração e Estudo Bíblico)*

---

### SEÇÃO 3: Sobre a Igreja & Nossa História (`#sobre`)
* **Layout:** Grid de 2 colunas (Texto institucional à esquerda + Card de Identidade com **Espaço em Destaque para a Logo da Igreja** e Estatísticas à direita).
* **Título da Seção:** `"Quem Somos: Nossa História e Identidade"`
* **Texto Prontinho para Renderizar:**
  > "A **Igreja Cristã Evangélica em Cohatrac (ICE Cohatrac)** atua há mais de duas décadas anunciando o Evangelho de Jesus Cristo na região do Cohatrac e Parque Aurora, em São Luís do Maranhão. Oficialmente organizada como pessoa jurídica em junho de 2002, somos uma comunidade local filiada à **AICEB (Aliança das Igrejas Cristãs Evangélicas do Brasil)**, denominação histórica fundada em 1947 no próprio estado do Maranhão.
  >
  > Nossa identidade é marcada pelo compromisso inegociável com a exposição fiel das Escrituras Sagradas, pelo ensino sistemático na Escola Bíblica Dominical, pelo louvor congregacional reverente, pela comunhão fraterna entre as famílias e pelo zelo missionário."
* **Cards de Estatísticas / Pilares (com ícones em `#1D5B9B` e `#C89B3C`):**
  * **+24 Anos** servindo à comunidade do Cohatrac e Parque Aurora (CNPJ desde 2002).
  * **Tradição AICEB:** Parte de uma aliança histórica de igrejas evangélicas fundada em 1947.
  * **Ensino Bíblico:** Comprometida com a pregação expositiva e as doutrinas da graça.

---

### SEÇÃO 4: No Que Cremos & Confissão de Fé (`#cremos`)
* **Referência ICE Timon:** As igrejas da AICEB dão grande destaque à sua base doutrinária reformada. Divida esta seção em duas partes visuais:

#### Parte A: Os 5 Solas da Reforma (Grid de 5 Cards com Fundo `#12385F` e Borda Superior Dourada `#C89B3C`)
1. **Sola Scriptura (Somente a Escritura):** A Bíblia Sagrada é a Palavra de Deus inspirada, inerrante e nossa única regra infalível de fé e prática cristã.
2. **Solus Christus (Somente Cristo):** Jesus Cristo é o único mediador entre Deus e os homens; somente em Sua pessoa e obra redentora há salvação.
3. **Sola Gratia (Somente a Graça):** A salvação do pecador é inteiramente obra da graça soberana e imerecida de Deus, do início ao fim.
4. **Sola Fide (Somente a Fé):** Somos justificados diante de Deus exclusivamente por meio da fé na obra consumada de Cristo na cruz.
5. **Soli Deo Gloria (Glória Somente a Deus):** Toda a criação, a redenção e a vida da igreja existem para a eterna glória e louvor do próprio Deus.

#### Parte B: Artigos Essenciais da Confissão de Fé da AICEB (Componente Accordion / FAQ Interativo)
Construa um acordeão interativo onde o visitante pode clicar para expandir cada ponto doutrinário:
* **1. As Sagradas Escrituras:** Cremos que a Bíblia (Antigo e Novo Testamento) foi divinamente inspirada pelo Espírito Santo, sendo a revelação completa da vontade de Deus para a salvação dos homens.
* **2. O Único Deus e a Santíssima Trindade:** Cremos em um só Deus vivo e verdadeiro, infinito em perfeição, eternamente subsistente em três pessoas distintas: o Pai, o Filho e o Espírito Santo.
* **3. A Queda e a Salvação pela Graça:** Cremos que o ser humano foi criado à imagem de Deus, mas caiu em pecado, tornando-se totalmente dependente da graça regeneradora do Espírito Santo mediante a fé em Jesus Cristo.
* **4. A Igreja e Suas Ordenanças:** Cremos na Igreja invisível (todos os remidos de todas as eras) e na Igreja local visível, que se reúne para adorar a Deus, pregar a Palavra, exercer a disciplina amorosa e celebrar as duas ordenanças instituídas pelo Senhor: o **Batismo** e a **Ceia do Senhor**.
* **5. A Segunda Vinda de Cristo:** Cremos no retorno pessoal, visível e glorioso de nosso Senhor Jesus Cristo, na ressurreição dos mortos, no juízo final e na vida eterna dos remidos com Deus.

---

### SEÇÃO 5: Nossa Liderança e Governo Eclesiástico (`#lideranca`)
* **Explicação Institucional:** Explique brevemente que a igreja segue o modelo bíblico de liderança plural (Pastores, Presbíteros e Diáconos).
* **Cards de Obreiros e Pregadores da Palavra (com espaço reservado para foto `avatar` de cada líder):**
  * **Card 1:** **Pr. Madson Oliveira** — *Pastor e Ministro da Palavra* (Ministrações dominicais, ensino expositivo e pastoreio).
  * **Card 2:** **Pr. Mário Rúbens** — *Pastor* (Liderança pastoral histórica, aconselhamento e ensino bíblico na ICE Cohatrac).
  * **Card 3:** **Ev. Daniel** — *Evangelista e Professor* (Atuação na pregação do Evangelho, Escola Bíblica Dominical e discipulado).
* **Cards da Estrutura Oficial de Governo (AICEB):**
  * **Conselho / Presbitério:** Corpo de presbíteros eleitos pela assembleia que auxiliam no pastoreio, zelo doutrinário e governo espiritual da igreja.
  * **Junta Diaconal (Diaconato):** Corpo de diáconos dedicados ao serviço cristão, assistência social, beneficência, visitação e ordem do culto público.

---

### SEÇÃO 6: Vida na Igreja — Departamentos e Ministérios (`#ministerios`)
Crie um grid de 6 cards elegantes com ícones representativos nas cores `#1D5B9B` e `#C89B3C` para mostrar a vida comunitária da ICE Cohatrac:
1. **Escola Bíblica Dominical (EBD):** O coração do ensino na igreja. Classes divididas por faixa etária (Crianças, Adolescentes, Jovens, Adultos e Novos Convertidos) todos os domingos às 09h00.
2. **Ministério de Louvor & Coral ICE Cohatrac:** Forte tradição de música sacra, hinos históricos e cânticos espirituais. Destaque para o tradicional **Coral da ICE Cohatrac**, participante ativo de encontros de corais da AICEB (como o projeto *ECOAR Maranhense*).
3. **Ministério Infantil:** Acolhimento seguro e ensino bíblico criativo para as crianças durante a EBD e os cultos dominicais, plantando a Palavra desde a infância.
4. **Jovens e Adolescentes:** Encontros semanais aos sábados (17h00), estudos bíblicos voltados para os desafios da juventude cristã, acampamentos, congressos e comunhão.
5. **Famílias, Homens e Mulheres:** Reuniões de oração, edificação mútua, encontros de casais e fortalecimento do lar cristão segundo os princípios bíblicos.
6. **Missões e Evangelismo:** Engajamento na evangelização local nos bairros Cohatrac e Parque Aurora, além do sustento de obreiros e campos missionários da AICEB.

---

### SEÇÃO 7: Programação Semanal (`#horarios`)
Renderize uma grade de programação visualmente impecável (com destaque em Azul Marinho e Dourado para os cultos de Domingo):

| Dia da Semana | Horário | Atividade / Culto | Público / Detalhes |
| :--- | :--- | :--- | :--- |
| **Domingo (Manhã)** | **09h00 às 11h30** | **Escola Bíblica Dominical (EBD) & Culto** | Classes por faixa etária + Transmissão no YouTube |
| **Domingo (Noite)** | **18h00 às 20h30** | **Culto Dominical de Celebração e Adoração** | Culto principal da família + Transmissão Ao Vivo |
| **Terça-feira** | **19h30 às 20h30** | **Culto de Oração e Estudo Bíblico** | Intercessão pela igreja e exposição bíblica |
| **Sexta-feira** | **19h30 às 21h00** | **Atividades Ministeriais e Pequenos Grupos** | Discipulado, ensaios e reuniões nos lares |
| **Sábado** | **17h00 às 19h00** | **Reuniões de Departamentos e Coral** | Jovens, Adolescentes e Ensaio do Coral ICE Cohatrac |

---

### SEÇÃO 8: Sermões, Transmissões Ao Vivo e Canal no YouTube (`#sermoes`)
* **Contexto:** A ICE Cohatrac possui um acervo riquíssimo com **mais de 750 vídeos** publicados no canal `@ICECOHATRAC`.
* **Instrução de Implementação para o Antigravity:**
  * Crie um **Player Principal em Destaque** incorporado via `<iframe>` do YouTube e uma **Galeria de Cultos Recentes** logo ao lado ou abaixo.
  * Utilize estes IDs reais de transmissões da ICE Cohatrac no YouTube para os embeds/cards:
    1. **Vídeo Principal (Player Destaque):** ID `3L0DSW--fr4` — *Culto Dominical - Noite (ICE Cohatrac)* (`https://www.youtube.com/embed/3L0DSW--fr4`)
    2. **Card de Vídeo 2:** ID `Sl9tlIdrvC0` — *Culto Dominical de Adoração e Exposição Bíblica* (`https://www.youtube.com/watch?v=Sl9tlIdrvC0`)
    3. **Card de Vídeo 3:** ID `q2U4zBXyXI8` — *Mensagem Dominical - ICE Cohatrac* (`https://www.youtube.com/watch?v=q2U4zBXyXI8`)
    4. **Card de Vídeo 4:** ID `qaDEFSLCXqc` — *Culto Dominical - Pregação da Palavra* (`https://www.youtube.com/watch?v=qaDEFSLCXqc`)
  * Permita que, ao clicar em qualquer card de vídeo secundário, o vídeo principal do player seja trocado dinamicamente via JavaScript, ou abra no YouTube.
  * Adicione um botão de destaque: **"Acessar Acervo Completo no YouTube (+750 vídeos)"** apontando para `https://www.youtube.com/@ICECOHATRAC`.

---

### SEÇÃO 9: Dízimos e Ofertas — Transparência e Fidelidade (`#contribua`)
* **Versículo Base:** *"Cada um contribua segundo propôs no seu coração; não com tristeza, ou por necessidade; porque Deus ama ao que dá com alegria."* — **2 Coríntios 9:7**
* **Card Interativo de PIX (Funcionalidade Obrigatória):**
  * **Favorecido:** Igreja Cristã Evangélica da AICEB em Cohatrac
  * **Tipo de Chave:** CNPJ
  * **Chave PIX Oficial:** `05.349.364/0001-03` (ou sem pontuação para cópia fácil: `05349364000103`)
  * **Espaço para QR Code do PIX:** Deixe também um espaço reservado (`w-40 h-40`) para o arquivo `/assets/img/qrcode-pix-ice.png` com um ícone elegante de QR Code como *fallback*.
  * **Interatividade JS:** Implementar um botão **"Copiar Chave PIX (CNPJ)"** que utiliza `navigator.clipboard.writeText('05.349.364/0001-03')` e exibe um feedback visual imediato (*"Chave PIX copiada com sucesso!"*).

---

### SEÇÃO 10: Localização, "Planeje sua Visita" e Pedidos de Oração (`#contato`)
Divida esta seção em duas colunas interativas:

#### Coluna 1: Formulário Interativo com Abas ("Pedidos de Oração" & "Sou Novo Aqui / Visita")
* **Aba 1: Pedido de Oração:**
  * Campos: Nome Completo, Telefone/WhatsApp (opcional), Motivo de Oração (Textarea) e Checkbox *"Desejo que meu pedido seja compartilhado na reunião de oração de terça-feira"*.
  * Ação ao enviar: Exibir mensagem acolhedora confirmando o recebimento e oferecer botão direto para enviar também via WhatsApp/Instagram da igreja.
* **Aba 2: Planeje sua Visita (Sou Novo Aqui):**
  * Campos: Nome, Qual culto pretende visitar (Domingo Manhã / Domingo Noite / Terça-feira) e se vai acompanhado da família/crianças.

#### Coluna 2: Mapa e Endereço Completo
* **Endereço:** Rua Dois Mil e Cem (Rua 2100), Quadra 23, Nº 11 — Parque Aurora / Cohatrac, São Luís - MA, CEP: 65051-856.
* **Iframe do Mapa:** Incorporar mapa interativo centralizado no endereço (`Rua 2100, Parque Aurora, São Luís - MA`) + Botão **"Abrir Rota no Google Maps"** apontando para `https://maps.google.com/?cid=2873994002996943705`.

---

### SEÇÃO 11: Rodapé Institucional Completo (`<footer>`)
* **Cor de Fundo:** Azul Noite Profundo (`#0A1E36`) com borda superior em Dourado (`#C89B3C`).
* **Espaço da Logo no Rodapé:** Container preparado para `/assets/img/logo-ice-cohatrac.png` (com fallback automático).
* Dados jurídicos completos: **Igreja Cristã Evangélica da AICEB em Cohatrac** — CNPJ: `05.349.364/0001-03`.
* Links rápidos para todas as seções, redes sociais (`@icecohatrac` no Instagram, `@ICECOHATRAC` no YouTube e Linktree).
* Frase de encerramento: *"Soli Deo Gloria — A Deus toda a glória."*

---

## 3. Guia Rápido de Substituição de Imagens (Para o Desenvolvedor Humano)
Antigravity, mantenha os caminhos de imagens organizados exatamente assim no código para que o desenvolvedor humano possa apenas soltar os arquivos na pasta depois:
1. `/assets/img/logo-ice-cohatrac.png` → **Logo principal da Igreja** (usada na Navbar, na seção Sobre e no Rodapé).
2. `/assets/img/hero-bg.jpg` → **Foto de fundo do Hero** (enquanto não houver foto local, use uma foto de alta resolução do Unsplash como fallback no CSS).
3. `/assets/img/qrcode-pix-ice.png` → **Imagem do QR Code do PIX** na seção de Dízimos e Ofertas.

## 4. Checklist de Qualidade para o Antigravity Executar
- [ ] **Paleta Fiel à Marca:** Uso rigoroso dos tons Azul Marinho (`#0A1E36`, `#12385F`), Azul Royal (`#1D5B9B`) e Dourado/Âmbar (`#C89B3C`).
- [ ] **Placeholders Inteligentes da Logo:** Os espaços da logo não podem mostrar ícone de "imagem quebrada" caso o arquivo `/assets/img/logo-ice-cohatrac.png` ainda não tenha sido colocado na pasta; o `onerror` deve ativar automaticamente o selo provisório com a Bíblia em dourado.
- [ ] **Responsividade Total:** Testar visualização Mobile (375px), Tablet (768px) e Desktop (1280px+).
- [ ] **Interatividade Completa:** Menu mobile funcional, Accordion da Confissão de Fé abrindo/fechando, Botão "Copiar PIX" copiando o CNPJ com feedback de Toast, troca de vídeo no player de sermões e abas funcionais nos formulários.