import React, { ChangeEvent, useState } from 'react'
import Greeting from './Greeting'

type GreetingContainerPropsType = {
    users: any    // need to fix any
    addUserCallback: (name:string) => void// need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string | null>(null) // need to fix any

    const setNameCallback = (e:ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value) // need to fix
    }
    const addUser = () => {
       if (name.trim() !== ''){
           alert(`Hello  ! + ${name}`)
           addUserCallback(users)// need to fix
           setName('')
       } else {
         setError('error')
       }
    }

    const totalUsers =  users.length   // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            setError={setError}
            setName={setName}
        />
    )
}

export default GreetingContainer
