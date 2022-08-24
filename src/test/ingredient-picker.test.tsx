import TestRenderer from 'react-test-renderer';
import {IngredientPicker} from "../burger-builder/ingredient-picker";
import {Providers} from "../providers";
import {Ingredient} from "../api";

const mockIngredients: Ingredient[] = [
  {src: '', name: 'mockName1', id: 1},
  {src: '', name: 'mockName2', id: 2},
]
const testRenderer = TestRenderer.create(
  <Providers>
    <IngredientPicker ingredients={mockIngredients} onPick={() => {}}/>
  </Providers>
);
const testInstance = testRenderer.root;
it('ingredient-picker render well', () => {
// eslint-disable-next-line testing-library/await-async-query
  expect(testInstance.findAllByProps({className: 'ingredient-item'}).length).toBe(2);
})