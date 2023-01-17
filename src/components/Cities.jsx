export default function Cities({
  allCities = [],
}) {
  
  return(
    <form>
      <label htmlFor="select-city" className="text-center block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Escolha o município
      </label>
      <select id="select-city" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected>Selecione uma cidade</option>
        {allCities.map(city => {
          return(
            <option key={city.id} value={city.id}>{city.name}</option>
          );
        })}
      </select>
    </form>
  );
}