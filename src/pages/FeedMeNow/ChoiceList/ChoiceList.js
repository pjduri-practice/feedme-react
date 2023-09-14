import { useState, useEffect } from "react"
import { Option } from './Option'
import { AddOption } from './AddOption'
import allOptions from '../../../components/data/options.json'
import { Card, 
    CardText, 
    CardBody, 
    CardTitle, 
    Button, 
    List,
    Form,
    Input } from 'reactstrap'

export default function ChoiceList({
    choiceLists,
    setChoiceLists,
    choiceList,
    nextId,
    setNextId }) {

    const { id } = choiceList
    const cardTitleClasses =
        'container border border-dark text-black bg-dark bg-opacity-50 rounded shadow-lg'
    const delButtonClasses = 'btn btn-sm mt-3 bg-transparent text-black'

    const [randomOption, setRandomOption] = useState(null)
    const [options, setOptions] =
        useState(allOptions.filter(o => o.choiceListId == choiceList.id))
    const [addingOption, setAddingOption] = useState(false)
    const [editingListName, setEditingListName] = useState(false)
    const [listName, setListName] = useState(choiceList.name)
    // const [unsavedChanges, setUnsavedChanges] = useState(false)

    const getRandomIndex = () => Math.floor(Math.random() * options.length)
    const getRandomOption = () => { setRandomOption(options[getRandomIndex()]) }
    const clearRandomOption = () => { setRandomOption(null) }

    const deleteChoiceList = () => {
        const updatedChoiceLists = choiceLists.filter(c => c.id !== id)
        const updatedOptions = options.filter(o => o.choiceListId !== id)
        setOptions(updatedOptions)
        setChoiceLists(updatedChoiceLists)
    }

    const handleSubmit = e => {
        e.preventDefault()
        setEditingListName(false)
    }

    return (
        <div className='col col-3 m-1' >
            <Card color='secondary' className='shadow-lg bg-opacity-75 p-1'>
                <CardBody>
                    <CardTitle tag='h5' 
                    onClick={() => setEditingListName(true)}
                    className={cardTitleClasses}>
                        {!editingListName ?
                            <>
                                {listName}
                                <span>
                                    <p onClick={deleteChoiceList}
                                        className={delButtonClasses}>
                                        DEL
                                    </p>
                                </span>
                            </> :
                            <Form onSubmit={handleSubmit} onBlur={() => {setEditingListName(false)}}>
                                <Input autoFocus 
                                    className='container-fluid bg-light bg-opacity-50'
                                    value={listName}
                                    onChange={(e) => { setListName(e.target.value) }} />
                            </Form>
                        }

                        {/* {unsavedChanges &&
                            <Button
                            className='text-black btn btn-sm bg-transparent' 
                            onClick={() => setUnsavedChanges(false)}>
                                Save Changes
                            </Button>} */}
                    </CardTitle>
                    <CardText className='bg-dark border border-dark bg-opacity-75 rounded shadow-lg p-1'>
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
                            // setUnsavedChanges={setUnsavedChanges}
                            nextId={nextId}
                            setNextId={setNextId}
                        />
                    </CardText>
                    <Button onClick={getRandomOption}
                        className='fs-6 text-black bg-dark bg-opacity-75 border-dark'>
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