import { useState, useEffect } from "react"
import { Option } from './Option'
import { AddOption } from './AddOption'
import allOptions from '../../../components/data/options.json'
import { Card, CardText, CardBody, CardTitle, Button, List } from 'reactstrap'

export default function ChoiceList({ choiceList }) {

    const [randomOption, setRandomOption] = useState(null)
    const [options, setOptions] =
        useState(allOptions.filter(o => o.choiceListId == choiceList.id))
    const [addingOption, setAddingOption] = useState(false)
    const [unsavedChanges, setUnsavedChanges] = useState(false)
    const getRandomIndex = () => Math.floor(Math.random() * options.length)
    const getRandomOption = () => { setRandomOption(options[getRandomIndex()]) }
    const clearRandomOption = () => { setRandomOption(null) }

    return (
        <div className='col col-3' >
            <Card color="secondary" className='shadow-lg bg-opacity-75 p-1'>
                <CardBody>
                    <CardTitle tag="h5">
                        {choiceList.name}
                        {unsavedChanges &&
                            <Button
                            className='text-black btn btn-sm bg-transparent' 
                            onClick={() => setUnsavedChanges(false)}>
                                Save Changes
                            </Button>}
                    </CardTitle>
                    <CardText className='bg-dark bg-opacity-75 rounded'>
                        <List type='unstyled'
                            className='overflow-auto'
                            style={{ height: 130 }} >
                            {options.map((o) =>
                                <Option key={o.id}
                                    option={o}
                                    setOptions={setOptions}
                                    options={options} />
                            )}
                        </List>
                        <AddOption choiceList={choiceList}
                            setAddingOption={setAddingOption}
                            addingOption={addingOption}
                            options={options}
                            setOptions={setOptions}
                            setUnsavedChanges={setUnsavedChanges}
                        />
                    </CardText>
                    <Button onClick={getRandomOption}
                        className='fs-6 text-black bg-dark bg-opacity-75'>
                        FeedMe Something!
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