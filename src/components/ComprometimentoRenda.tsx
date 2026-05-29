import { Card } from "@/components/Card";
import { avaliarComprometimento, COMPROMETIMENTO_LIMITE } from "@/financiamento";
import { formatBRL, formatPercent } from "@/format";

interface Props {
  rendaMensal: number;
  parcela: number;
  comprometimento: number;
  onRendaChange: (renda: number) => void;
}

const STATUS_VISUAL = {
  ideal: { color: "#22c55e", label: "✓ Dentro do ideal" },
  limite: { color: "#f59e0b", label: "⚠ Limite aceitável" },
  excedido: { color: "#ef4444", label: "✗ Acima do recomendado" },
};

export function ComprometimentoRenda({
  rendaMensal,
  parcela,
  comprometimento,
  onRendaChange,
}: Props) {
  const status = avaliarComprometimento(comprometimento);
  const visual = STATUS_VISUAL[status];
  const saldoRestante = rendaMensal - parcela;
  const progressoNormalizado = Math.min(comprometimento, 100);

  return (
    <Card className="mb-5">
      <div className="mb-4">
        <label className="block text-xs text-slate-400 mb-1.5">Sua renda mensal</label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm">R$</span>
          <input
            type="number"
            min={0}
            step={100}
            value={rendaMensal}
            onChange={(e) => onRendaChange(Number(e.target.value) || 0)}
            className="w-full bg-base border border-surface-2 rounded-lg pl-10 pr-3 py-2 text-ink text-sm focus:outline-none focus:border-accent-500 transition-colors"
          />
        </div>
      </div>

      <div className="flex justify-between mb-3">
        <span className="text-sm text-slate-400">Comprometimento da renda</span>
        <span className="text-sm font-bold" style={{ color: visual.color }}>
          {formatPercent(comprometimento)}
        </span>
      </div>

      <div className="bg-surface-2 rounded-full h-2 overflow-hidden">
        <div
          className="h-full rounded-full transition-[width] duration-300"
          style={{ width: `${progressoNormalizado}%`, backgroundColor: visual.color }}
        />
      </div>

      <div className="flex justify-between mt-2">
        <span className="text-[11px] text-slate-600">Renda: {formatBRL(rendaMensal)}</span>
        <span className="text-[11px]" style={{ color: visual.color }}>
          {visual.label}
        </span>
      </div>

      <p className="mt-2.5 text-[11px] text-slate-600 leading-relaxed">
        Bancos geralmente aprovam até {COMPROMETIMENTO_LIMITE}% da renda. Saldo restante:{" "}
        <span className="text-slate-400 font-semibold">{formatBRL(saldoRestante)}/mês</span>
      </p>
    </Card>
  );
}
