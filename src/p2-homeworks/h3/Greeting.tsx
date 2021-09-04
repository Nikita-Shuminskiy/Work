import React, { ChangeEvent, ChangeEventHandler } from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e:ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: ()=> void // need to fix any
    error: string | null// need to fix any
    totalUsers: number // need to fix any
    setError:(error:string | null) => void
    setName: (name:string) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers,setError,setName} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : '' // need to fix with (?:)

    return (
        <div>
            <input value={name} onKeyPress={(e) => {
                    setError('')
                    if (e.charCode === 13){
                        addUser()
                    }
            }} onChange={setNameCallback} className={inputClass}/>
            <button onClick={addUser}>add</button>
            <span className={s.counter}>{totalUsers}</span>
             <div className={s.errorMessage}>{error}</div>
        </div>
    )
}

export default Greeting
