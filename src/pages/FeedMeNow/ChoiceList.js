import { useState } from "react"
import { Option } from "./Option"
import allOptions from '../../components/data/options.json'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, ListGroup, ListGroupItem
} from "reactstrap"

export function ChoiceList({ choiceList }) {

    const [randomOption, setRandomOption] = useState(null)
    const options = allOptions.filter(o => o.choiceListId == choiceList.id)
    const getRandomIndex = () => Math.floor(Math.random() * options.length)
    const getRandomOption = () => { setRandomOption(options[getRandomIndex()]) }
    const clearRandomOption = () => { setRandomOption(null) }

    return (
        <div className='col col-3' >
            <Card
                body
                color="secondary"
                inverse
                // style={{
                //     width: '18rem'
                // }}
            >
                <CardBody>
                    <CardTitle tag="h5">
                        {choiceList.name}
                    </CardTitle>
                    <CardText>
                        {options.map((o) =>
                            <ListGroup>
                                <ListGroupItem className="bg-dark text-secondary">
                                    <Option key={o.id} option={o.name} />
                                </ListGroupItem>
                            </ListGroup>
                        )}
                    </CardText>
                    <Button onClick={getRandomOption} >
                        Generate
                    </Button>
                    {randomOption && <Button onClick={clearRandomOption} >Clear</Button>}
                </CardBody>
                {randomOption && <CardTitle>{randomOption.name}</CardTitle>}
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