import choiceListGroups from '../../components/data/list-layouts.json'
import { AddList } from './AddList'
import { SelectLayout } from './SelectLayout'

export function Banner({ setLayoutId }) {

    return (
        <div className=
            'container-fluid text-black bg-secondary bg-opacity-50 shadow-lg'
            style={{
                paddingTop: 120,
                // background: 'rgba(11, 79, 79, 0.6)'
            }}>
            <h1>FeedMe Now</h1>
            <div className=
                'd-flex flex-row justify-content-center'>
                <SelectLayout setLayoutId={setLayoutId}
                    choiceListGroups={choiceListGroups} />
                <AddList />
            </div>
        </div>
    )
}