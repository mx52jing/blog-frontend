import { combineReducers } from 'redux-immutable'
import { reducer as appReducer } from './appReducer'
import { reducer as articleReducer } from './articleReducer'
import { reducer as categoryReducer } from './categoryReducer'

export default combineReducers({
	app: appReducer,
	article: articleReducer,
    category: categoryReducer
})
