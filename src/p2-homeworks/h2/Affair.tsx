import React from 'react'
import { AffairType } from './HW2';
import './Affairs.css';

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}// need to fix

    return (
        <div >
            <span className={'names'}>{props.affair.name}</span>
            <button onClick={deleteCallback}>X</button>
            <span className={'prioritet'}> {props.affair.priority}</span>
        </div>
    )
}

export default Affair
