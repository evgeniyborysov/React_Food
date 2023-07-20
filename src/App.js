import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contacts } from "./pages/Contacts";
import { NotFoundPage } from "./pages/404";
import Container from "@mui/material/Container";
import { Category } from "./pages/Category";

function App() {
	return (
		<div className="App">
			<Header />
			<Container fixed>
				<Routes>
					<Route index element={<Home />} />
					<Route path="category/:name" element={<Category />} />
					<Route path="about" element={<About />} />
					<Route path="contacts" element={<Contacts />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</Container>
		</div>
	);
}

export default App;
