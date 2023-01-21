import imagemCandidator from '../img/batman.png';

export default function CandidatesCard({
  elected = false
}) {

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
          src={imagemCandidator} 
          alt="Foto do candidato" 
        />

        <div className='flex flex-col'>
          <span className={`mb-2 text-center ${electedCandidate}`}>45%</span>
          <span className='text-xs'>700.000 votos</span>
        </div>
      </div>

      <div className='mt-8 flex flex-col text-center'>
        <span>Batman</span>

        <span className={`mt-6 ${electedCandidate}`}>Eleito</span>
      </div>

    </div>
  );
}