import { Button, Form, Input, Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap'
import { useState } from 'react'

export function AddForm({ 
    choiceList, 
    setAddingOption, 
    addingOption, 
    options, 
    setOptions }) {

    const [addInput, setAddInput] = useState('')
    const handleInputChange = (e) => {setAddInput(e.target.value)}
    const toggleAddOptionForm = () => { setAddingOption(!addingOption) }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newOption = addOption(addInput)
        const updatedOptions = [...options, newOption]
        setOptions(updatedOptions)
        setAddInput('')
        setAddingOption(false)
    }

    const [nextId, setNextId] = useState(19)
    const addOption = (name) => {
        const choiceListId = choiceList.id
        const newOption = { 'id': nextId, 'name': name, 'choiceListId': choiceListId }
        setNextId(nextId + 1)
        return newOption
    }

    return (
        <>
            <Dropdown className='me-2'
                isOpen={addingOption}
                toggle={toggleAddOptionForm}>
                <DropdownToggle nav caret>
                    <small>Add</small>
                </DropdownToggle>
                <DropdownMenu positionFixed={true} className='bg-secondary'>
                    <Form onSubmit={handleSubmit}>
                        <Input
                            style={{ height: 30, width: 210, margin: 10 }}
                            label='Add Option'
                            name='newOption'
                            type='text'
                            onChange={handleInputChange}                        
                        />
                        <Button className='text-dark'><small>Submit</small></Button>
                    </Form>
                </DropdownMenu>
            </Dropdown>
        </>
    )
}