import { useState } from 'react'
import IGForm from '../../../components/IGForm'

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

    const handleChange = (e) => { setOptionName(e.target.value) }

    const handleSubmit = (e) => {
        e.preventDefault()
        option.name = optionName
        setEditingOption(false)
    }

    return (
        <div style={{ width: 180, height: 40 }}>
            {!editingOption ?
                <li
                    className='text-black text-start text-nowrap'
                    onClick={() => setEditingOption(true)}>
                    <div className='container-fluid'
                        style={{
                            width: 300
                        }}>
                        {options.length > 2 && <span className='btn btn-outline-danger rounded p-1 text-danger shadow'
                            onClick={deleteOption}
                            style={{
                                fontSize: 9,
                                padding: 3,
                                marginTop: 3,
                                marginLeft: -15,
                                marginRight:5,
                                backgroundImage: bgGradient
                            }}>
                            DEL
                        </span>}
                        <span className='text-black pt-1 pb-1 ps-2 pe-5 fw-bold rounded-pill shadow bg-light bg-opacity-75'
                            style={{
                                fontSize: 16,
                                backgroundImage: bgGradient
                            }}>
                            {optionName}
                        </span>
                    </div>
                </li> :
                <li className="bg-transparent text-secondary rounded"
                    style={{ width: 300 }}>
                    <IGForm bgGradient={bgGradient}
                        handleSubmit={handleSubmit}
                        inputText={optionName}
                        handleBlur={handleSubmit}
                        handleChange={handleChange}
                        leftBtnTxt=''
                        rtBtn1Txt='Done'
                        rtBtn2Txt={''} />
                </li>}
        </div>
    )
}