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
        <div style={{ width: 180, height: 40 }}>
            {!editingOption ?
                <li
                    className='text-black text-start text-nowrap'
                    onClick={() => setEditingOption(true)}><p>
                    <span className='m-1 btn btn-outline-secondary rounded' onClick={deleteOption} style={{ fontSize: 9, padding: 3, margin: 2 }}>
                        DEL
                    </span>
                    {name}
                    </p>
                </li> :
                <li className="bg-dark text-secondary">
                    <form onSubmit={handleSubmit}>
                        <input className='container-fluid bg-secondary'
                            value={name}
                            onChange={(e) => { setName(e.target.value) }} />
                    </form>
                </li>}
        </div>
    )
}