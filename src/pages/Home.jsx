import { useState } from "react";
import { useEffect } from "react";
import { getCategories } from "../API";
import { CategoriesList } from "../components/CategoriesList";

export const Home = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		getCategories().then((data) => setCategories(data.categories));
	}, []);

	return (
		<>
			<CategoriesList categories={categories} />
		</>
	);
};
