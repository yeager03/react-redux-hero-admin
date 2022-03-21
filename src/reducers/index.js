const initialState = {
	heroes: [],
	heroesLoadingStatus: "idle",
	filters: [],
	filtersLoadingStatus: "idle",
	selectedFilter: "all",
	filteredHeroes: [], // список персонажей, который мы будем выводить на страницу
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		// heroes
		case "HEROES_FETCHING":
			return {
				...state,
				heroesLoadingStatus: "loading",
			};
		case "HEROES_FETCHED":
			return {
				...state,
				heroes: action.payload,
				// фильтрация
				filteredHeroes:
					state.selectedFilter === "all"
						? action.payload
						: action.payload.filter((hero) => hero.element === state.selectedFilter),
				heroesLoadingStatus: "idle",
			};
		case "HEROES_FETCHING_ERROR":
			return {
				...state,
				heroesLoadingStatus: "error",
			};
		// filters
		case "FILTERS_FETCHING":
			return {
				...state,
				filtersLoadingStatus: "loading",
			};
		case "FILTERS_FETCHED":
			return {
				...state,
				filters: action.payload,
				filtersLoadingStatus: "idle",
			};
		case "FILTERS_FETCHING_ERROR":
			return {
				...state,
				filtersLoadingStatus: "error",
			};

		// delete, add hero
		case "HERO_DELETE":
			const index = state.heroes.findIndex((hero) => hero.id === action.payload);
			const withoutDeletedHero = [...state.heroes.slice(0, index), ...state.heroes.slice(index + 1)];
			return {
				...state,
				heroes: withoutDeletedHero,
				// фильтрация
				filteredHeroes:
					state.selectedFilter === "all"
						? withoutDeletedHero
						: withoutDeletedHero.filter((hero) => hero.element === state.selectedFilter),
			};
		case "HERO_ADD":
			const newHeroes = [...state.heroes, action.payload];
			return {
				...state,
				heroes: newHeroes,
				// фильтрация
				filteredHeroes:
					state.selectedFilter === "all"
						? newHeroes
						: newHeroes.filter((hero) => hero.element === state.selectedFilter),
			};

		// select filter
		case "SELECT_FILTER":
			return {
				...state,
				selectedFilter: action.payload,
				// фильтрация
				filteredHeroes:
					action.payload === "all" ? state.heroes : state.heroes.filter((item) => item.element === action.payload),
			};

		default:
			return state;
	}
};

export default reducer;
