import {
    ADDED, ALLCOMPLETE,
    CLEARCOMPLETE,
    COLORSELECTED,
    DELETED,
    TOGGLED
} from "./actionTypes";
import { initialState } from "./initialState";

const nexToDoId = (todos) => {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
    return maxId + 1;
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDED:
            return [
                ...state,
                {
                    id: nexToDoId(state)
                }
            ];

        case TOGGLED:
            return state.map(todo => {
                if (todo.id !== action.payload) {
                    return todo;
                }
                return {
                    ...todo,
                    completed: !todo.completed
                }
            });

        case COLORSELECTED:
            const { todoId, color } = action.payload;
            return state.map((todo) => {
                if (todo.id !== todoId) {
                    return todo;
                }
                return {
                    ...todo,
                    color
                }
            })

        case DELETED:
            return state.filter(todo => todo.id !== action.payload);

        case ALLCOMPLETE:
            return state.map(todo => {
                return {
                    ...todo,
                    completed: true
                }
            });

        case CLEARCOMPLETE:
            return state.filter(todo => !todo.completed)
        default:
            return state
    }
}

export default reducer;