import React, { useState } from 'react'
import { Dropdown, DropdownMenu, DropdownToggle, Form, InputGroup, Input, InputGroupText } from 'reactstrap'
import IGForm from '../../../components/IGForm'

export function AddList({ 
    layoutId, 
    choiceLists, 
    setChoiceLists, 
    nextId, 
    setNextId, 
    bgGradient,
    bsBtnClasses }) {

    const bsAddBtnClasses = 'text-black fw-bold bg-light bg-opacity-50 border-dark'
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
        if (!addListInput.trim()) return
        const newList = addChoiceList(addListInput.trim())
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
            className={bsBtnClasses}
            style={{ backgroundImage: bgGradient}}>
                Add List
            </DropdownToggle>
            <DropdownMenu className='bg-secondary shadow pt-3 ps-1 pe-1 bg-opacity-50'
                 style={{ backgroundImage: bgGradient }}>
                    <IGForm bgGradient={bgGradient}
                        handleSubmit={handleSubmit}
                        inputText={addListInput}
                        handleBlur={()=>{return}}
                        handleChange={e => {setAddListInput(e.target.value)}}
                        leftBtnTxt=''
                        rtBtn1Txt='Add'
                        rtBtn2Txt='' />
                {/* <Form onSubmit={handleSubmit}>
                    <InputGroup className='shadow'>
                        <Input type='text'
                        style={{ height: 30 }}
                            className='bg-light bg-opacity-75 border-dark'
                            value={addListInput}
                            placeholder='add'
                            onChange={(e) => setAddListInput(e.target.value)} />
                        <InputGroupText
                            className={bsAddBtnClasses}
                            onClick={handleSubmit}
                            style={{ 
                                backgroundImage: bgGradient, 
                                fontSize: 18, 
                                height: 30 
                                }}>
                            Add
                        </InputGroupText>
                    </InputGroup>
                </Form> */}
            </DropdownMenu>
        </Dropdown>
    )
}
