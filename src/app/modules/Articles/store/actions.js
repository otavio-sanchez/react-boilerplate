
import type from './action-type';

const searchArticles = search => async (dispatch) => {
	dispatch({
		type: type.SEARCH_ARTICLE,
		loading: true,
		articles: [],
	});

	search.then((response) => {
		dispatch({
			type: type.SEARCH_ARTICLE,
			loading: false,
			articles: response,
		});
	})
		.catch((error) => {
			dispatch({
				type: type.SEARCH_ARTICLE,
				loading: false,
				articles: [],
				error,
			});
		});
};

export default { searchArticles };
