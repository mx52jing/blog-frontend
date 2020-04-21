import { fromJS } from 'immutable'
import { FETCH_CATEGORY_LIST, UPDATE_CATEGORY_LIST } from '../actions'

const initialState = fromJS({
    categoryList: []
})

export const actions = {
    fetchCategory: payload => ({ type: FETCH_CATEGORY_LIST, payload })
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_CATEGORY_LIST:
            return state.set('categoryList', action.data)
        default:
            return state
    }
}
