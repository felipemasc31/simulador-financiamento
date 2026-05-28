export interface FaixaTaxa {
  label: string;
  min: number;
  max: number;
  color: string;
}

export interface ResultadoSimulacao {
  parcela: number;
  totalPago: number;
  totalJuros: number;
  custoTotal: number;
  taxaAnual: number;
  comprometimentoRenda: number;
}

export interface ParametrosFinanciamento {
  valorBem: number;
  entrada: number;
  taxaMensal: number;
  meses: number;
  rendaMensal: number;
}

export type StatusRenda = "ideal" | "limite" | "excedido";

export const FAIXAS_TAXA: FaixaTaxa[] = [
  { label: "Banco Público / Digital (score bom)", min: 1.2, max: 1.8, color: "#22c55e" },
  { label: "Banco Tradicional (perfil médio)", min: 1.8, max: 2.5, color: "#f59e0b" },
  { label: "Carro usado / Score baixo", min: 2.5, max: 4.5, color: "#ef4444" },
];

export const TAXA_MIN = FAIXAS_TAXA[0].min;
export const TAXA_MAX = FAIXAS_TAXA[FAIXAS_TAXA.length - 1].max;

export const COMPROMETIMENTO_IDEAL = 25;
export const COMPROMETIMENTO_LIMITE = 35;

export function classificarFaixa(taxaMensal: number): FaixaTaxa {
  return FAIXAS_TAXA.find((f) => taxaMensal <= f.max) ?? FAIXAS_TAXA[FAIXAS_TAXA.length - 1];
}

export function avaliarComprometimento(comprometimento: number): StatusRenda {
  if (comprometimento <= COMPROMETIMENTO_IDEAL) return "ideal";
  if (comprometimento <= COMPROMETIMENTO_LIMITE) return "limite";
  return "excedido";
}

// Tabela Price: P = principal * (i * (1+i)^n) / ((1+i)^n - 1)
export function calcularParcela(principal: number, taxaMensalPercent: number, meses: number): number {
  if (meses <= 0) return 0;
  const i = taxaMensalPercent / 100;
  if (i === 0) return principal / meses;
  const fator = Math.pow(1 + i, meses);
  return (principal * i * fator) / (fator - 1);
}

export function calcularTaxaAnual(taxaMensalPercent: number): number {
  return (Math.pow(1 + taxaMensalPercent / 100, 12) - 1) * 100;
}

export function simular(params: ParametrosFinanciamento): ResultadoSimulacao {
  const { valorBem, entrada, taxaMensal, meses, rendaMensal } = params;

  const financiado = Math.max(valorBem - entrada, 0);
  const parcela = calcularParcela(financiado, taxaMensal, meses);
  const totalPago = parcela * meses;
  const totalJuros = totalPago - financiado;
  const custoTotal = entrada + totalPago;
  const taxaAnual = calcularTaxaAnual(taxaMensal);
  const comprometimentoRenda = rendaMensal > 0 ? (parcela / rendaMensal) * 100 : 0;

  return { parcela, totalPago, totalJuros, custoTotal, taxaAnual, comprometimentoRenda };
}
