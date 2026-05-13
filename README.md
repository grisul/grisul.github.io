# GRISUL — Site do Grupo de Pesquisa

Site institucional do **GRISUL (Grupo de Relações Internacionais e Sul Global)**, grupo de pesquisa da Escola de Ciência Política da UNIRIO.

## Como publicar no GitHub Pages

### 1. Crie um repositório no GitHub

1. Acesse [github.com](https://github.com) e faça login
2. Clique em **"New repository"**
3. Nomeie como `grisul-site` (ou `grisulunirio.github.io` para URL mais limpa)
4. Deixe como **Public**
5. Clique em **"Create repository"**

### 2. Faça upload dos arquivos

**Opção A — pelo navegador (mais fácil):**
1. No repositório criado, clique em **"uploading an existing file"**
2. Arraste os 3 arquivos: `index.html`, `style.css`, `script.js`
3. Clique em **"Commit changes"**

**Opção B — pelo terminal:**
```bash
git init
git add .
git commit -m "Lançamento do site GRISUL"
git remote add origin https://github.com/SEU_USUARIO/grisul-site.git
git push -u origin main
```

### 3. Ative o GitHub Pages

1. No repositório, vá em **Settings → Pages**
2. Em **"Branch"**, selecione `main` e pasta `/ (root)`
3. Clique em **Save**
4. Aguarde ~2 minutos e acesse o link gerado!

A URL será: `https://SEU_USUARIO.github.io/grisul-site/`

---

## Atualizar o site futuramente

Para editar conteúdo, basta modificar o `index.html` diretamente no GitHub (clique no arquivo → ícone de lápis → edite → commit).

## Estrutura dos arquivos

```
grisul-site/
├── index.html    — Estrutura e conteúdo do site
├── style.css     — Identidade visual (cores, tipografia, layout)
├── script.js     — Interações (menu, animações)
└── README.md     — Este arquivo
```

## Identidade visual aplicada

- **Cores:** #1B512D · #B1CC74 · #DEF4C6 · #ED9B40 · #A22C29 · #FCF6B1
- **Tipografia:** Yanone Kaffeesatz (títulos) + DM Sans (corpo)
- Fonte: Manual de Identidade Visual GRISUL 2025
