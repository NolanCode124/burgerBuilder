import {Ingredient} from "../api";
import styled from "styled-components";

type Props = {
  ingredients: Ingredient[],
  onPick: (value: Ingredient) => void
}
export const IngredientPicker = ({ingredients, onPick}: Props) => {
  return <Container>
    {ingredients?.map(i => <IngredientItem key={i.name} data={i} onPick={() => onPick(i)}/>)}
  </Container>
}

const IngredientItem = ({data, onPick}: { data: Ingredient, onPick: Props['onPick'] }) => {
  return <ItemContainer className='ingredient-item' onClick={() => onPick(data)}>
    <img style={{height: 30}} src={data.src}/>
    <p className='ingredient-title'>
      {data.name}
    </p>
  </ItemContainer>
}

const Container = styled.div`
  display: flex;
  align-items: center;
  min-height: 100px;
`

const ItemContainer = styled.div`
  text-align: center;
  margin: 0 20px;
  cursor: pointer
`