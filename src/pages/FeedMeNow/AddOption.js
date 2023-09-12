import { Button, Form, Input, Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap'
import { useState } from 'react'

export function AddOption({
    choiceList,
    setAddingOption,
    options,
    setOptions, 
    setUnsavedChanges }) {

    const [addInput, setAddInput] = useState('')
    const handleInputChange = (e) => { 
        setAddInput(e.target.value)
        setUnsavedChanges(true)
    }
    // const toggleAddOptionForm = () => { setAddingOption(!addingOption) }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (addInput === '') return
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
            <Form onSubmit={handleSubmit} className='container-fluid'>
                {/* <div className='col col-10'> */}
                    <Input className='bg-secondary border-secondary'
                        style={{ height: 30 }}
                        label='Add Option'
                        name='newOption'
                        type='text'
                        value={addInput}
                        onChange={handleInputChange}
                    />
                    <span for='newOption'
                        className='text-secondary'
                        onClick={handleSubmit}
                        style={{fontSize: 18}}>
                        Add
                    </span>
                {/* </div> */}
                {/* <div className='col col-2'>
                    <Button className='text-dark'
                        style={{ fontSize: 9, marginLeft: -10, marginBottom: 5 }}>
                        Add
                    </Button>
                </div> */}
            </Form>
            {/* <Dropdown className='me-2'
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
            </Dropdown> */}
        </>
    )
}