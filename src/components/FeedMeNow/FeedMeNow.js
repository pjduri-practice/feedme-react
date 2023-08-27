// import { useState } from "react"
import { Option } from "./Option"
import Options from '../data/options.json'

export default function FeedMeNow({id}) {
    const options = Options.filter((o) => o.choiceListId == id)
    console.log(options)
    return (
        <>
        {options.map((o) => <Option key={o.id} option={o.name} />)}
        </>
    )
}