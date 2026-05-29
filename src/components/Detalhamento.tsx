import { Card } from "@/components/Card";
import { formatBRL } from "@/format";

interface Props {
  totalJuros: number;
  totalPago: number;
  custoTotal: number;
}

export function Detalhamento({ totalJuros, totalPago, custoTotal }: Props) {
  return (
    <Card className="mb-5">
      <div className="flex justify-between items-center py-2.5 border-b border-surface-2">
        <span className="text-sm text-slate-400">Total de juros pagos</span>
        <span className="text-sm font-semibold text-red-400">{formatBRL(totalJuros)}</span>
      </div>
      <div className="flex justify-between items-center py-2.5 border-b border-surface-2">
        <span className="text-sm text-slate-400">Total pago (financiado)</span>
        <span className="text-sm font-semibold text-ink">{formatBRL(totalPago)}</span>
      </div>
      <div className="flex justify-between items-center py-2.5">
        <span className="text-sm text-slate-400">Custo total (entrada + parcelas)</span>
        <span className="text-sm font-extrabold text-accent-300">{formatBRL(custoTotal)}</span>
      </div>
    </Card>
  );
}
