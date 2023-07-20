import React from "react";
import Grid from "@mui/material/Grid";
import { DishItem } from "./DishItem";

export const DishList = ({ dishes }) => {
	return (
		<Grid container spacing={2} sx={{ padding: 2 }}>
			{dishes.map((dish) => (
				<DishItem key={dish.idMeal} dish={dish} />
			))}
		</Grid>
	);
};
