import { configureStore as reduxConfigureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import createSagaMiddleware, { SagaMiddleware } from "@redux-saga/core";
import { persistRootReducer } from "./root-reducer";
import { rootSaga } from "./root-saga";

function configureStore() {
  const sagaMiddleware: SagaMiddleware = createSagaMiddleware();

  //New middleware can be added here
  const middleware = [sagaMiddleware];

  const storeOptions = {
    reducer: persistRootReducer,
    middleware,
    devTools: process.env.ENV !== "production",
  };

  const store = reduxConfigureStore(storeOptions);

  const persistor = persistStore(store);

  //Run Sagas
  sagaMiddleware.run(rootSaga);

  return { store, persistor };
}

const { store } = configureStore();

export type RootState = ReturnType<typeof store.getState>;

export { configureStore };
