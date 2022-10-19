import { createStore } from "redux";
import state from "./state";
import reducers from "./reducers";


export default store = createStore(reducers, state)