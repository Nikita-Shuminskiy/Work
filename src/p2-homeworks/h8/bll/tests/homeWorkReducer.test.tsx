import React from 'react'
import { checkAC, homeWorkReducer, sortDownAC, sortUpAC } from '../homeWorkReducer'

let initialState: any[] // need to fix any

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66}, //1
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},  //2
        {_id: 4, name: 'Дмитрий', age: 40}, // 3
        {_id: 5, name: 'Ирина', age: 55}, // 4
    ]
})

test('sort name up', () => {
    const action = sortUpAC()
    const newState = homeWorkReducer(initialState, action)

    expect(newState[0].name).toBe('Александр')
    expect(newState[0]._id).toBe(1)
})
test('sort name down', () => {
    const action = sortDownAC()
    const newState = homeWorkReducer(initialState, action)
    expect(newState[5].name).toBe('Александр')
    expect(newState[5]._id).toBe(1)

})
test('check age 18', () => {
    const action = checkAC()
    const newState = homeWorkReducer(initialState, action)
    expect(newState[0].name).toBe('Александр')
    expect(newState[0].age).toBe(66)

})
