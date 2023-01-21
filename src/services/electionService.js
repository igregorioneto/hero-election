import { getAll } from "./httpService";

export async function getElectionCity(cityId) {
  const electionCity = await getAll(`/election?cityId=${cityId}`);
  return [...electionCity];
}