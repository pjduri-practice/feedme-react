import React from 'react'
import { useState } from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Form, InputGroupText, InputGroup, Input }
    from 'reactstrap'

export function SelectLayout({
    setLayoutId,
    listLayouts,
    setListLayouts,
    nextId,
    setNextId }) {

    const layoutInputClasses = 'bg-light bg-opacity-50 border-dark mb-2'

    const [layoutInput, setLayoutInput] = useState('')
    const [dropdownOpen, setDropdownOpen] = useState(false)

    const toggle = () => setDropdownOpen(!dropdownOpen)

    const handleSelectLayout = (id) => {
        setLayoutId(id)
    }

    const addLayout = () => {
        const newLayout = { 'id': nextId, 'name': layoutInput }
        setNextId(++nextId)
        setLayoutInput('')
        return newLayout
    }

    const handleAddLayout = e => {
        e.preventDefault()
        const newLayout = addLayout(layoutInput)
        console.log(newLayout)
        setLayoutId(newLayout.id)
        const updatedLayouts = [...listLayouts, newLayout]
        setListLayouts(updatedLayouts)
    }

    return (
        <Dropdown className='p-2 m-2'
            isOpen={dropdownOpen}
            toggle={toggle}>
            <DropdownToggle nav caret className='p-2 rounded bg-secondary bg-opacity-75 shadow-lg'>
                Select Layout
            </DropdownToggle>
            <DropdownMenu className='bg-dark bg-opacity-75 p-1'>
                {listLayouts.map(g =>
                    <DropdownItem
                        key={g.id}
                        className='bg-secondary bg-opacity-75 border border-dark border-opacity-50 rounded text-black'
                        onClick={() => handleSelectLayout(g.id)}>
                        {g.name}
                    </DropdownItem>)}
                <Form onSubmit={handleAddLayout}>
                    <InputGroup className='p-1'>
                        <Input type='text'
                            style={{ height: 30 }}
                            className={layoutInputClasses}
                            value={layoutInput}
                            placeholder='add'
                            onChange={(e) => setLayoutInput(e.target.value)} />
                        <InputGroupText for='newOption'
                            className='text-black bg-dark 
                                bg-opacity-50 border-dark'
                            onClick={handleAddLayout}
                            style={{ fontSize: 18, height: 30 }}>
                            Add
                        </InputGroupText>
                    </InputGroup>
                </Form>
            </DropdownMenu>
        </Dropdown>
    )
}
