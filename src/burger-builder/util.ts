import {getIngredientSrc, Ingredient} from "../api";

// these infos can also get by js
const PATTY_HEIGHT = 183;
const BACON_HEIGHT = 83;
const EGG_HEIGHT = 117;
const BUN_TOP_HEIGHT = 116
const OFFSET = 2

export const getBurgerStyleInfos = (ingredients: Ingredient[]) => {
  const length = ingredients.length;
  const bunTop = {src: getIngredientSrc('bun_top.png'), top: 0, zIndex: length + 1, left: 0}
  let currentHeight = BUN_TOP_HEIGHT;
  const theIs = ingredients.map((i, index) => {
    const height = i.name === 'burger-builder patty' ? PATTY_HEIGHT : i.name === 'bacon' ? BACON_HEIGHT : EGG_HEIGHT
    const result = {
      src: i.src,
      top: currentHeight - height / OFFSET,
      zIndex: length - index,
      left: 20,
      currentHeight,
      name: i.name
    }
    currentHeight += (height - height / OFFSET)
    return result
  })
  const bunBottom = {
    src: getIngredientSrc('bun_bottom.png'),
    top: currentHeight,
    zIndex: 0,
    left: 0
  }
  return [bunTop, ...theIs, bunBottom]
}
