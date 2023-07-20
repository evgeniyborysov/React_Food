import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMeals } from "../API";
import { DishList } from "../components/DishList";

export const Category = () => {
	const [dishes, setDishes] = useState([]);
	const { name } = useParams();

	useEffect(() => {
		getMeals(name).then((data) => setDishes(data.meals));
	}, [name]);

	return <DishList dishes={dishes} />;
};
