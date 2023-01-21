import { getAll } from "./httpService";

export async function getAllCities() {
  const allCities = await getAll('/cities');
  return [...allCities];
}

export async function getCityById(cityId) {
  const city = await getAll(`/cities?id=${cityId}`);
  return city[0];
}