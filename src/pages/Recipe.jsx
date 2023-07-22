import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRecipe } from "../API";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { RecipeTable } from "../components/RecipeTable";

export const Recipe = () => {
	const [dish, setDish] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		getRecipe(id).then((data) => setDish(data.meals[0]));
	}, [id]);

	return (
		<div>
			<Typography gutterBottom variant="h3" component="h1">
				{dish.strMeal}
			</Typography>
			<Box>
				<img src={dish.strMealThumb} alt={dish.strMeal} />
			</Box>
			{dish.strCategory ? (
				<Typography component="p">
					Category: {dish.strCategory}
				</Typography>
			) : null}
			{dish.strArea ? (
				<Typography component="p">Area: {dish.strArea}</Typography>
			) : null}

			<Typography component="p">{dish.strInstructions}</Typography>
			<RecipeTable ingredients={dish} />
			{dish.strYoutube ? (
				<Box>
					<Typography gutterBottom variant="h5" component="h5">
						Video Recipe
					</Typography>
					<iframe
						width="560"
						height="315"
						src={`https://www.youtube.com/embed/${dish.strYoutube.slice(
							-11
						)}`}
						title={dish.strMeal}
						allowFullScreen
					/>
				</Box>
			) : null}
		</div>
	);
};
