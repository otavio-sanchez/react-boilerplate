import { combineReducers } from 'redux';
import articlesReducer from '../app/modules/Articles/store/reducer';

export default combineReducers({
	articles: articlesReducer,
});
