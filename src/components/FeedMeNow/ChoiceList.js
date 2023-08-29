import { Option } from "./Option"
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from "reactstrap"


export function ChoiceList({ choiceList, options }) {
    return (
        <>
            <Card
                body
                color="secondary"
                inverse
                style={{
                    width: '18rem'
                }}
            >
                <CardBody>
                    <CardTitle tag="h5">
                        {choiceList.name}
                    </CardTitle>
                    <CardText>
                        {options.map((o) => <Option key={o.id} option={o.name} />)}
                    </CardText>
                    <Button>
                        Generate
                    </Button>
                </CardBody>
            </Card>
        </>
    )
}




{/* <CardSubtitle
className="mb-2 text-muted"
tag="h6"
>
Card subtitle
</CardSubtitle> */}