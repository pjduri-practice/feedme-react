import React from 'react'
import { useState } from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Form, InputGroupText, InputGroup, Input }
    from 'reactstrap'

export function SelectLayout({
    choiceLists,
    setChoiceLists,
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

    const deleteLayout = (id) => {
        const updatedLayouts = listLayouts.filter(l => l.id !== id)
        const updatedChoiceLists = choiceLists.filter(c => c.layout_id !== id)
        setLayoutId(5)
        setListLayouts(updatedLayouts)
        setChoiceLists(updatedChoiceLists)
    }

    const handleAddLayout = e => {
        e.preventDefault()
        const newLayout = addLayout(layoutInput)
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
                        className='bg-secondary bg-opacity-75 border 
                            border-dark border-opacity-50 rounded text-black'>
                        <span onClick={() => handleSelectLayout(g.id)}>
                            {g.name}
                        </span>
                        {listLayouts.length > 1 && <span className='m-2 rounded border border-dark'
                            onClick={() => deleteLayout(g.id)}
                            style={{ fontSize: 12, padding: 2 }}>
                            DEL
                        </span>}
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
