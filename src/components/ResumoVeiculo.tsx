import { Card } from "@/components/Card";
import { formatBRL } from "@/format";

interface Props {
  valorBem: number;
  entrada: number;
  financiado: number;
  percentualEntrada: number;
  onValorBemChange: (valor: number) => void;
  onEntradaChange: (valor: number) => void;
}

export function ResumoVeiculo({
  valorBem,
  entrada,
  financiado,
  percentualEntrada,
  onValorBemChange,
  onEntradaChange,
}: Props) {
  const entradaMax = valorBem * 0.9;

  return (
    <Card variant="accent" className="mb-5">
      <div className="grid grid-cols-3 gap-3 mb-5">
        <div>
          <div className="text-[10px] text-slate-400 tracking-wider uppercase mb-1">Valor do carro</div>
          <div className="text-[15px] font-bold text-ink">{formatBRL(valorBem)}</div>
        </div>
        <div>
          <div className="text-[10px] text-slate-400 tracking-wider uppercase mb-1">Entrada</div>
          <div className="text-[15px] font-bold text-indigo-300">{formatBRL(entrada)}</div>
        </div>
        <div>
          <div className="text-[10px] text-slate-400 tracking-wider uppercase mb-1">Financiado</div>
          <div className="text-[15px] font-bold text-indigo-400">{formatBRL(financiado)}</div>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-xs text-slate-400 mb-1.5">Valor do veículo</label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm">R$</span>
          <input
            type="number"
            min={0}
            step={1000}
            value={valorBem}
            onChange={(e) => onValorBemChange(Number(e.target.value) || 0)}
            className="w-full bg-base border border-surface-2 rounded-lg pl-10 pr-3 py-2 text-ink text-sm focus:outline-none focus:border-indigo-500 transition-colors"
          />
        </div>
      </div>

      <div>
        <div className="flex justify-between mb-2">
          <span className="text-xs text-slate-400">Ajustar entrada</span>
          <span className="text-xs font-bold text-indigo-300">{percentualEntrada}% do valor</span>
        </div>
        <input
          type="range"
          min={0}
          max={entradaMax}
          step={500}
          value={Math.min(entrada, entradaMax)}
          onChange={(e) => onEntradaChange(Number(e.target.value))}
          className="w-full text-indigo-500 cursor-pointer"
        />
        <div className="flex justify-between mt-1">
          <span className="text-[10px] text-slate-600">R$ 0</span>
          <span className="text-[10px] text-slate-600">{formatBRL(entradaMax)}</span>
        </div>
      </div>
    </Card>
  );
}
