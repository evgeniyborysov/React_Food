import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export const DishItem = ({ dish }) => {
	return (
		<Grid
			item
			xs={12}
			sm={6}
			md={4}
			lg={3}
			sx={{ display: "flex", alignItems: "stretch" }}
		>
			<Card
				sx={{ maxWidth: 345, display: "flex", flexDirection: "column" }}
			>
				<CardMedia
					component="img"
					sx={{ height: 300 }}
					image={dish.strMealThumb}
					alt={dish.strMeal}
				/>
				<CardContent sx={{ flexGrow: 1 }}>
					<Typography gutterBottom variant="h5" component="div">
						{dish.strMeal}
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="small">view recipe</Button>
				</CardActions>
			</Card>
		</Grid>
	);
};
