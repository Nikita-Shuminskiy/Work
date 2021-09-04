

export type InitType = {
    isFetching:boolean
}
const initState:InitType = {
isFetching: false
}

export const loadingReducer = (state = initState, action: ActionType): InitType => { // fix any
    const stateCopy = {...state}
    switch (action.type) {
        case 'IS-FETCHING': {
            return{
                isFetching: action.fetching
            }
        }
        default: return state
    }
}
export type ActionType = ReturnType<typeof loadingAC >
export const loadingAC = (fetching:boolean) => ({type:'IS-FETCHING', fetching}) // fix any