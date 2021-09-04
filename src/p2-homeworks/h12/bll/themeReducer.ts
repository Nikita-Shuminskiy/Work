const initState:initStateType = {
    theme: 'dark'
};
export type initStateType = {
    theme:string
}

export const themeReducer = (state = initState, action: ActionType):initStateType => { // fix any
    switch (action.type) {
        case 'COLOR-CHANGE':
            return {...state, theme: action.value}
        default:
            return state;
    }
};

export const changeThemeC = (value: string) => ({type: 'COLOR-CHANGE', value } )




export type ActionType = ReturnType<typeof changeThemeC>