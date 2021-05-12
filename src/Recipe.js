import React from "react";
import style from "./recipes.module.css";

const Recipe=({title,calories,image,ingredients})=>{
    return(
        <div className={style.recipe}>
            <h1>Title: {title}</h1>
            <ol>
                <h1>Ingredients</h1>
                {ingredients.map(ingredient=>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>Calories: {calories}</p>
            <img className={style.image} src={image} alt="Recipes"/>
        </div>
    )
}
export default Recipe;