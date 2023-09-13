import { Form, Input } from 'reactstrap'
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
        setUnsavedChanges(true)
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
            </Form>
        </>
    )
}