import { useState, useEffect } from 'react'
import ChoiceList from './ChoiceList'
import allChoiceLists from '../../components/data/choice-lists.json'
import { Banner } from './Banner'
import choiceListGroups from '../../components/data/list-layouts.json'

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
            <div className='row container-fluid' style={{ marginTop: 30 }}>
                <h3>{layoutName}</h3>
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