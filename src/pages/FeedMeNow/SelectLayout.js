import React from 'react'
import { useState } from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem }
    from 'reactstrap'

export function SelectLayout({ choiceListGroups, setLayoutId }) {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const toggle = () => setDropdownOpen(!dropdownOpen)

    return (
        <Dropdown className='p-2 m-2'
            isOpen={dropdownOpen}
            toggle={toggle}>
            <DropdownToggle nav caret className='p-2 rounded bg-secondary bg-opacity-75 shadow-lg'>
                Select Layout
            </DropdownToggle>
            <DropdownMenu className='bg-secondary'>
                {choiceListGroups.map(g =>
                    <DropdownItem
                        key={g.id}
                        className='text-dark bg-secondary'
                        onClick={() => setLayoutId(g.id)}>
                        {g.name}
                    </DropdownItem>)}
            </DropdownMenu>
        </Dropdown>
    )
}
