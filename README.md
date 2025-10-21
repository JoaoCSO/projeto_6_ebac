# 🍕 eFood - Plataforma de Delivery


Plataforma completa de delivery de comida desenvolvida com React, TypeScript e Redux Toolkit. O projeto permite navegar por restaurantes, visualizar cardápios, adicionar produtos ao carrinho e finalizar pedidos com fluxo completo de checkout.

### Página Inicial
Lista de restaurantes disponíveis com filtros e destaques.

### Página do Restaurante
Cardápio completo com produtos e informações detalhadas.

### Carrinho de Compras
Visualização dos itens, valor total e gerenciamento de quantidade.

### Checkout
Fluxo completo: Entrega → Pagamento → Confirmação

## 🛠️ Tecnologias Utilizadas

- **React 18.2** - Biblioteca JavaScript para interfaces
- **TypeScript** - Superset JavaScript com tipagem estática
- **Redux Toolkit** - Gerenciamento de estado global
- **React Redux** - Integração React com Redux
- **React Router DOM** - Roteamento e navegação
- **Styled Components** - Estilização com CSS-in-JS
- **API REST** - Integração com backend

## 📋 Funcionalidades

### ✅ Implementadas

- [x] Listagem de restaurantes com informações detalhadas
- [x] Sistema de destaque e categorização
- [x] Visualização de cardápio por restaurante
- [x] Modal de detalhes do produto
- [x] Carrinho de compras com sidebar
- [x] Adicionar/remover produtos do carrinho
- [x] Cálculo automático do valor total
- [x] Contador de itens no header
- [x] Formulário de dados de entrega
- [x] Formulário de pagamento
- [x] Integração com API de checkout
- [x] Tela de confirmação do pedido
- [x] Design responsivo
- [x] Integração com API REST

### 🎯 Diferenciais

- State management com Redux Toolkit
- TypeScript para maior segurança de tipos
- Componentes reutilizáveis e modulares
- Fluxo de checkout completo
- Interface intuitiva e moderna

## 📁 Estrutura do Projeto

```
efood/
├── public/
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── Banner/
│   │   ├── Button/
│   │   ├── Cart/
│   │   ├── Checkout/
│   │   │   ├── Delivery.tsx
│   │   │   ├── Payment.tsx
│   │   │   ├── Confirmation.tsx
│   │   │   └── styles.ts
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── Modal/
│   │   ├── ProductCard/
│   │   └── RestaurantCard/
│   ├── models/
│   │   ├── Product.ts
│   │   └── Restaurant.ts
│   ├── pages/
│   │   ├── Home/
│   │   └── Restaurant/
│   ├── services/
│   │   └── api.ts
│   ├── store/
│   │   ├── reducers/
│   │   │   └── cart.ts
│   │   ├── hooks.ts
│   │   └── index.ts
│   ├── styles/
│   │   ├── colors.ts
│   │   └── GlobalStyles.ts
│   ├── App.tsx
│   ├── routes.tsx
│   └── index.tsx
├── package.json
├── tsconfig.json
└── README.md
```

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```
git clone https://github.com/JoaoCSO/projeto_6_ebac
```

2. Entre na pasta do projeto:
```
cd efood
```

3. Instale as dependências:
```
npm install
```

4. Execute o projeto em modo de desenvolvimento:
```
npm start
```

5. Acesse no navegador:
```
http://localhost:3000
```

## 📦 Build para Produção

```
npm run build
```

Os arquivos otimizados serão gerados na pasta `build/`.

## 🌐 Deploy

O projeto está configurado para deploy automático na Vercel:

1. Conecte seu repositório GitHub à Vercel
2. Configure as variáveis de ambiente (se necessário)
3. O deploy é automático a cada push na branch main

## 🔗 API

O projeto consome a API REST:

**Base URL:** `https://api-ebac.vercel.app/api/efood`

### Endpoints utilizados:

- `GET /restaurantes` - Lista todos os restaurantes
- `GET /restaurantes/:id` - Detalhes de um restaurante específico
- `POST /checkout` - Finaliza o pedido

### Exemplo de requisição de checkout:

```json
{
  "products": [
    {
      "id": 1,
      "price": 60.90
    }
  ],
  "delivery": {
    "receiver": "João Silva",
    "address": {
      "description": "Rua Example, 123",
      "city": "São Paulo",
      "zipCode": "12345-678",
      "number": 123,
      "complement": "Apto 45"
    }
  },
  "payment": {
    "card": {
      "name": "João Silva",
      "number": "1234567812345678",
      "code": 123,
      "expires": {
        "month": 12,
        "year": 2025
      }
    }
  }
}
```

### Resposta:

```json
{
  "orderId": "ABC123XYZ"
}
```

## 🎨 Paleta de Cores

```typescript
colors = {
  primary: '#E66767',      // Vermelho principal
  secondary: '#FFEBD9',    // Bege claro
  white: '#FFFFFF',        // Branco
  lightGray: '#F5F5F5',    // Cinza claro
  darkGray: '#4B4B4B',     // Cinza escuro
  black: '#000000'         // Preto
}
```

## 📱 Responsividade

O projeto é totalmente responsivo e se adapta a diferentes tamanhos de tela:

- **Desktop:** Grid de 2 ou 3 colunas
- **Tablet:** Grid de 2 colunas
- **Mobile:** Grid de 1 coluna

Breakpoints:
- Mobile: até 768px
- Tablet: 769px - 1024px
- Desktop: acima de 1024px

## 🧪 Como Testar

### Fluxo de compra completo:

1. Acesse a página inicial
2. Escolha um restaurante e clique em "Saiba mais"
3. Visualize o cardápio e clique em "Adicionar ao carrinho"
4. Veja os detalhes no modal e confirme
5. No carrinho, clique em "Continuar com a entrega"
6. Preencha os dados de entrega
7. Preencha os dados de pagamento
8. Finalize o pedido
9. Veja a confirmação com o número do pedido

### Dados de teste para pagamento:

- **Nome:** Qualquer nome
- **Número do cartão:** 16 dígitos (ex: 1234567812345678)
- **CVV:** 3 dígitos (ex: 123)
- **Mês:** 01 a 12
- **Ano:** Qualquer ano com 4 dígitos (ex: 2025)

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request


## 👨‍💻 Autor

Desenvolvido com 🤍 como projeto do curso EBAC - Desenvolvedor Front-End

---

## 📚 Aprendizados

Durante o desenvolvimento deste projeto, foram aplicados conceitos de:

- ✅ Componentização e reutilização de código
- ✅ Gerenciamento de estado com Redux Toolkit
- ✅ Tipagem estática com TypeScript
- ✅ Consumo de APIs REST
- ✅ Roteamento com React Router
- ✅ Estilização com Styled Components
- ✅ Formulários e validação
- ✅ UX/UI design patterns
- ✅ Deploy e CI/CD

## 🔮 Possíveis Melhorias Futuras

- [ ] Implementar busca e filtros
- [ ] Adicionar favoritos
- [ ] Histórico de pedidos
- [ ] Avaliações e comentários
- [ ] Modo escuro
- [ ] Múltiplos endereços
- [ ] Cupons de desconto
- [ ] Integração com gateway de pagamento real
- [ ] Testes unitários e E2E
- [ ] PWA (Progressive Web App)

---

⭐ Se este projeto te ajudou, deixe uma estrela no GitHub!