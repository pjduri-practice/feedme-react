import { useState, useEffect } from 'react'
import ChoiceList from './ChoiceList'
import allChoiceLists from '../../data/choice-lists.json'
import { Banner } from './header/Banner'
import choiceListGroups from '../../data/list-layouts.json'
// import { Button, Form, Input, InputGroup, InputGroupText } from 'reactstrap'

export default function FeedMeNow({ bgGradient, bsBtnClasses }) {
    const [listLayouts, setListLayouts] = useState(choiceListGroups)
    const [layoutId, setLayoutId] = useState(listLayouts[0].id)
    const [nextId, setNextId] = useState(19)
    const [choiceLists, setChoiceLists] = useState(([]))
    const [layoutName, setLayoutName] = useState('')

    useEffect(() => {
        const updatedChoiceLists = allChoiceLists.filter(c => parseInt(c.layout_id) === parseInt(layoutId))
        setChoiceLists(updatedChoiceLists)
    }, [layoutId])

    useEffect(() => {
        setLayoutName(listLayouts.find(l => l.id === layoutId).name)
    }, [layoutId, listLayouts])

    return (
        <div className='container-fluid' >
            <Banner
                bsBtnClasses={bsBtnClasses}
                bgGradient={bgGradient}
                listLayouts={listLayouts}
                setListLayouts={setListLayouts}
                layoutId={layoutId}
                layoutName={layoutName}
                setLayoutName={setLayoutName}
                setLayoutId={setLayoutId}
                choiceLists={choiceLists}
                setChoiceLists={setChoiceLists}
                nextId={nextId}
                setNextId={setNextId} />

            <div className='d-flex flex-row container-fluid' style={{ marginTop: 30 }}>
                {choiceLists.map(c => <ChoiceList key={c.id}
                    bsBtnClasses={bsBtnClasses}
                    bgGradient={bgGradient}
                    choiceList={c}
                    choiceLists={choiceLists}
                    setChoiceLists={setChoiceLists}
                    setNextId={setNextId}
                    nextId={nextId} />)}
            </div>
        </div>
    )
}