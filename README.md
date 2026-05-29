# Simulador de Financiamento

Simulador de financiamento de veículo: calcula a parcela pela Tabela Price, sugere faixas de taxa de juros por perfil e avalia o comprometimento da renda mensal.

## Funcionalidades

- Cálculo de parcela, total de juros, total pago e custo total a partir de valor do bem, entrada, taxa e prazo.
- Conversão automática da taxa mensal para taxa anual equivalente.
- Faixas de referência de juros (banco público/digital, tradicional, usado/score baixo) para situar a taxa informada.
- Análise de comprometimento da renda com três status: ideal (≤ 25%), no limite (≤ 35%) e excedido.

## Stack

- [Vite](https://vitejs.dev/) + [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/) (via plugin `@tailwindcss/vite`)

## Como rodar

Requer Node 18+

```bash
npm install
npm run dev      # ambiente de desenvolvimento
npm run build    # type-check + build de produção
npm run preview  # serve o build localmente
```

## Estrutura

```
src/
  financiamento.ts    # lógica de cálculo (Tabela Price, faixas, comprometimento)
  format.ts           # formatação de moeda e percentual em pt-BR
  useSimulador.ts     # hook com o estado da simulação
  components/         # componentes de UI
```

A regra de negócio fica isolada em [src/financiamento.ts](src/financiamento.ts), sem dependência de React — a UI apenas consome a função `simular`. A parcela usa a fórmula da Tabela Price:

```
P = principal * (i * (1+i)^n) / ((1+i)^n - 1)
```

onde `i` é a taxa mensal e `n` o número de parcelas.

## Licença

MIT
