import { Card } from "@/components/Card";
import { formatBRL } from "@/format";

interface Props {
  parcela: number;
  meses: number;
}

export function ResultadoParcela({ parcela, meses }: Props) {
  return (
    <Card variant="primary" className="mb-5 text-center">
      <p className="text-xs text-accent-300 tracking-widest uppercase mb-2">
        Parcela mensal
      </p>
      <div className="text-5xl font-black bg-linear-to-br from-white to-accent-300 bg-clip-text text-transparent leading-tight mb-1">
        {formatBRL(parcela)}
      </div>
      <p className="text-xs text-accent-500">
        {meses}x de {formatBRL(parcela)}
      </p>
    </Card>
  );
}
