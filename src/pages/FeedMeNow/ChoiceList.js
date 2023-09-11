import { useState } from "react"
import { Option } from "./Option"
import allOptions from '../../components/data/options.json'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, List
} from "reactstrap"

export function ChoiceList({ choiceList }) {

    const [randomOption, setRandomOption] = useState(null)
    const options = allOptions.filter(o => o.choiceListId == choiceList.id)
    const getRandomIndex = () => Math.floor(Math.random() * options.length)
    const getRandomOption = () => { setRandomOption(options[getRandomIndex()]) }
    const clearRandomOption = () => { setRandomOption(null) }

    return (
        <div className='col col-3' >
            <Card color="secondary">
                <CardBody>
                    <CardTitle tag="h5">
                        {choiceList.name}
                    </CardTitle>
                    <CardText>
                        <List type='unstyled'>
                            {options.map((o) =>

                                <li style={{ height: 50 }} className="bg-dark text-secondary">
                                    <Option key={o.id} option={o.name} />
                                </li>

                            )}
                        </List>
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