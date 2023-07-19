import React from "react";
// import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { CategoryItem } from "./CategoryItem";

export const CategoriesList = ({ categories }) => {
	return (
		<Grid container spacing={2} sx={{ padding: 2 }}>
			{categories.map((category) => (
				<CategoryItem key={category.idCategory} category={category} />
			))}
		</Grid>
	);
};
