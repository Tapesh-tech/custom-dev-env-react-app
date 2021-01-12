import { createStore, applyMiddleware, compose } from "redux";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import combinedReducers from "./reducers/index";

export default function configureStore(initialState) {
  const enhanceComposer =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    combinedReducers,
    initialState,
    enhanceComposer(applyMiddleware(reduxImmutableStateInvariant()))
  );
}
