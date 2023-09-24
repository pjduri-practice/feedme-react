import React, { useState } from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem }
    from 'reactstrap'
import IGForm from '../../../components/IGForm'

export function SelectLayout({
    bgGradient,
    bsBtnClasses,
    layoutName,
    choiceLists,
    setChoiceLists,
    setLayoutId,
    listLayouts,
    setListLayouts,
    nextId,
    setNextId }) {

    // const bsLayoutInputClasses = 'bg-light bg-opacity-75 border-dark mb-2'
    const bsLayoutSelectItemClasses =
        'bg-secondary bg-opacity-50 border border-dark border-opacity-50 rounded text-black fw-bold'
    // const bsSelectToggleClasses =
    //     'fw-bold p-2 rounded bg-secondary bg-opacity-75 shadow-lg border border-dark'
    const bsButtonClasses =
        'fw-display bg-dark bg-opacity-75 text-secondary m-2 rounded border border-secondary'

    const [layoutInput, setLayoutInput] = useState('')
    const [dropdownOpen, setDropdownOpen] = useState(false)

    const toggle = () => setDropdownOpen(!dropdownOpen)
    const handleChange = e => {setLayoutInput(e.target.value)}

    const handleSelectLayout = (id) => {
        setLayoutId(id)
    }

    const deleteLayout = (id) => {
        const updatedLayouts = listLayouts.filter(l => l.id !== id)
        const updatedChoiceLists = choiceLists.filter(c => c.layout_id !== id)
        setLayoutId(listLayouts[0].id)
        setListLayouts(updatedLayouts)
        setChoiceLists(updatedChoiceLists)
    }

    const addLayout = () => {
        const newLayout = { 'id': nextId, 'name': layoutInput }
        setNextId(++nextId)
        setLayoutInput('')
        return newLayout
    }

    const handleAddLayout = e => {
        e.preventDefault()
        if (!layoutInput.trim()) return
        const newLayout = addLayout(layoutInput.trim())
        setLayoutId(newLayout.id)
        const updatedLayouts = [...listLayouts, newLayout]
        setListLayouts(updatedLayouts)
    }

    return (
        <Dropdown className='p-2 m-2'
            isOpen={dropdownOpen}
            toggle={toggle}>
            <DropdownToggle nav caret
                className={bsBtnClasses}
                style={{ backgroundImage: bgGradient }}>
                {layoutName}
            </DropdownToggle>
            <DropdownMenu className='bg-light bg-opacity-25 p-1'
                style={{ backgroundImage: bgGradient }}>
                {listLayouts.map(l =>
                    <div className='d-flex flex-row'>
                        <DropdownItem
                            key={l.id}
                            className={bsLayoutSelectItemClasses}
                            onClick={() => handleSelectLayout(l.id)}>
                            {l.name}
                        </DropdownItem>
                        <span className={bsButtonClasses}
                            >
                            EDIT
                        </span>
                        {listLayouts.length > 1 && <span className={bsButtonClasses}
                            onClick={() => deleteLayout(l.id)}
                            style={{ fontSize: 12, padding: 2 }}>
                            DEL
                        </span>}
                    </div>)
                }

                <IGForm bgGradient={bgGradient}
                    handleSubmit={handleAddLayout}
                    inputText={layoutInput}
                    handleBlur={handleChange}
                    handleChange={handleChange}
                    leftBtnTxt=''
                    rtBtn1Txt='Add' />

                {/* <Form onSubmit={handleAddLayout}>
                    <InputGroup className='p-1'>
                        <Input type='text'
                            style={{ height: 30 }}
                            className={bsLayoutInputClasses}
                            value={layoutInput}
                            placeholder='add'
                            onChange={(e) => setLayoutInput(e.target.value)} />
                        <InputGroupText for='newOption'
                            className='text-black fw-bold bg-dark 
                                bg-opacity-25 border-dark'
                            onClick={handleAddLayout}
                            style={{ fontSize: 18, height: 30 }}>
                            Add
                        </InputGroupText>
                    </InputGroup>
                </Form> */}
            </DropdownMenu>
        </Dropdown>
    )
}
