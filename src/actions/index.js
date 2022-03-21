// heroes
export const heroesFetching = () => {
	return {
		type: "HEROES_FETCHING",
	};
};

export const heroesFetched = (heroes) => {
	return {
		type: "HEROES_FETCHED",
		payload: heroes,
	};
};

export const heroesFetchingError = () => {
	return {
		type: "HEROES_FETCHING_ERROR",
	};
};

// filters
export const filtersFetching = () => {
	return {
		type: "FILTERS_FETCHING",
	};
};

export const filtersFetched = (filters) => {
	return {
		type: "FILTERS_FETCHED",
		payload: filters,
	};
};

export const filtersFetchingError = () => {
	return {
		type: "FILTERS_FETCHING_ERROR",
	};
};

// delete, add Hero
export const heroDelete = (id) => {
	return {
		type: "HERO_DELETE",
		payload: id,
	};
};

export const heroAdd = (hero) => {
	return {
		type: "HERO_ADD",
		payload: hero,
	};
};

// select filter
export const selecteFilter = (filter) => {
	return {
		type: "SELECT_FILTER",
		payload: filter,
	};
};
