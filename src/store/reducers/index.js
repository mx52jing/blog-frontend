import { combineReducers } from 'redux-immutable'
import { reducer as appReducer } from './appReducer'

export default combineReducers({
	app: appReducer
})
