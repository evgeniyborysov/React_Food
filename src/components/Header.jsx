import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export const Header = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<Box
						sx={{
							display: "flex",
							justifyContent: "flex-start",
							flexGrow: 1,
						}}
					>
						<Button component={Link} to="/" color="inherit">
							<Typography variant="h6">React Food 🍔</Typography>
						</Button>
					</Box>

					<List
						sx={{
							display: "flex",
						}}
					>
						<ListItem>
							<Button component={Link} to="/" color="inherit">
								Home
							</Button>
						</ListItem>
						<ListItem>
							<Button component={Link} to="about" color="inherit">
								About
							</Button>
						</ListItem>
						<ListItem>
							<Button
								component={Link}
								to="contacts"
								color="inherit"
							>
								Contacts
							</Button>
						</ListItem>
					</List>
				</Toolbar>
			</AppBar>
		</Box>
	);
};
