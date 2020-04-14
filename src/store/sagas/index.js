import { fork } from 'redux-saga/effects'
import { articleListWatcher } from './articleSaga'

export default function* rootSaga() {
    yield fork(articleListWatcher)
}
