import { axiosInstance } from '../utils/axiosInstance';
import { MovieResponse } from '../Types/MovieResponse';
import api from "@/app/api/CategoryApi.json";

export default async function GetData(endpoint: string): Promise<MovieResponse[]> {
  let api_endpoint: string = '';
  let data: MovieResponse[] = [];

  const foundItem = api.find((item) => item.path === endpoint);
  if (foundItem) {
    api_endpoint = foundItem.endpoint;
  } else {
    console.log("Veri bulunamadı");
    return []
  }

  try {
    const res = await axiosInstance.get<{ results: MovieResponse[] }>(api_endpoint);
    data = res.data.results; 
    return data;
  } catch (e:unknown) {
    throw e
  }
}
