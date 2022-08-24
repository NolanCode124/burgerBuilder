import {Ingredient} from "../api";
import {getBurgerStyleInfos} from "./util";
import {useMemo} from "react";

export const Burger = ({
                         ingredients,
                         onClick
                       }: { ingredients: Ingredient[], onClick: (i: Ingredient, index: number) => void }) => {
  const burgerStyleInfos = useMemo(() => getBurgerStyleInfos(ingredients), [ingredients])
  return <div style={{position: "relative", width: '430px', marginTop: '40px'}}>
    {burgerStyleInfos.map((item, index) => {
      const {top, left, zIndex, src} = item
      return <div key={index} style={{cursor: 'pointer', position: 'absolute', top, left, zIndex}}
                  onClick={() => onClick(ingredients[index - 1], index - 1)}>
        <img src={src}/>
      </div>
    })}
  </div>
}