const initialState = {
	heroes: [],
	heroesLoadingStatus: "idle",
};

const heroes = (state = initialState, action) => {
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
				heroesLoadingStatus: "idle",
			};
		case "HEROES_FETCHING_ERROR":
			return {
				...state,
				heroesLoadingStatus: "error",
			};
		// delete, add hero
		case "HERO_DELETE":
			const index = state.heroes.findIndex((hero) => hero.id === action.payload);
			const withoutDeletedHero = [...state.heroes.slice(0, index), ...state.heroes.slice(index + 1)];
			return {
				...state,
				heroes: withoutDeletedHero,
			};
		case "HERO_ADD":
			const newHeroes = [...state.heroes, action.payload];
			return {
				...state,
				heroes: newHeroes,
			};
		default:
			return state;
	}
};

export default heroes;
