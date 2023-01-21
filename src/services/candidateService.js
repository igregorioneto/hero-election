import { getAll } from "./httpService";

export async function getByIdCandidate(candidateId) {
  const candidate = await getAll(`/candidates?id=${candidateId}`);
  return candidate[0];
} 