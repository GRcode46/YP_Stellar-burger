import React from "react";
import ingredientDetailsStyle from "./IngredientDetails.module.css";

import { ingredientType } from "../../utils/types";


function IngredientDetails({ data }) {
  function Ingredient(data) {
    return (
      <li className={`${ingredientDetailsStyle.item}`}>
        <p
          className={`${ingredientDetailsStyle.text} text text_type_main-default text_color_inactive pb-2`}
        >
          {data.text}
        </p>
        <p
          className={`${ingredientDetailsStyle.text} text text_type_main-default text_color_inactive`}
        >
          {data.value}
        </p>
      </li>
    );
  }

  return (
    <div className={`${ingredientDetailsStyle.wrapper}  pr-25 pb-15 pl-25`}>
      <img
        src={data.image_large}
        alt={data.name}
        className={ingredientDetailsStyle.image}
      />
      <p
        className={`${ingredientDetailsStyle.title} text text_type_main-medium pt-4`}
      >
        {data.name}
      </p>
      <ul className={`${ingredientDetailsStyle.listItems} pt-8`}>
        <Ingredient text="Калории,ккал" value={data.calories} />
        <Ingredient text="Белки, г" value={data.proteins} />
        <Ingredient text="Жиры, г" value={data.fat} />
        <Ingredient text="Углеводы, г" value={data.carbohydrates} />
      </ul>
    </div>
  );
}



IngredientDetails.propTypes = {
  data: ingredientType.isRequired
}

export { IngredientDetails };
