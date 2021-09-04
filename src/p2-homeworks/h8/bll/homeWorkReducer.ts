import { initialPeople, UserType } from '../HW8';

export type sortUpACType = ReturnType<typeof sortUpAC>
export type sortDownACType = ReturnType<typeof sortDownAC>
export type checkACType = ReturnType<typeof checkAC>
export type ActionType = sortUpACType | sortDownACType | checkACType
export const sortUpAC = () => ({type: 'sort-up', payload: 'up'} as const)
export const sortDownAC = () => ({type: 'sort-down', payload: 'down'} as const)
export const checkAC = () => ({type: 'check', payload: '18'} as const)


export const homeWorkReducer = (state = initialPeople, action: ActionType): UserType[] => { // need to fix any
    const stateCopy = state.map(a => a)
    switch (action.type) {
        case 'sort-up': {
            return stateCopy.sort((a, b) => a.name.localeCompare(b.name))
        }
        case 'sort-down': {
            return stateCopy.sort(function (a, b) {
                if (a.name < b.name) {
                    return 1;
                }
                if (a.name > b.name) {
                    return -1;
                }
                return 0;
            })
        }
        case 'check': {
            return stateCopy.filter((a, b) => a.age > 18 ? true : false)
        }
        default:
            return state
    }
}