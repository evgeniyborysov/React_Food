import { useState, useEffect } from "react";
import { getCategories } from "../API";
import { CategoryList } from "../components/CategoryList";
import { Progress } from "../components/Progress";

export const Home = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		getCategories().then((data) => setCategories(data.categories));
	}, []);

	return categories.length === 0 ? (
		<Progress />
	) : (
		<CategoryList categories={categories} />
	);
};
