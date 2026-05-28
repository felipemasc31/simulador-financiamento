import { Card } from "@/components/Card";
import { classificarFaixa, TAXA_MAX, TAXA_MIN } from "@/financiamento";
import { formatPercent } from "@/format";

interface Props {
  taxaMensal: number;
  taxaAnual: number;
  meses: number;
  onTaxaChange: (taxa: number) => void;
  onMesesChange: (meses: number) => void;
}

const PRAZOS = [24, 36, 48, 60];

export function ParametrosFinanciamento({
  taxaMensal,
  taxaAnual,
  meses,
  onTaxaChange,
  onMesesChange,
}: Props) {
  const faixa = classificarFaixa(taxaMensal);

  return (
    <Card className="mb-5">
      <div className="mb-6">
        <div className="flex justify-between mb-3">
          <span className="text-sm text-slate-400">Taxa de juros mensal</span>
          <span className="text-[15px] font-bold" style={{ color: faixa.color }}>
            {taxaMensal.toFixed(2)}% a.m.
          </span>
        </div>
        <input
          type="range"
          min={TAXA_MIN}
          max={TAXA_MAX}
          step={0.05}
          value={taxaMensal}
          onChange={(e) => onTaxaChange(parseFloat(e.target.value))}
          className="w-full cursor-pointer"
          style={{ color: faixa.color, accentColor: faixa.color }}
        />
        <div
          className="mt-2 px-2.5 py-1.5 rounded-lg text-[11px] inline-block"
          style={{
            backgroundColor: `${faixa.color}18`,
            border: `1px solid ${faixa.color}40`,
            color: faixa.color,
          }}
        >
          {faixa.label} · {formatPercent(taxaAnual)} a.a.
        </div>
      </div>

      <div>
        <div className="flex justify-between mb-3">
          <span className="text-sm text-slate-400">Prazo</span>
          <span className="text-[15px] font-bold text-ink">{meses} meses</span>
        </div>
        <div className="flex gap-2">
          {PRAZOS.map((m) => {
            const ativo = meses === m;
            return (
              <button
                key={m}
                type="button"
                onClick={() => onMesesChange(m)}
                className={`flex-1 py-2.5 rounded-xl font-bold text-sm transition-colors ${
                  ativo
                    ? "border border-indigo-500 bg-indigo-900 text-indigo-300"
                    : "border border-surface-2 bg-base text-slate-500 hover:text-slate-300"
                }`}
              >
                {m}x
              </button>
            );
          })}
        </div>
      </div>
    </Card>
  );
}
