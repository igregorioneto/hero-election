import { getAll } from "./httpService";

export async function getAllCities() {
  const allCities = await getAll('/cities');
  return [...allCities];
}