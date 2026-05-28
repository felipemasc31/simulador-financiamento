const formatadorBRL = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

const formatadorPercentual = new Intl.NumberFormat("pt-BR", {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
});

export const formatBRL = (valor: number): string => formatadorBRL.format(valor);

export const formatPercent = (valor: number): string =>
  `${formatadorPercentual.format(valor)}%`;
