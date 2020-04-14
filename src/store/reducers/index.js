import { combineReducers } from 'redux-immutable'
import { reducer as appReducer } from './appReducer'
import { reducer as articleReducer } from './articleReducer'

export default combineReducers({
	app: appReducer,
	article: articleReducer
})
