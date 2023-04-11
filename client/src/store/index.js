import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "../reducer";
import { composeWithDevTooLs } from "redux-devtools-extension";
import { thunk } from "redux-thunk";

const store = createStore(
    rootReducer,
    composeWithDevTooLs(applyMiddleware(thunk))

);

export default store;