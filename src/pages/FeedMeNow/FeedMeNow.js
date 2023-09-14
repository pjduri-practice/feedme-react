import { useState, useEffect } from 'react'
import ChoiceList from './ChoiceList'
import allChoiceLists from '../../components/data/choice-lists.json'
import { Banner } from './header/Banner'
import choiceListGroups from '../../components/data/list-layouts.json'
// import { Button, Form, Input, InputGroup, InputGroupText } from 'reactstrap'
import LayoutLabel from './header/LayoutLabel'

export default function FeedMeNow() {
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
    }, [layoutId])

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
            <LayoutLabel layoutId={layoutId}
                layoutName={layoutName}
                setLayoutName={setLayoutName}
                listLayouts={listLayouts}
                setListLayouts={setListLayouts}/>
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