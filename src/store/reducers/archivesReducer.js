import { fromJS } from 'immutable'
import { FETCH_ARCHIVES, UPDATE_ARCHIVES } from '../actions'

const initialState = fromJS({
	archivesData: {
		total: 0,
		data: []
	}
})

export const actions = {
	fetchArchives: () => ({ type: FETCH_ARCHIVES })
}

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_ARCHIVES:
			return state.set('archivesData', action.data)
		default:
			return state
	}
}
