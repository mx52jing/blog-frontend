import { fromJS } from 'immutable'
import { FETCH_ARTICLE_LIST, UPDATE_ARTICLE_LIST } from '../actions'

const initialState = fromJS({
	articleList: []
})

export const actions = {
	fetchArticleList: () => ({ type: FETCH_ARTICLE_LIST })
}

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_ARTICLE_LIST:
			return state.set('articleList', action.data)
		default:
			return state
	}
}
