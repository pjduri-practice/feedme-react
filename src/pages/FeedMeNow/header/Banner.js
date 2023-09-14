import choiceListGroups from '../../../components/data/list-layouts.json'
import { AddList } from './AddList'
import { SelectLayout } from './SelectLayout'

export function Banner({
    listLayouts,
    setListLayouts,
    layoutId,
    setLayoutId,
    choiceLists,
    setChoiceLists,
    nextId,
    setNextId }) {
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
                    choiceLists={choiceLists}
                    setChoiceLists={setChoiceLists}
                    choiceListGroups={choiceListGroups}
                    listLayouts={listLayouts}
                    setListLayouts={setListLayouts}
                    nextId={nextId}
                    setNextId={setNextId} />
                <AddList layoutId={layoutId}
                    choiceLists={choiceLists}
                    setChoiceLists={setChoiceLists}
                    nextId={nextId}
                    setNextId={setNextId} />
            </div>
        </div>
    )
}