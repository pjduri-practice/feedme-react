import choiceListGroups from '../../../components/data/list-layouts.json'
import { AddList } from './AddList'
import { SelectLayout } from './SelectLayout'

export function Banner({
    bgGradient,
    listLayouts,
    setListLayouts,
    layoutId,
    setLayoutId,
    layoutName,
    choiceLists,
    setChoiceLists,
    nextId,
    setNextId }) {
    const mainClasses = 'container-fluid text-black bg-transparent'
    const dropdownClasses = 'd-flex flex-row justify-content-center'
    const bsTitleClasses = 
        'animate-character'

    return (
        <div className={mainClasses}
            style={{
                paddingTop: 75
            }}>
            <h1 className='fw-bolder'>
                <span className={bsTitleClasses}
                    // style={{ backgroundImage: bgGradient }}
                    >
                    {/* <span className='animate-character'> */}
                        FeedMe Now
                    {/* </span> */}
                </span>
            </h1>
            <div className={dropdownClasses}>
                <SelectLayout bgGradient={bgGradient}
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
                    layoutId={layoutId}
                    choiceLists={choiceLists}
                    setChoiceLists={setChoiceLists}
                    nextId={nextId}
                    setNextId={setNextId} />
            </div>
        </div>
    )
}