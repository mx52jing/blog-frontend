import { put, call, take } from 'redux-saga/effects'
import { fromJS } from 'immutable'
import { FETCH_START, FETCH_END, FETCH_CATEGORY_LIST, UPDATE_CATEGORY_LIST } from '../actions'
import { fetchCategory } from '@api/request'

function* fetchCategoryFn() {
    try {
        yield put({ type: FETCH_START })
        const res = yield call(fetchCategory),
            { result } = res
        return result
    }catch (e) {
        console.log(e);
        yield put({ type: FETCH_END })
    }finally {
        yield put({ type: FETCH_END })
    }
}

export function* categoryWatcher() {
    while(true) {
        const { payload } = yield take(FETCH_CATEGORY_LIST)
        const data = yield call(fetchCategoryFn, payload)
        if(!!data) {
            yield put({ type: UPDATE_CATEGORY_LIST, data: fromJS(data)})
        }
    }
}
