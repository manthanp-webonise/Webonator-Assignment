import { createStore } from "redux";

import allreducers from "./reducers/index";

const store = createStore(allreducers);

export default store;