import React from 'react'
import { useState } from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem }
    from 'reactstrap'
// import allChoiceLists from '../../components/data/choice-lists.json'

export function SelectLayout({ choiceListGroups, setLayoutId, setChoiceLists }) {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const toggle = () => setDropdownOpen(!dropdownOpen)

    const handleSelectLayout = (id) => { 
        // setChoiceLists(allChoiceLists.filter(c => parseInt(c.id) === parseInt(id)))
        setLayoutId(id)
    }

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
                        onClick={() => handleSelectLayout(g.id)}>
                        {g.name}
                    </DropdownItem>)}
            </DropdownMenu>
        </Dropdown>
    )
}
