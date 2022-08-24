import axios, {AxiosRequestConfig} from "axios";
import {useAuth} from "./auth-context";
import {useCallback} from "react";
import {useQuery} from "@tanstack/react-query";

const apiUrl = process.env.REACT_APP_API_URL

const useRequest = () => {
  const {token, logout} = useAuth()
  return useCallback((config: AxiosRequestConfig) => axios({
    ...config,
    headers: {
      ...config.headers,
      Authorization: token ? `Bearer ${token}` : ''
    }
  })
    .then(response => response.data)
    .catch((e) => {
      if (e.response.status === 401) {
        logout()
      }
    }), [logout, token])
}

export type Ingredient = { id: number, name: string, src: string }

export const getIngredientSrc = (name: string) => apiUrl + '/img/' + name
export const useIngredients = () => {
  const request = useRequest()
  return useQuery<Ingredient[]>(['ingredients'], async () => {
    const ingredients: Ingredient[] = await request({url: `${apiUrl}/ingredients`})
    return ingredients.map(i => ({...i, src: getIngredientSrc(i.src)}))
  })
}