import React from 'react'
import { NavLink } from 'react-router-dom'
import ExampleCss from './Menu-Hamburger'
import s from './pages/Heade.module.css'

function Header() {
    return (
        <div className={s.Header} >
            <ExampleCss/>
        </div>
    )
}

export default Header
