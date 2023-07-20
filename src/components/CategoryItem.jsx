import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

export const CategoryItem = ({ category }) => {
	return (
		<Grid
			item
			xs={12}
			sm={6}
			md={4}
			lg={3}
			sx={{ display: "flex", alignItems: "stretch" }}
		>
			<Card sx={{ maxWidth: 345 }}>
				<CardActionArea
					component={Link}
					to={`/category/${category.strCategory}`}
				>
					<CardMedia
						component="img"
						height="160"
						image={category.strCategoryThumb}
						alt={category.strCategory}
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							{category.strCategory}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							{category.strCategoryDescription.slice(0, 150)}...
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</Grid>
	);
};
