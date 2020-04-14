import { call, put, take } from 'redux-saga/effects'
import { fetchArticleList } from '@api/request'

import {
	FETCH_ARTICLE_LIST,
	FETCH_END,
	FETCH_START
} from '../actions'

function* fetchArticleListFn() {
	try {
		yield put({ type: FETCH_START })
		const res = yield call(fetchArticleList)
		console.log(res);
	}catch (e) {

	}finally {
		yield put({ type: FETCH_END })
	}
}

export function* articleListWatcher() {
	while (true) {
		yield take(FETCH_ARTICLE_LIST)
		const data = yield call(fetchArticleListFn)
		console.log(data);
	}
}
