import React, { useState } from 'react'
import { Dropdown, DropdownMenu, DropdownToggle, Form, InputGroup, Input, InputGroupText } from 'reactstrap'

export function AddList({ 
    layoutId, 
    choiceLists, 
    setChoiceLists, 
    nextId, 
    setNextId, 
    bgGradient }) {

    const bsAddBtnClasses = 'text-black fw-bold bg-dark bg-opacity-50 border-dark'
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const toggle = () => { setDropdownOpen(!dropdownOpen) }
    const [addListInput, setAddListInput] = useState('')

    const addChoiceList = (name) => {
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
            <DropdownToggle nav caret 
            className='fw-bold p-2 rounded bg-secondary bg-opacity-75 shadow-lg border border-dark'
            style={{ backgroundImage: bgGradient}}>
                Add List
            </DropdownToggle>
            <DropdownMenu className='bg-dark p-2 bg-opacity-75'
                 style={{ backgroundImage: bgGradient }}>
                <Form onSubmit={handleSubmit}>
                    <InputGroup>
                        <Input type='text'
                        style={{ height: 30 }}
                            className='bg-light bg-opacity-25 border-dark'
                            value={addListInput}
                            placeholder='add'
                            onChange={(e) => setAddListInput(e.target.value)} />
                        <InputGroupText
                            className={bsAddBtnClasses}
                            onClick={handleSubmit}
                            style={{ fontSize: 18, height: 30 }}>
                            Add
                        </InputGroupText>
                    </InputGroup>
                </Form>
            </DropdownMenu>
        </Dropdown>
    )
}
