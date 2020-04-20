import { call, put, take } from 'redux-saga/effects'
import { Map } from 'immutable'
import { fetchArticleList, fetchArticleContent } from '@api/request'

import {
    FETCH_ARTICLE_DATA,
    FETCH_END,
    FETCH_START,
    UPDATE_ARTICLE_DATA,
	FETCH_ARTICLE_CONTENT,
	UPDATE_ARTICLE_CONTENT
} from '../actions'

function* fetchArticleListFn(payload) {
    try {
        yield put({ type: FETCH_START })
        const res = yield call(fetchArticleList, payload),
            { result } = res
        return result
    } catch (e) {
        console.log(e);
    } finally {
        yield put({ type: FETCH_END })
    }
}

export function* articleListWatcher() {
    while (true) {
        const { payload } = yield take(FETCH_ARTICLE_DATA)
        const data = yield call(fetchArticleListFn, payload)
        if (!!data) {
            yield put({ type: UPDATE_ARTICLE_DATA, data: Map(data) })
        }
    }
}

function* fetchArticleContentFn(id) {
	try {
		yield put({ type: FETCH_START })
		const res = yield call(fetchArticleContent, id),
			{ result } = res
		return result
	} catch (e) {
		console.log(e);
	} finally {
		yield put({ type: FETCH_END })
	}
}

export function* articleContentWatcher() {
	while (true) {
		const { id } = yield take(FETCH_ARTICLE_CONTENT)
		const data = yield call(fetchArticleContentFn, id)
		if (!!data) {
			yield put({ type: UPDATE_ARTICLE_CONTENT, data: Map(data) })
		}
	}
}
