import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const RecipeTable = ({ ingredients }) => {
	return (
		<TableContainer component={Paper}>
			<Table
				sx={{ minWidth: 350 }}
				size="small"
				aria-label="a dense table"
			>
				<TableHead>
					<TableRow>
						<TableCell align="center">Ingredient</TableCell>
						<TableCell align="center">Measure</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{Object.keys(ingredients).map((key) => {
						if (
							key.includes("Ingredient") &&
							ingredients[key] !== ""
						) {
							return (
								<TableRow key={key}>
									<TableCell align="center">
										{ingredients[key]}
									</TableCell>
									<TableCell align="center">
										{
											ingredients[
												`strMeasure${key.slice(13)}`
											]
										}
									</TableCell>
								</TableRow>
							);
						}
						return null;
					})}

					{/* <TableCell>{"soy sauce"}</TableCell> */}
					{/* <TableCell align="right">{"3/4 cup"}</TableCell> */}
				</TableBody>
			</Table>
		</TableContainer>
	);
};
