import React, { useState } from 'react'
import { Button, Form, Input, InputGroup, InputGroupText } from 'reactstrap'

export default function LayoutLabel({ layoutId, layoutName, setLayoutName,listLayouts, setListLayouts }) {

    const layoutNameClasses = 'text-black p-1 rounded bg-dark bg-opacity-25 shadow'
    const layoutLabelClasses =
        'd-sm-inline-flex flex-row justify-content-center bg-dark bg-opacity-25 rounded p-2 shadow-lg'
    const editButtonClasses =
        'btn-sm text-black fw-bold m-1 p-1 border border-dark bg-dark bg-opacity-50 shadow'

    const [editingLayoutName, setEditingLayoutName] = useState(false)
    const [newLayoutName, setNewLayoutName] = useState(layoutName)

    const editLayoutName = () => {
        const updatedLayouts = listLayouts.map((layout) =>
            layout.id === layoutId ? { 'id':layout.id, 'name': newLayoutName } : layout)
        setListLayouts(updatedLayouts)
    }

    const handleEditClick = () => {
        setEditingLayoutName(true)
        setNewLayoutName(layoutName)
    }

    const handleSubmitNewLayoutName = () => {
        if (!newLayoutName) {
            alert('Please give your new layout a name')
            return
        }
        setLayoutName(newLayoutName)
        editLayoutName()
        setNewLayoutName('')
        setEditingLayoutName(false)
    }

    return (
        <>
            {editingLayoutName ?
                <Form onSubmit={handleSubmitNewLayoutName}>
                    <InputGroup>
                        <Input autoFocus
                            className='bg-light bg-opacity-50 border-dark mb-2'
                            style={{ height: 30 }}
                            type='text'
                            value={newLayoutName}
                            placeholder='new name'
                            onChange={e => setNewLayoutName(e.target.value)}
                        />
                        <InputGroupText
                            className='text-black bg-secondary bg-opacity-50 border-dark'
                            onClick={handleSubmitNewLayoutName}
                            style={{ fontSize: 18, height: 30 }}>
                            DONE
                        </InputGroupText>
                    </InputGroup>
                </Form>
                :
                <div className={layoutLabelClasses}>
                    <h3 className={layoutNameClasses}>{layoutName}</h3>
                    <span onClick={handleEditClick}><Button
                        className={editButtonClasses}>EDIT</Button></span>
                </div>}
        </>
    )
}
