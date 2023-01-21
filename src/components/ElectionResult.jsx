import { useEffect, useState } from "react";
import AmountVoters from "./AmountVoters";
import CandidatesCard from "./CandidatesCard";
import { getElectionCity } from "../services/electionService";

export default function ElectionResult({
  citySelected = ''
}) {
  const [electionResult, setElectionResult] = useState([]);

  useEffect(() => {
    async function getCitySelectedElection() {
      try {
        const city = await getElectionCity(citySelected);
        setElectionResult(city);
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
        {electionResult.map((candidate, index) => {
          return(
            <CandidatesCard 
              key={index}
              candidate={candidate}
            />
          );
        })}
      </div>
    </div>
  );
}