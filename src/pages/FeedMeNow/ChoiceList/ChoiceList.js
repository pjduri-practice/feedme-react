import { useState } from "react"
import { Option } from './Option'
import { AddOption } from './AddOption'
import allOptions from '../../../components/data/options.json'
import {
    Card,
    CardText,
    CardBody,
    CardTitle,
    Button,
    List,
    Form,
    Input
} from 'reactstrap'

export default function ChoiceList({
    choiceLists,
    setChoiceLists,
    choiceList,
    nextId,
    setNextId }) {

    const { id } = choiceList
    const bsCardTitleClasses =
        'container border border-dark text-black bg-light' +
        ' bg-opacity-50 rounded-pill shadow-lg'
    const bsDelButtonClasses = 'btn btn-sm mt-3 bg-transparent text-black'
    const bgGradient =
        'linear-gradient(to top left, rgba(56, 253, 253, 0.2), ' +
        'rgba(10, 87, 87, 0.9))'
    const bsCardTextClasses =
        'bg-dark border border-dark bg-opacity-50 rounded shadow-lg p-1'

    const [randomOption, setRandomOption] = useState(null)
    const [options, setOptions] =
        useState(allOptions.filter(o => o.choiceListId === choiceList.id))
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
        <div className='col col-3 m-2' >
            <Card color='light'
                className='shadow-lg bg-opacity-75 p-1 border border-dark'
                style={{
                    backgroundImage: bgGradient
                }}>
                <CardBody>
                    <CardTitle tag='h5'
                        onClick={() => setEditingListName(true)}
                        className={bsCardTitleClasses}
                        style={{ backgroundImage: bgGradient }}>
                        {!editingListName ?
                            <>
                                {listName}
                                <span>
                                    <p onClick={deleteChoiceList}
                                        className={bsDelButtonClasses}>
                                        DEL
                                    </p>
                                </span>
                            </> :
                            <Form onSubmit={handleSubmit} onBlur={() => { setEditingListName(false) }}>
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
                    <CardText className={bsCardTextClasses}
                        style={{ backgroundImage: bgGradient }}>
                        <List type='unstyled'
                            className='overflow-auto'
                            style={{ height: 130 }} >
                            {options.map((o) =>
                                <Option key={o.id}
                                    option={o}
                                    setOptions={setOptions}
                                    options={options}
                                    bgGradient={bgGradient} />
                            )}
                        </List>
                        <AddOption bgGradient={bgGradient}
                            choiceList={choiceList}
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
                        className='fs-6 text-black bg-light bg-opacity-25 border-dark rounded-pill'
                        style={{ backgroundImage: bgGradient }}>
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