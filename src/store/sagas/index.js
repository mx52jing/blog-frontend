import { fork } from 'redux-saga/effects'
import { articleListWatcher, articleContentWatcher } from './articleSaga'
import { categoryWatcher } from './category'

export default function* rootSaga() {
    yield fork(articleListWatcher)
    yield fork(articleContentWatcher)
    yield fork(categoryWatcher)
}
