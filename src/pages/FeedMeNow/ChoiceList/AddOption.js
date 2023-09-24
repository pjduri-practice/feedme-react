import { Form, Input, InputGroup, InputGroupText } from 'reactstrap'
import { useState } from 'react'
import IGForm from '../../../components/IGForm'

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
        if (!addInput.trim()) return
        const newOption = addOption(addInput.trim())
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
            <IGForm bgGradient={bgGradient}
                handleSubmit={handleSubmit}
                inputText={addInput}
                handleBlur={handleInputChange}
                handleChange={handleInputChange}
                leftBtnTxt=''
                rtBtn1Txt='Add'
                rtBtn2Txt='' />
        </>
    )
}