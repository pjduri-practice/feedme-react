import { useState, useEffect } from 'react'
import ChoiceList from './ChoiceList'
import allChoiceLists from '../../components/data/choice-lists.json'
import { Banner } from './Banner'
import choiceListGroups from '../../components/data/list-layouts.json'
import { Button, Form, Input, InputGroup, InputGroupText } from 'reactstrap'

export default function FeedMeNow() {
    const [listLayouts, setListLayouts] = useState(choiceListGroups)
    const [layoutId, setLayoutId] = useState(listLayouts[0].id)
    const [nextId, setNextId] = useState(19)
    const [choiceLists, setChoiceLists] = useState(([]))
    const [layoutName, setLayoutName] = useState('')
    const [editingLayoutName, setEditingLayoutName] = useState(false)

    useEffect(() => {
        const updatedChoiceLists = allChoiceLists.filter(c => parseInt(c.layout_id) === parseInt(layoutId))
        setChoiceLists(updatedChoiceLists)
    }, [layoutId])

    useEffect(() => {
        setLayoutName(listLayouts.find(l => l.id === layoutId).name)
    }, [layoutId])

    const editLayoutName = (id, name) => {
        const updatedLayouts = listLayouts.map((layout) =>
            layout.id === id ? { ...layout, 'name': name } : layout)
        console.log(updatedLayouts)
        setListLayouts(updatedLayouts)
    }

    const handleEditClick = () => {
        setEditingLayoutName(true)
    }

    const handleSubmitNewLayoutName = (id) => {
        setEditingLayoutName(false)
        if (!layoutName) {
            alert('Please give your new layout a name')
            return
        }
        editLayoutName(id, layoutName)
    }

    return (
        <div className='container-fluid' >
            <Banner
                listLayouts={listLayouts}
                setListLayouts={setListLayouts}
                layoutId={layoutId}
                setLayoutId={setLayoutId}
                choiceLists={choiceLists}
                setChoiceLists={setChoiceLists}
                nextId={nextId}
                setNextId={setNextId} />
            <div className=
            'd-sm-inline-flex flex-row justify-content-center bg-dark bg-opacity-25 rounded p-2 shadow-lg'>
                <h3 className='text-black p-1 rounded bg-dark bg-opacity-25 shadow'>{layoutName}</h3>
                <span><Button handleClick={handleEditClick}
                className='btn-sm text-black fw-bold m-1 p-1 border border-dark bg-dark bg-opacity-50 shadow'>EDIT</Button></span>
            </div>
            <div className='row container-fluid' style={{ marginTop: 30 }}>
                {choiceLists.map(c => <ChoiceList key={c.id}
                    choiceList={c}
                    choiceLists={choiceLists}
                    setChoiceLists={setChoiceLists}
                    setNextId={setNextId}
                    nextId={nextId} />)}
            </div>
        </div>
    )
}