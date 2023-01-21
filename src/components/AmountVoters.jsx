import { useEffect } from "react";

export default function AmountVoters({
  citySelected = {}
}) {
  
  useEffect(() => {
    console.log(citySelected)
  }, [citySelected]);

  return(
    <div>
      <div className="mt-4 text-center">
        <span className="mr-4">Total de eleitores: {citySelected.votingPopulation}</span>
        <span className="mr-4">Abstenação: {citySelected.absence}</span>
        <span>Comparecimento: {citySelected.presence}</span>
      </div>
      <div className="text-center mt-4">
        6 candidatos
      </div>
    </div>
  );
}