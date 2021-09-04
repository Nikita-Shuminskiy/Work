import React from 'react'
import Affair from './Affair'
import './Affairs.css';
import { AffairPriorityType, AffairType, FilterType } from './HW2'

type AffairsPropsType = { // need to fix any
    data: AffairType[]
    setFilter: (filter:FilterType) => void
    deleteAffairCallback: (_id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: any) => (
        <Affair  // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    } // need to fix
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    return (
        <div>

            {mappedAffairs}

            <button className={ props.filter === 'all' ? 'is-active' : ''} onClick={setAll}>All</button>
            <button className={ props.filter === 'high' ? 'is-active' : ''}onClick={setHigh}>High</button>
            <button className={ props.filter === 'middle' ? 'is-active' : ''}onClick={setMiddle}>Middle</button>
            <button className={ props.filter === 'low' ? 'is-active' : ''}onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs
