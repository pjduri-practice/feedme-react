import React, { useState, onKeyPress } from 'react'
import { Dropdown, DropdownMenu, DropdownToggle, Form, InputGroup, Input } from 'reactstrap'

export function AddList({ layoutId, choiceLists, setChoiceLists, nextId, setNextId }) {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const toggle = () => { setDropdownOpen(!dropdownOpen) }
    const [addListInput, setAddListInput] = useState('')

    const addChoiceList = (name) => {
        console.log(name)
        const newChoiceList = { 'id': nextId, 'name': name, 'layout_id': layoutId }
        setNextId(nextId + 1)
        return newChoiceList
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (addListInput === '') {
            alert('Please give your new list a name')
            return
        }
        console.log(addListInput)
        const newList = addChoiceList(addListInput)
        const updatedChoiceLists = [...choiceLists, newList]
        setChoiceLists(updatedChoiceLists)
        setAddListInput('')
        toggle()
    }

    return (
        <Dropdown className='p-2 m-2'
            isOpen={dropdownOpen}
            toggle={toggle}>
            <DropdownToggle nav caret className=
                'p-2 rounded bg-secondary bg-opacity-75 shadow-lg'>
                Add List
            </DropdownToggle>
            <DropdownMenu className='bg-secondary p-2'>
                <Form onSubmit={handleSubmit}>
                    <InputGroup>
                        <Input type='text' 
                        value={addListInput}
                        onChange={(e) => setAddListInput(e.target.value)} />
                    </InputGroup>
                </Form>
            </DropdownMenu>
        </Dropdown>
    )
}
