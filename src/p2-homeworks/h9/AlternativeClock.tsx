import React, { useState, useEffect } from 'react';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

export function AlternativeClock() {
    const [date, setDate] = useState(new Date());
    let [timerId1, setTimerId] = useState<number>(0)
    const stop = () => {
        // stop
        clearInterval()
    }
    const start = () => {
         const id: number = +setInterval(() => {
             setDate(new Date());
         }, 1000)
    }


    const tick = () => {
        setDate(new Date());
    }

    return <div>
            <h1>Hello, world!</h1>
            <h2>It is {date.toLocaleTimeString()}.</h2>
        <SuperButton onClick={start}>start</SuperButton>
        <SuperButton onClick={stop}>stop</SuperButton>
        </div>

}