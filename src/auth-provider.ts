// mock firebase, auth0 code

import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL
const localStorageKey = '__BURGER_BUILDER_TOKEN__'

export const getToken = () => window.localStorage.getItem(localStorageKey)

export const login = async (params: { name: string, password: string }) => {
  const {data: {token}} = await axios.post<{ token: string }>(`${apiUrl}/login`, params)
  window.localStorage.setItem(localStorageKey, token)
  return token
}

export const logout = () => window.localStorage.removeItem(localStorageKey)