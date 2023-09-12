// import { Button } from 'reactstrap'
import { useState } from 'react'

export function Option({
    option,
    options,
    setOptions }) {
    const { id } = option
    const [name, setName] = useState(option.name)
    const [editingOption, setEditingOption] = useState(false)

    const deleteOption = () => {
        const updatedOptions = options.filter(o => o.id !== id)
        console.log(updatedOptions)
        setOptions(updatedOptions)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setEditingOption(false)
    }

    return (
        <>
            {!editingOption ? 
            <li style={{ height: 50 }} 
            className="bg-dark text-secondary"
            onClick={() => setEditingOption(true)}>
                {name}
                <span className='btn btn-outline-secondary rounded' onClick={deleteOption} style={{ fontSize: 9, padding: 3, margin: 2 }}>
                    DEL
                </span>
            </li> :
                <li className="bg-dark text-secondary">
                    <form onSubmit={handleSubmit}>
                        <input className='container-fluid bg-secondary'
                        value={name}
                        onChange={(e) => {setName(e.target.value)}}/>
                    </form>
                </li>}
        </>
    )
}