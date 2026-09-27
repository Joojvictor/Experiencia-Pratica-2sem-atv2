# UPTTPU — Um Por Todos, Todos Por Um

Site institucional de uma ONG fictícia voltada à conexão entre doadores, voluntários e pessoas que buscam ajuda. Desenvolvido como projeto acadêmico, aplicando conceitos de front-end moderno sem uso de frameworks.

## 🚀 Visão geral

O projeto é uma Single Page Application (SPA) construída com **HTML, CSS e JavaScript puro (Vanilla JS)**, sem frameworks ou bibliotecas de componentes. A navegação entre páginas ocorre sem recarregamento completo do navegador, através de um roteador client-side desenvolvido manualmente.

## 🛠️ Tecnologias utilizadas

- **HTML5** — estrutura semântica das páginas
- **CSS3** — estilização, com CSS Grid, Flexbox e Custom Properties (variáveis)
- **JavaScript (ES6+)** — lógica da aplicação, organizada em módulos (`import`/`export`)
- **[AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)** — biblioteca externa via CDN, para animações de entrada dos elementos
- **Web Storage API (`localStorage`)** — persistência local dos cadastros enviados
- **History API** (`pushState`/`popstate`) — navegação SPA sem uso de hash na URL

## 📁 Estrutura do projeto

```
├── index.html
├── cadastro.html
├── sucesso.html
├── todos-por-um.html
├── um-por-todos.html
├── css/
│   └── styles.css
├── js/
│   ├── script.js          # ponto de entrada (importa os módulos abaixo)
│   ├── roteador.js         # navegação SPA
│   ├── modal.js             # formulário de cadastro e modal de confirmação
│   ├── equipe.js             # geração dinâmica dos cards da equipe
│   ├── validacao.js           # validação visual em tempo real do formulário
│   └── armazenamento.js        # persistência via localStorage
└── img/
```

## ⚙️ Como rodar o projeto localmente

O projeto utiliza `fetch` para carregar páginas dinamicamente (parte do roteador SPA) e módulos ES6 (`import`/`export`) no JavaScript. Ambos os recursos são bloqueados pelo navegador quando os arquivos são abertos diretamente do disco (`file://`), por política de segurança (CORS). É necessário servir os arquivos através de um servidor HTTP local:

**Opção 1 — VS Code (recomendado):**
1. Instale a extensão "Live Server".
2. Clique com o botão direito em `index.html` → "Open with Live Server".

**Opção 2 — Python:**
```bash
python -m http.server
```
Depois, acesse `http://localhost:8000` no navegador.

Nenhuma instalação de dependências (`npm install` ou similar) é necessária — o projeto não possui build step.

## 🌿 Versionamento e branches

O repositório segue o modelo **GitFlow**:
- `main` — versão estável e publicável do site.
- `develop` — branch de integração, recebe funcionalidades finalizadas antes de seguirem para `main`.
- `feature/nome-da-funcionalidade` — branches temporárias para cada nova funcionalidade, nascem de `develop` e são mescladas de volta nela.
- `hotfix/nome-do-fix` — branches para correções urgentes, nascem de `main` e são propagadas para `main` e `develop`.

As mensagens de commit seguem o padrão **Conventional Commits** (`feat:`, `fix:`, `refactor:`, `docs:`, `style:`), e releases são marcadas com tags seguindo **Versionamento Semântico** (`MAJOR.MINOR.PATCH`).
