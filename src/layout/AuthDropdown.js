import React, { useState } from 'react'
import {
    Dropdown,
    DropdownMenu,
    DropdownToggle
} from 'reactstrap'
import AuthNav from './AuthNav'
// these imports will need to go to AuthNav instead since that's where the forms will be appearing
import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'

export default function AuthDropdown({ bgGradient }) {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    // const [hasAccount, setHasAccount] = useState(false)
    const toggle = () => setDropdownOpen(!dropdownOpen)
    const bsAuthToggleClasses =
        'ms-3 p-1 rounded-pill bg-light bg-opacity-50 shadow-lg border border-dark text-black'

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle nav caret
                className={bsAuthToggleClasses}
                style={{
                    backgroundImage: bgGradient,
                    fontSize: 18
                }}>
                Login / Register
            </DropdownToggle>
            <DropdownMenu>
                <AuthNav />
            </DropdownMenu>
        </Dropdown>


    )
}
