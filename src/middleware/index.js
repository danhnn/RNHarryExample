import { compose, createStore, applyMiddleware } from "redux"
import reducers from "./reducers"
import rootSaga from "./sagas"
import React from "react"
import { Provider } from "react-redux"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import createSagaMiddleware from "redux-saga"
import thunk from "redux-thunk"
import { PersistGate } from "redux-persist/integration/react"
import { reactNavigationMiddleware } from "@navigator"
import { composeWithDevTools } from "redux-devtools-extension"

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"]
}

const persistedReducer = persistReducer(persistConfig, reducers)
const sagaMiddleware = createSagaMiddleware()

// Store
export const store = createStore(
  persistedReducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware, reactNavigationMiddleware, thunk)
  )
)

const persistor = persistStore(store)
sagaMiddleware.run(rootSaga)

const Store = props => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {props.children}
      </PersistGate>
    </Provider>
  )
}

export default Store
