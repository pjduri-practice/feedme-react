// import { useState } from "react"
import { Option } from "./Option"
import allOptions from '../data/options.json'
import { ChoiceList } from "./ChoiceList"
import choiceLists from '../data/choice-lists.json'

export default function FeedMeNow({id}) {
    const options = allOptions.filter((o) => o.choiceListId == parseInt(id))
    const choiceList = choiceLists.find(c => c.id === parseInt(id))
    return (
        <>
        <ChoiceList key={choiceList.id} choiceList={choiceList} options={options} />
        {/* {options.map((o) => <Option key={o.id} option={o.name} />)} */}
        </>
    )
}