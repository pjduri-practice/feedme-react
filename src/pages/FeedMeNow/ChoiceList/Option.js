import { Form, Input, InputGroup, InputGroupText } from 'reactstrap'
import { useState } from 'react'

export function Option({
    option,
    options,
    setOptions,
    bgGradient }) {
    const { id } = option
    const [optionName, setOptionName] = useState(option.name)
    const [editingOption, setEditingOption] = useState(false)

    const deleteOption = () => {
        const updatedOptions = options.filter(o => o.id !== id)
        setOptions(updatedOptions)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setEditingOption(false)
    }

    return (
        <div style={{ width: 180, height: 40 }}>
            {!editingOption ?
                <li
                    className='text-black text-start text-nowrap'
                    onClick={() => setEditingOption(true)}>
                    <p>
                        {options.length > 2 && <span className='m-1 btn btn-outline-danger rounded text-danger'
                            onClick={deleteOption}
                            style={{
                                fontSize: 9,
                                padding: 3,
                                margin: 2,
                                backgroundImage: bgGradient
                            }}>
                            DEL
                        </span>}
                        {optionName}
                    </p>
                </li> :
                <li className="bg-dark text-secondary rounded">
                    <Form onSubmit={handleSubmit}>
                        <InputGroup>
                            <Input autoFocus
                                type='text'
                                style={{ height: 30, fontSize: 18 }}
                                className='container-fluid'
                                value={optionName}
                                onBlur={() => setEditingOption(false)}
                                onChange={(e) => { setOptionName(e.target.value) }} />
                            <InputGroupText
                                className='text-black bg-light bg-opacity-25 border-dark'
                                style={{
                                    fontSize: 12,
                                    height: 30,
                                    backgroundImage: bgGradient
                                }}>
                                Done
                            </InputGroupText>
                        </InputGroup>
                    </Form>
                </li>}
        </div>
    )
}