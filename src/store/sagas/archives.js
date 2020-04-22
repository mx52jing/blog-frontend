import { put, call, take } from 'redux-saga/effects'
import { fromJS } from 'immutable'
import { FETCH_START, FETCH_END, FETCH_ARCHIVES, UPDATE_ARCHIVES } from '../actions'
import { fetchArchives } from '@api/request'

function* fetchArchivesFn() {
	try {
		yield put({ type: FETCH_START })
		const res = yield call(fetchArchives),
			{ result } = res
		return result
	}catch (e) {
		console.log(e);
		yield put({ type: FETCH_END })
	}finally {
		yield put({ type: FETCH_END })
	}
}

export function* archivesWatcher() {
	while(true) {
		const { payload } = yield take(FETCH_ARCHIVES)
		const data = yield call(fetchArchivesFn, payload)
		if(!!data) {
			yield put({ type: UPDATE_ARCHIVES, data: fromJS(data)})
		}
	}
}
