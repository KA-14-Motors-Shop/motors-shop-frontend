# 🚗 Motors Shop

**Site de venda e leilão de automóveis, com armazenamento local.** Este projeto apresenta páginas bem completas para interação e visualização de anúncios e perfis, incluindo um sistema simples de compra/venda e funcionalidades para envio de imagens.

🚀 **Acesse o ambiente em produção:** [https://motors-shop-alpha.vercel.app/](https://motors-shop-alpha.vercel.app/)

---

## 🎯 Funcionalidades

- **Vitrine de Veículos:** Navegação, pesquisa e visualização completa dos anúncios de vendas e leilões.
- **Painel de Usuário:** Criação de perfil, atualização de dados pessoais e gerenciamento de endereços.
- **Gestão de Anúncios:** Criação (com envio de imagens), edição, exclusão e visualização de produtos criados pelo usuário.
- **Leilões e Vendas:** Interface intuitiva focado em uma experiência interativa e imersiva.
- **Filtros Avançados:** Busca aprimorada para localizar o veículo perfeito.
- **Persistência de Dados Local:** Armazenamento seguro de estados e sessões por local storage, incluindo mock de rotas.

## 🛠️ Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as melhores práticas do ecossistema React:

- **[React 18](https://reactjs.org/)**: Biblioteca principal para renderização de interfaces;
- **[Styled Components](https://styled-components.com/)**: Estilização baseada em componentes (CSS-in-JS);
- **[React Router Dom v5](https://v5.reactrouter.com/)**: Gerenciamento das rotas e navegação da aplicação;
- **[React Hook Form](https://react-hook-form.com/) & [Yup](https://github.com/jquense/yup)**: Criação de formulários performáticos com validação de esquemas de dados;
- **[Axios](https://axios-http.com/) & [Axios Mock Adapter](https://github.com/ctimmerm/axios-mock-adapter)**: Comunicação HTTP facilitada e simulação eficiente do backend;
- **[Cypress](https://www.cypress.io/) & [RTL](https://testing-library.com/)**: Cobertura sólida de testes de componentes e End-to-End (E2E);
- **[React Toastify](https://fkhadra.github.io/react-toastify/)**: Sistema de notificações (Toasts) personalizadas;
- **[React Input Mask](https://github.com/sanniassin/react-input-mask)**: Máscaras de input dinâmicas em formulários de registro;

---

## 💻 Como Rodar o Projeto Localmente

1. **Clone do Repositório**

   ```bash
   git clone <url-do-repositorio>
   cd motors-shop-frontend
   ```

2. **Instalação das Dependências**
   Utilizando `npm` ou `yarn`:

   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Iniciando a Aplicação**
   ```bash
   npm start
   # ou
   yarn start
   ```
   A aplicação será iniciada por padrão na porta `3000`. Acesse [http://localhost:3000](http://localhost:3000).

## 🧪 Testes

A aplicação possui um conjunto rigoroso de testes:

- Para rodar os testes unitários/componentes (Jest + React Testing Library):
  ```bash
  npm test
  # ou
  yarn test
  ```
- O Cypress também está configurado para garantir o fluxo E2E, validando cadastros, interações simuladas e comportamento visual da interface.
