import choiceListGroups from '../../components/data/list-layouts.json'
import { AddList } from './AddList'
import { SelectLayout } from './SelectLayout'

export function Banner({ setLayoutId }) {
    const mainClasses =
        'container-fluid text-black bg-transparent'
    const dropdownClasses = 'd-flex flex-row justify-content-center'

    return (
        <div className={mainClasses}
            style={{
                paddingTop: 120
            }}>
            <h1>FeedMe Now</h1>
            <div className={dropdownClasses}>
                <SelectLayout setLayoutId={setLayoutId}
                    choiceListGroups={choiceListGroups} />
                <AddList />
            </div>
        </div>
    )
}