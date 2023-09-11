import { ChoiceList } from './ChoiceList'
import allChoiceLists from '../../components/data/choice-lists.json'

export default function FeedMeNow({ id }) {
    const choiceLists = allChoiceLists.filter(c => parseInt(c.layout_id) === parseInt(id))
    console.log(choiceLists)
    return (
        <div className='row' style={{marginTop: 85}}>
            {choiceLists.map(c => <ChoiceList key={c.id} choiceList={c}/>)}
        </div>
    )
}