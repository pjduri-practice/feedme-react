import { useState } from "react"
import allOptions from '../../components/data/options.json'
import { ChoiceList } from "./ChoiceList"
import choiceLists from '../../components/data/choice-lists.json'

export default function FeedMeNow({ id }) {

    const options = allOptions.filter((o) => o.choiceListId == parseInt(id))
    const choiceList = choiceLists.find(c => c.id === parseInt(id))
    const [randomOption, setRandomOption] = useState(null)
    const getRandomIndex = () => Math.floor(Math.random() * options.length)
    const getRandomOption = () => { setRandomOption(options[getRandomIndex()]) }
    const clearRandomOption = () => { setRandomOption(null) }

    return (
        <>
            <ChoiceList key={choiceList.id}
                choiceList={choiceList}
                options={options}
                getRandomOption={getRandomOption}
                randomOption={randomOption}
                clearRandomOption={clearRandomOption} />
        </>
    )
}