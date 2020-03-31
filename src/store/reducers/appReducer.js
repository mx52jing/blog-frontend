import { Map } from 'immutable'
import { FETCH_START, FETCH_END } from '../actions'

const initialState = Map({
	isFetching: false
})

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_START:
			return state.set('isFetching', true)
		case FETCH_END:
			return state.set('isFetching', false)
		default:
			return state
	}
}
