export default function AmountVoters({
  votingPopulation = 0,
  absence = 0,
  presence = 0,
  totalCandidaties = 0
}) {

  return(
    <div>
      <div className="mt-4 text-center">
        <span className="mr-4">Total de eleitores: {votingPopulation}</span>
        <span className="mr-4">Abstenação: {absence}</span>
        <span>Comparecimento: {presence}</span>
      </div>
      <div className="text-center mt-4">
        {totalCandidaties} candidatos
      </div>
    </div>
  );
}