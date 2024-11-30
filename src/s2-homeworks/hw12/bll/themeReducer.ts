import {homeWorkReducer} from "../../hw08/bll/homeWorkReducer";
type InitialState = typeof initState;

const initState = {
    themeId: 1,
}

export const themeReducer = (state: InitialState = initState, action: ActionType): InitialState => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            return {...state, themeId: action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number): any => ({ type: 'SET_THEME_ID', id }as const) // fix any


type ActionType = ReturnType<typeof changeThemeId>