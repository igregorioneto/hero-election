import { useEffect, useState } from "react";
import Cities from "../components/Cities";
import Header from "../components/Header";
import Main from "../components/Main";
import { getAllCities } from "../services/citiesService";
import ElectionResult from "../components/ElectionResult";
import Loading from "../components/Loading";
import Error from "../components/Error";

export default function HomePage() {
  const [allCities, setAllCities] = useState([]);
  const [citySelected, setCitySelected] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function allCities() {
      try {
        const cities = await getAllCities();
        setAllCities(cities);

        setTimeout(() => {
          setLoading(false);
        }, 500);
        setError('');
      } catch (error) {
        setError(error.message);
      }
    }

    allCities();
  }, []);

  function handleSelectedCity(city) {
    setLoading(true);
    setTimeout(() => {
      setCitySelected(city);
      setLoading(false);
    }, 500);
  }

  let mainContainer = (
    <div className="flex flex-row ali justify-center">
      <Loading />
    </div>
  );

  if (error) {
    mainContainer = <Error>{ error }</Error>
  }

  if (!loading && !error) {
    mainContainer = (
      <>
        <div className="flex flex-row justify-center mt-8">
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
      </>
    );
  }

  return (
    <>
      <Header>
        Eleições dos Heróis
      </Header>

      <Main>
        { mainContainer }
      </Main>
    </>
  );
}