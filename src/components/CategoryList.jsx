import React from "react";
import Grid from "@mui/material/Grid";
import { CategoryItem } from "./CategoryItem";

export const CategoryList = ({ categories }) => {
	return (
		<Grid container spacing={2} sx={{ padding: 2 }}>
			{categories.map((category) => (
				<CategoryItem key={category.idCategory} category={category} />
			))}
		</Grid>
	);
};
