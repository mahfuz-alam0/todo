import { combineReducers } from "redux";
import toDoReducer from "./todos/reducer";
import filterReducer from "./filters/reducer";

const rootReducer = combineReducers({
    todos: toDoReducer,
    filter: filterReducer
})

export default rootReducer;