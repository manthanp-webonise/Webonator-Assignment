import todoReducers from "./todoReducers";

import { combineReducers } from "redux";

const allreducers = combineReducers({todoReducers })

export default allreducers;