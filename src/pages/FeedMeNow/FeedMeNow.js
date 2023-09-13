import { useState, useEffect } from 'react'
import ChoiceList from './ChoiceList'
import allChoiceLists from '../../components/data/choice-lists.json'
import { Banner } from './Banner'
import choiceListGroups from '../../components/data/list-layouts.json'

export default function FeedMeNow() {
    const [layoutId, setLayoutId] = useState(choiceListGroups[0].id)
    const [nextId, setNextId] = useState(19)
    const [choiceLists, setChoiceLists] = useState(([]))

    useEffect(() => {
        const updatedChoiceLists = allChoiceLists.filter(c => parseInt(c.layout_id) === parseInt(layoutId))
        setChoiceLists(updatedChoiceLists)
    }, [layoutId])

    return (
        <div className='container-fluid' >
            <Banner
                setLayoutId={setLayoutId}
                // setChoiceLists={setChoiceLists}
                nextId={nextId}
                setNextId={setNextId} />
            <div className='row container-fluid' style={{ marginTop: 30 }}>
                {choiceLists.map(c => <ChoiceList key={c.id} choiceList={c} setNextId={setNextId} nextId={nextId} />)}
            </div>
        </div>
    )
}