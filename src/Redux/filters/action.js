import { COLORCHANGED } from "./actionTypes"


export const statusChanged = (status) => {
    return {
        type: COLORCHANGED,
        payload: { status }
    }
}

export const colorChanged = (color, changeType) => {
    return {
        type: COLORCHANGED,
        payload: { color, changeType }
    }
}