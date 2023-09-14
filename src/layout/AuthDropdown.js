import React, { useState } from 'react'
import {
    Dropdown,
    DropdownMenu,
    DropdownToggle
} from 'reactstrap'
import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'

export default function AuthDropdown() {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [hasAccount, setHasAccount] = useState(false)
    const toggle = () => setDropdownOpen(!dropdownOpen)
    
    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle nav caret className='m-2 p-1 rounded bg-secondary bg-opacity-75 shadow-lg'>
                Login / Register
            </DropdownToggle>
            <DropdownMenu>
                {/* <AuthNav /> */}
                {hasAccount ? <LoginForm /> : <RegisterForm />}

            </DropdownMenu>
        </Dropdown>
        

    )
}
