import { fromJS } from 'immutable'
import { FETCH_ARTICLE_DATA, UPDATE_ARTICLE_DATA } from '../actions'

const initialState = fromJS({
	articleData: {
		total: 0,
		page: 1,
		data: []
	}
})

export const actions = {
	fetchArticleData: payload => ({ type: FETCH_ARTICLE_DATA, payload })
}

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_ARTICLE_DATA:
			return state.set('articleData', action.data)
		default:
			return state
	}
}
