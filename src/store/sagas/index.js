import { fork } from 'redux-saga/effects'
import { articleListWatcher, articleContentWatcher } from './articleSaga'
import { categoryWatcher } from './categorySaga'
import { archivesWatcher } from './archivesSaga'

export default function* rootSaga() {
    yield fork(articleListWatcher)
    yield fork(articleContentWatcher)
    yield fork(categoryWatcher)
    yield fork(archivesWatcher)
}
