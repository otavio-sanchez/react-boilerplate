import type from './action-type';

const initialState = {
	articles: [],
	loading: false,
	error: null,
};


export default (state = initialState, action) => {
	switch (action.type) {
		case type.SEARCH_ARTICLE:
			return {
				...state,
				articles: action.articles,
				error: action.error,
				loading: action.loading,
			};
		default:
			return state;
	}
};
