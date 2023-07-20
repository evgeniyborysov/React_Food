export const getCategories = async () => {
	const response = await fetch(
		"https://www.themealdb.com/api/json/v1/1/categories.php"
	);
	return await response.json();
};

export const getMeals = async (name) => {
	const response = await fetch(
		`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`
	);
	return await response.json();
};

export const getRecipe = async (id) => {
	const response = await fetch(
		`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
	);
	return await response.json();
};
