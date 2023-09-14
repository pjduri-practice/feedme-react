import { Form, Input } from 'reactstrap'
import { useState } from 'react'

export function Option({
    option,
    options,
    setOptions }) {
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
                    onClick={() => setEditingOption(true)}><p>
                        {options.length > 2 && <span className='m-1 btn btn-outline-secondary rounded' onClick={deleteOption} style={{ fontSize: 9, padding: 3, margin: 2 }}>
                            DEL
                        </span>}
                        {optionName}
                    </p>
                </li> :
                <li className="bg-dark text-secondary">
                    <Form onSubmit={handleSubmit}>
                        <Input autoFocus
                            className='container-fluid bg-secondary'
                            value={optionName}
                            onBlur={() => setEditingOption(false)}
                            onChange={(e) => { setOptionName(e.target.value) }} />
                    </Form>
                </li>}
        </div>
    )
}