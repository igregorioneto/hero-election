import { useEffect } from "react";
import AmountVoters from "./AmountVoters";
import CandidatesCard from "./CandidatesCard";
import { getElectionCity } from "../services/electionService";

export default function ElectionResult({
  citySelected = ''
}) {

  useEffect(() => {
    async function getCitySelectedElection() {
      try {
        const city = await getElectionCity(citySelected);
        console.log(city);
      } catch (error) {
        console.log(error.message);
      }
    }

    getCitySelectedElection();
  }, [citySelected])

  return(
    <div>
      <h3 className="font-bold text-center">Eleições em Gothan</h3>

      <div>
        <AmountVoters />
      </div>

      <div className="mt-8">
        <CandidatesCard />
      </div>
    </div>
  );
}