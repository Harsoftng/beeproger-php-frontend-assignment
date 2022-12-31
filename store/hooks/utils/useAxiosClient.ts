import axios, { AxiosRequestHeaders } from 'axios';
import useTokenState from '../auth/useTokenState';

export default function useAxiosClient(
  baseUrl?: string,
  otherHeaders?: AxiosRequestHeaders
) {
  const { token } = useTokenState();
  const header = {
    Authorization: !token ? '' : `Bearer ${token}`,
    ...otherHeaders
  };
  const endpoint = (process.env.NEXT_PUBLIC_API_BASE_URL || '').replace(
    'graphql',
    ''
  );
  return axios.create({
    headers: header,
    baseURL: baseUrl || endpoint
  });
}

export function useAxiosClientNoAuth(
  baseUrl: string,
  otherHeaders?: AxiosRequestHeaders
) {
  const header = {
    ...otherHeaders
  };
  return axios.create({
    headers: header,
    baseURL: baseUrl
  });
}

export function getAxiosClient(otherHeaders?: AxiosRequestHeaders) {
  const token: string =
    localStorage.getItem(process.env.NEXT_PUBLIC_LST_NAME || 'app_tkn_clt') ||
    '';

  const header = {
    Authorization: !token ? '' : `Bearer ${token}`,
    ...otherHeaders
  };
  const endpoint = (process.env.NEXT_PUBLIC_API_BASE_URL || '').replace(
    'graphql',
    ''
  );
  return axios.create({
    headers: header,
    baseURL: endpoint
  });
}
