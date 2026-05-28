import { ComprometimentoRenda } from "@/components/ComprometimentoRenda";
import { Detalhamento } from "@/components/Detalhamento";
import { FaixasReferencia } from "@/components/FaixasReferencia";
import { ParametrosFinanciamento } from "@/components/ParametrosFinanciamento";
import { ResultadoParcela } from "@/components/ResultadoParcela";
import { ResumoVeiculo } from "@/components/ResumoVeiculo";
import { useSimulador } from "@/useSimulador";

export default function App() {
  const {
    valorBem, entrada, taxaMensal, meses, rendaMensal,
    setValorBem, setEntrada, setTaxaMensal, setMeses, setRendaMensal,
    financiado, percentualEntrada, resultado,
  } = useSimulador();

  return (
    <main className="min-h-screen px-4 py-8">
      <div className="max-w-[520px] mx-auto">
        <Header />

        <ResumoVeiculo
          valorBem={valorBem}
          entrada={entrada}
          financiado={financiado}
          percentualEntrada={percentualEntrada}
          onValorBemChange={setValorBem}
          onEntradaChange={setEntrada}
        />

        <ParametrosFinanciamento
          taxaMensal={taxaMensal}
          taxaAnual={resultado.taxaAnual}
          meses={meses}
          onTaxaChange={setTaxaMensal}
          onMesesChange={setMeses}
        />

        <ResultadoParcela parcela={resultado.parcela} meses={meses} />

        <Detalhamento
          totalJuros={resultado.totalJuros}
          totalPago={resultado.totalPago}
          custoTotal={resultado.custoTotal}
        />

        <ComprometimentoRenda
          rendaMensal={rendaMensal}
          parcela={resultado.parcela}
          comprometimento={resultado.comprometimentoRenda}
          onRendaChange={setRendaMensal}
        />

        <FaixasReferencia />
      </div>
    </main>
  );
}

function Header() {
  return (
    <header className="mb-8">
      <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-indigo-500 mb-2">
        Simulador
      </p>
      <h1 className="text-3xl font-extrabold m-0 bg-linear-to-br from-ink to-indigo-300 bg-clip-text text-transparent">
        Financiamento de Veículo
      </h1>
    </header>
  );
}
