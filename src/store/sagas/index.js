import { fork } from 'redux-saga/effects'
import { articleListWatcher, articleContentWatcher } from './articleSaga'

export default function* rootSaga() {
    yield fork(articleListWatcher)
    yield fork(articleContentWatcher)
}
