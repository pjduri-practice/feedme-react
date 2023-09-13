import ChoiceList from './ChoiceList'
import allChoiceLists from '../../components/data/choice-lists.json'

export default function FeedMeNow({ id }) {
    const choiceLists = allChoiceLists.filter(c => parseInt(c.layout_id) === parseInt(id))
    return (
        <div className='container-fluid' >
            {/* <Banner setLayoutId={setLayoutId}/> */}
            <div className='row container-fluid' style={{ marginTop: 30 }}>
                {choiceLists.map(c => <ChoiceList key={c.id} choiceList={c} />)}
            </div>
        </div>
    )
}