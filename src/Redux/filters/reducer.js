import { COLORCHANGED, STATUSCHANGED } from "./actionTypes";
import { initialState } from "./initialState";


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case STATUSCHANGED:
            console.log(action.payload.status)
            return {
                ...state,
                status: action.payload.status
            }

        case COLORCHANGED:
            const { color, changeType } = action.payload;
            const { colors } = state;
            
            switch (changeType) {
                case "added":
                    return {
                        ...state,
                        colors: [...colors, color]
                    }
                case "removed":
                    return {
                        ...state,
                        colors: colors.filter(
                            (existingColor) => existingColor !== color
                        )
                    }
                default:
                    return state;
            }
        default:
            return state
    }
}

export default reducer;