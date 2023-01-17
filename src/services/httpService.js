import axios from "axios";
import { getNewId } from "./idService";

const BASE_URL = 'http://localhost:3001';

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

export async function getAll(url) {
  const { data } = await instance.get(url);
  return data;
}

export async function create(url, obj) {
  const { data } = await instance.post(url, {
    id: getNewId(),
    ...obj
  });
  return data;
}

export async function updated(url, obj) {
  const { data } = await instance.put(url, {
    ...obj
  });

  return data;
}

export async function deleted(url) {
  await instance.delete(url);
}