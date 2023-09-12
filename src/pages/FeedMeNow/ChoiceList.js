import { useState, useRef, useEffect } from "react"
import { Option } from './Option'
import { AddForm } from './AddOption'
import allOptions from '../../components/data/options.json'
import {
    Card, CardText, CardBody,
    CardTitle, Button, List, Form, Input, Dropdown, DropdownToggle, DropdownMenu
} from 'reactstrap'

export function ChoiceList({ choiceList }) {

    const [randomOption, setRandomOption] = useState(null)
    const [options, setOptions] =
        useState(allOptions.filter(o => o.choiceListId == choiceList.id))
    const [addingOption, setAddingOption] = useState(false)
    const getRandomIndex = () => Math.floor(Math.random() * options.length)
    const getRandomOption = () => { setRandomOption(options[getRandomIndex()]) }
    const clearRandomOption = () => { setRandomOption(null) }

    return (
        <div className='col col-3' >
            <Card color="secondary" className="shadow-lg">
                <CardBody>
                    <CardTitle tag="h5">
                        {choiceList.name}
                    </CardTitle>
                    <CardText>
                        <List type='unstyled'>
                            {options.map((o) =>
                                <Option key={o.id} 
                                option={o} 
                                setOptions={setOptions}
                                options={options} />
                            )}
                        </List>
                        <AddForm choiceList={choiceList}
                            setAddingOption={setAddingOption}
                            addingOption={addingOption}
                            options={options}
                            setOptions={setOptions}
                        />
                    </CardText>
                    <Button onClick={getRandomOption} color='black'>
                        Generate
                    </Button>
                    {randomOption && <Button onClick={clearRandomOption} color='black'>Clear</Button>}
                </CardBody>
                {randomOption &&
                    <CardTitle color='black'>
                        <div>
                            <h5>{randomOption.name.toUpperCase()}</h5>
                            <p>FOR THE WIN!</p>
                        </div>
                    </CardTitle>}
            </Card>
        </div>
    )
}




{/* <CardSubtitle
className="mb-2 text-muted"
tag="h6"
>
Card subtitle
</CardSubtitle> */}