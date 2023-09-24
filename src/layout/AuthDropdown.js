import React, { useState } from 'react'

import {
    Dropdown,
    DropdownMenu,
    DropdownToggle,
    NavLink
} from 'reactstrap'
import AuthNav from './AuthNav'
// these imports will need to go to AuthNav instead since that's where the forms will be appearing
import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'

export default function AuthDropdown({ bsNavBtnClasses, navBtnStyle }) {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    // const [hasAccount, setHasAccount] = useState(false)
    const toggle = () => setDropdownOpen(!dropdownOpen)

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle nav caret
                className={bsNavBtnClasses}
                style={navBtnStyle}
                >
                Login / Register
            </DropdownToggle>
            <DropdownMenu className='bg-secondary border-dark'>
                <AuthNav />
            </DropdownMenu>
        </Dropdown>


    )
}
