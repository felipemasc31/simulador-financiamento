import { Card } from "@/components/Card";
import { FAIXAS_TAXA } from "@/financiamento";

export function FaixasReferencia() {
  return (
    <Card>
      <p className="text-[11px] text-slate-600 tracking-widest uppercase mb-3.5">
        Referência de taxas 2026
      </p>
      {FAIXAS_TAXA.map((faixa) => (
        <div key={faixa.label} className="flex items-center gap-2.5 mb-2.5 last:mb-0">
          <span
            className="w-2 h-2 rounded-full shrink-0"
            style={{ backgroundColor: faixa.color }}
          />
          <span className="text-xs text-slate-500 flex-1">{faixa.label}</span>
          <span className="text-xs font-semibold" style={{ color: faixa.color }}>
            {faixa.min}–{faixa.max}% a.m.
          </span>
        </div>
      ))}
    </Card>
  );
}
