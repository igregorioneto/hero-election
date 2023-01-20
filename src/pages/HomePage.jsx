import { useEffect, useState } from "react";
import Cities from "../components/Cities";
import Header from "../components/Header";
import Main from "../components/Main";
import { getAllCities } from "../services/citiesService";

export default function HomePage() {
  const [allCities, setAllCities] = useState([]);

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
      </Main>
    </>
  );
}