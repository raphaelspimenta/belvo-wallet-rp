import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = composeWithDevTools(applyMiddleware(sagaMiddleware))

const store = createStore(reducers, composeEnhancers)

sagaMiddleware.run(rootSaga)

export default store
