import React, { useState } from 'react'
import { Dropdown, DropdownMenu, DropdownToggle, Form, InputGroup, Input } from 'reactstrap'

export function AddList() {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const toggle = () => { setDropdownOpen(!dropdownOpen) }

    return (
        <Dropdown className='p-2 m-2'
            isOpen={dropdownOpen}
            toggle={toggle}>
            <DropdownToggle nav caret className='p-2 rounded bg-secondary bg-opacity-75'>
                Add List
            </DropdownToggle>
            <DropdownMenu className='bg-secondary p-2'>
                <Form>
                    <InputGroup>
                        <Input />
                    </InputGroup>
                </Form>
            </DropdownMenu>
        </Dropdown>
    )
}
