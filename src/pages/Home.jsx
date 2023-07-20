import { useState, useEffect } from "react";
import { getCategories } from "../API";
import { CategoryList } from "../components/CategoryList";

export const Home = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		getCategories().then((data) => setCategories(data.categories));
	}, []);

	return <CategoryList categories={categories} />;
};
