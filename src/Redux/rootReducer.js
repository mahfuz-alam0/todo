import { combineReducers } from "redux";
import toDoReducer from "./todos/reducer";
import filterReducer from "./filters/reducer";

const rootReducer = combineReducers({
    todos: toDoReducer,
    filters: filterReducer
})

export default rootReducer;