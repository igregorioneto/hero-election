import { useEffect, useState } from 'react';
import { getByIdCandidate } from '../services/candidateService';

export default function CandidatesCard({
  elected = {},
  candidate = {},
  electionResult = [],
  votingPopulation = 0
}) {
  const [candidateInfo, setCandidateInfo] = useState({});
  const [candidatePercent, setCandidatePercent] = useState(0);
  const [electedClass, setElectedClass] = useState(false);

  useEffect(() => {
    async function getCandidate() {
      try {
        const candidateElection = await getByIdCandidate(candidate.candidateId);
        const c = electionResult.find((c) => c.candidateId === candidate.candidateId);
        const percent = (c?.votes * 100) /  votingPopulation;
        setCandidatePercent(percent?.toFixed(2));
        setCandidateInfo(candidateElection);
        setElectedClass(elected.candidateId === candidateElection.id ? true : false);
      } catch (error) {
        console.log(error.message);
      }
    }

    getCandidate();
  }, [candidate, electionResult, votingPopulation, elected]);

  const electedCandidate = electedClass ? 'text-green-500' : 'text-yellow-400';

  return(
    <div
      className={`
        shadow-lg p-4 m-2 w-60 h-52 cursor-pointer
      `}
    >

      <div className='flex justify-between'>
        <img 
          className='border rounded-full w-16 h-16'
          src={`/img/${candidateInfo.username}.png`} 
          alt="Foto do candidato" 
        />

        <div className='flex flex-col'>
          <span className={`mb-2 text-center ${electedCandidate}`}>{candidatePercent}%</span>
          <span className='text-xs'>{candidate?.votes?.toLocaleString('pt-BR')} votos</span>
        </div>
      </div>

      <div className='mt-8 flex flex-col text-center'>
        <span>{candidateInfo.name}</span>

        <span className={`mt-6 ${electedCandidate}`}>{electedClass ? 'Eleito' : 'Não eleito'}</span>
      </div>

    </div>
  );
}