import {IngredientPicker} from "./ingredient-picker";
import {Ingredient, useIngredients} from "../api";
import createPersistedState from "use-persisted-state";
import styled from "styled-components";
import {Burger} from "./burger";

export const useIngredientsState = createPersistedState<Ingredient[]>('ingredients');

export const BurgerBuilder = () => {
  const {data: ingredients} = useIngredients()
  const [usedIngredients, setUsedIngredients] = useIngredientsState([])
  const addIngredient = (i: Ingredient) => setUsedIngredients(value => [i, ...value])
  const removeIngredient = (index: number) => setUsedIngredients(value => value.filter((v, fIndex) => index !== fIndex))

  return <Container>
    <IngredientPicker ingredients={ingredients || []} onPick={addIngredient}/>
    <Burger onClick={(_, index) => removeIngredient(index)} ingredients={usedIngredients}/>
  </Container>
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center
`