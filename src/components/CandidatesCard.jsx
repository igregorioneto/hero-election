import { useEffect, useState } from 'react';
import { getByIdCandidate } from '../services/candidateService';

export default function CandidatesCard({
  elected = false,
  candidate = {}
}) {
  const [candidateInfo, setCandidateInfo] = useState({});

  useEffect(() => {
    async function getCandidate() {
      try {
        const candidateInfo = await getByIdCandidate(candidate.candidateId);
        setCandidateInfo(candidateInfo);
      } catch (error) {
        console.log(error.message);
      }
    }

    getCandidate();
  }, [candidate]);

  const electedCandidate = elected ? 'text-green-500' : 'text-yellow-400';

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
          <span className={`mb-2 text-center ${electedCandidate}`}>45%</span>
          <span className='text-xs'>700.000 votos</span>
        </div>
      </div>

      <div className='mt-8 flex flex-col text-center'>
        <span>{candidateInfo.name}</span>

        <span className={`mt-6 ${electedCandidate}`}>Eleito</span>
      </div>

    </div>
  );
}