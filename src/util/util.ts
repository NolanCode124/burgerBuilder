import {useIngredientsState} from "../burger-builder";
import {useCallback} from "react";

export const useClearPersistedState = () => {
  const [, setIngredientsInBurger] = useIngredientsState([])
  return useCallback(() => {
    setIngredientsInBurger([])
  }, [setIngredientsInBurger])
}