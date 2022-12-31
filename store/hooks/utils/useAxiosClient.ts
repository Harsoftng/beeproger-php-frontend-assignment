import axios, { AxiosRequestHeaders } from 'axios';

export default function useAxiosClient(
  baseUrl?: string,
  otherHeaders?: AxiosRequestHeaders
) {
  const header = {
    ...otherHeaders
  };
  const endpoint = process.env.NEXT_PUBLIC_API_BASE_URL;
  return axios.create({
    headers: header,
    baseURL: baseUrl || endpoint
  });
}

export function getAxiosClient(otherHeaders?: AxiosRequestHeaders) {
  const header = {
    ...otherHeaders
  };

  const endpoint = process.env.NEXT_PUBLIC_API_BASE_URL;

  return axios.create({
    headers: header,
    baseURL: endpoint
  });
}
