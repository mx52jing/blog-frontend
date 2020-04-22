import { combineReducers } from 'redux-immutable'
import { reducer as appReducer } from './appReducer'
import { reducer as articleReducer } from './articleReducer'
import { reducer as categoryReducer } from './categoryReducer'
import { reducer as archivesReducer } from './archivesReducer'

export default combineReducers({
	app: appReducer,
	article: articleReducer,
    category: categoryReducer,
	archives: archivesReducer
})
