import { useState } from "react";
import { simular } from "@/financiamento";

export function useSimulador() {
  const [valorBem, setValorBem] = useState(60_000);
  const [entrada, setEntrada] = useState(25_000);
  const [taxaMensal, setTaxaMensal] = useState(1.8);
  const [meses, setMeses] = useState(48);
  const [rendaMensal, setRendaMensal] = useState(3_800);

  const resultado = simular({ valorBem, entrada, taxaMensal, meses, rendaMensal });
  const financiado = Math.max(valorBem - entrada, 0);
  const percentualEntrada = valorBem > 0 ? Math.round((entrada / valorBem) * 100) : 0;

  return {
    valorBem,
    entrada,
    taxaMensal,
    meses,
    rendaMensal,
    setValorBem,
    setEntrada,
    setTaxaMensal,
    setMeses,
    setRendaMensal,
    financiado,
    percentualEntrada,
    resultado,
  };
}
