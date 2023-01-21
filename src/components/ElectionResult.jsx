import { useEffect, useState } from "react";
import AmountVoters from "./AmountVoters";
import CandidatesCard from "./CandidatesCard";
import { getElectionCity } from "../services/electionService";
import { getCityById } from "../services/citiesService";

export default function ElectionResult({
  citySelected = ''
}) {
  const [electionResult, setElectionResult] = useState([]);
  const [cityResult, setCityResult] = useState({});

  useEffect(() => {
    async function getCitySelectedElection() {
      try {
        const election = await getElectionCity(citySelected);
        const city = await getCityById(citySelected);
        setCityResult(city);
        setElectionResult(election);
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
        <AmountVoters 
          votingPopulation={cityResult?.votingPopulation}
          absence={cityResult?.absence}
          presence={cityResult?.presence}
          totalCandidaties={electionResult.length}
        />
      </div>

      <div className="mt-8 flex flex-row items-center justify-center flex-wrap">
        {electionResult.map((candidate, index) => {
          return(
            <CandidatesCard 
              key={index}
              candidate={candidate}
              electionResult={electionResult}
              votingPopulation={cityResult?.votingPopulation}
            />
          );
        }).sort((a, b) => {
          return b.props.candidate.votes - a.props.candidate.votes;
        })}
      </div>
    </div>
  );
}