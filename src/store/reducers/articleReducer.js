import { fromJS } from 'immutable'
import {
	FETCH_ARTICLE_DATA,
	UPDATE_ARTICLE_DATA,
	FETCH_ARTICLE_CONTENT,
	UPDATE_ARTICLE_CONTENT
} from '../actions'

const initialState = fromJS({
	articleData: {
		total: 0,
		page: 1,
		data: []
	},
	articleContent: {
		title: '',
		category: [],
		content: ''
	}
})

export const actions = {
	fetchArticleData: payload => ({ type: FETCH_ARTICLE_DATA, payload }),
	fetchArticleContent: id => ({ type: FETCH_ARTICLE_CONTENT, id })
}

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_ARTICLE_DATA:
			return state.set('articleData', action.data)
		case UPDATE_ARTICLE_CONTENT:
			return state.set('articleContent', action.data)
		default:
			return state
	}
}
