import { useEffect, useState } from "react";
import Cities from "../components/Cities";
import Header from "../components/Header";
import Main from "../components/Main";
import { getAllCities } from "../services/citiesService";
import ElectionResult from "../components/ElectionResult";

export default function HomePage() {
  const [allCities, setAllCities] = useState([]);
  const [citySelected, setCitySelected] = useState('');

  useEffect(() => {
    async function allCities() {
      try {
        const cities = await getAllCities();
        console.log(cities);
        setAllCities(cities);
      } catch (error) {
        console.log(error.message);
      }
    }

    allCities();
  }, []);

  function handleSelectedCity(city) {
    console.log(city)
    setCitySelected(city)
  }

  return (
    <>
      <Header>
        Eleições dos Herois
      </Header>

      <Main>
        <div className="flex flex-row justify-center">
          <Cities 
            allCities={allCities}
            onSelectedCity={handleSelectedCity}
          />
        </div>

        <div className="mt-8 border pt-2 pr-10 pl-10 pb-2 min-h-screen">
          <ElectionResult 
            citySelected={citySelected}
          />
        </div>
      </Main>
    </>
  );
}