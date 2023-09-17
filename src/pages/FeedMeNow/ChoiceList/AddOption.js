import { Form, Input, InputGroup, InputGroupText } from 'reactstrap'
import { useState } from 'react'

export function AddOption({
    bgGradient,
    choiceList,
    setAddingOption,
    options,
    setOptions, 
    // setUnsavedChanges,
    nextId, 
    setNextId }) {

    const [addInput, setAddInput] = useState('')
    const handleInputChange = (e) => { 
        setAddInput(e.target.value)
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
        // setUnsavedChanges(true)
    }

    const addOption = (name) => {
        const choiceListId = choiceList.id
        const newOption = { 'id': nextId, 'name': name, 'choiceListId': choiceListId }
        setNextId(nextId + 1)
        return newOption
    }

    return (
        <>
            <Form onSubmit={handleSubmit} className='container-fluid'>
                <InputGroup>
                    <Input className='bg-light bg-opacity-75 border-dark mb-2'
                        style={{ height: 30, fontSize: 18 }}
                        label='Add Option'
                        type='text'
                        value={addInput}
                        onChange={handleInputChange}
                    />
                    <InputGroupText
                        className='p-1 text-black bg-secondary bg-opacity-25 border-dark'
                        onClick={handleSubmit}
                        style={{fontSize: 18,  height: 30, backgroundImage: bgGradient}}>
                        Add
                    </InputGroupText>
                    </InputGroup>
            </Form>
        </>
    )
}