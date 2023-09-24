import choiceListGroups from '../../../data/list-layouts.json'
import { AddList } from './AddList'
import { SelectLayout } from './SelectLayout'

export function Banner({
    bgGradient,
    bsBtnClasses,
    listLayouts,
    setListLayouts,
    layoutId,
    setLayoutId,
    layoutName,
    choiceLists,
    setChoiceLists,
    nextId,
    setNextId }) {
    const mainClasses = 'container text-black bg-transparent pt-4 mt-5'
    const dropdownClasses = 'd-flex flex-row justify-content-center'
    const bsTitleClasses = 'animate-character fw-bolder fs-1'

    return (
        <div className={mainClasses}>
            <div className={bsTitleClasses}>
                        FeedMe Now
            </div>
            <div className={dropdownClasses}>
                <SelectLayout bsBtnClasses={bsBtnClasses}
                    bgGradient={bgGradient}
                    layoutName={layoutName}
                    setLayoutId={setLayoutId}
                    choiceLists={choiceLists}
                    setChoiceLists={setChoiceLists}
                    choiceListGroups={choiceListGroups}
                    listLayouts={listLayouts}
                    setListLayouts={setListLayouts}
                    nextId={nextId}
                    setNextId={setNextId} />
                <AddList bgGradient={bgGradient}
                    bsBtnClasses={bsBtnClasses}
                    layoutId={layoutId}
                    choiceLists={choiceLists}
                    setChoiceLists={setChoiceLists}
                    nextId={nextId}
                    setNextId={setNextId} />
            </div>
        </div>
    )
}