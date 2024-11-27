type InitialState = typeof initState

const initState = {
    isLoading: false,
}

export const loadingReducer = (state: InitialState = initState, action: ActionType): InitialState => { // fix any
    switch (action.type) {// пишет студент  // need to fix
        case "CHANGE_LOADING":
            return state

        default:
            return state
    }
}


export const loadingAC = (isLoading: boolean) => ({
    type: 'CHANGE_LOADING',
    isLoading,
})

type LoadingActionType = ReturnType<typeof loadingAC>
type ActionType = LoadingActionType

// type ActionType = {
//     type: 'CHANGE_LOADING'
//     isLoading: boolean
// }
