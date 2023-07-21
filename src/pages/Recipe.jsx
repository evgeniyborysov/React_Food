import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRecipe } from "../API";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export const Recipe = () => {
	const [dish, setDish] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		getRecipe(id).then((data) => setDish(data.meals[0]));
	}, [id]);

	return (
		<div>
			<h3>Recipe</h3>
			<Typography gutterBottom variant="h5" component="div">
				{dish.strMeal}
			</Typography>
			<Box>
				<img src={dish.strMealThumb} alt={dish.strMeal} />
			</Box>
			<Typography component="p">{dish.strCategory}</Typography>
			<Typography component="p">{dish.strArea}</Typography>
			<Typography component="p">{dish.strInstructions}</Typography>
		</div>
	);
};
