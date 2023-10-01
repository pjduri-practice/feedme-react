import { useState } from "react"
import { Option } from './Option'
import { AddOption } from './AddOption'
import allOptions from '../../../data/options.json'
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
import DeleteButton from "../../../components/DeleteButton"
import ClickToEdit from "../../../components/ClickToEdit"
import IGForm from "../../../components/IGForm"

export default function ChoiceList({
    bsBtnClasses,
    bgGradient,
    choiceLists,
    setChoiceLists,
    choiceList,
    nextId,
    setNextId }) {

    const { id } = choiceList
    // const bsCardTitleClasses =
    //     'container text-black bg-transparent rounded-pill'
    // const bsDelButtonClasses = 'btn btn-sm mt-3 bg-transparent text-black'
    const bsCardTextClasses =
        'bg-dark border border-dark bg-opacity-50 rounded shadow-lg pt-2 pb-2 ps-1 pe-1'

    const [randomOption, setRandomOption] = useState(null)
    const [options, setOptions] =
        useState(allOptions.filter(o => o.choiceListId === choiceList.id))
    const [addingOption, setAddingOption] = useState(false)
    const [editingListName, setEditingListName] = useState(false)
    const [listName, setListName] = useState(choiceList.name)
    // const [unsavedChanges, setUnsavedChanges] = useState(false)

    const getRandomIndex = () => Math.floor(Math.random() * options.length)
    const getRandomOption = () => { 
        options.length < 2 ? alert('You will need at least two options to pick a random one') : setRandomOption(options[getRandomIndex()]) 
    }
    const clearRandomOption = () => { setRandomOption(null) }
    const handleChange = e => { setListName(e.target.value) }

    const deleteChoiceList = () => {
        const updatedChoiceLists = choiceLists.filter(c => c.id !== id)
        const updatedOptions = options.filter(o => o.choiceListId !== id)
        setOptions(updatedOptions)
        setChoiceLists(updatedChoiceLists)
    }

    const handleBlur = e => {
        handleChange(e)
        setEditingListName(false)
    }

    const handleSubmit = e => {
        e.preventDefault()
        choiceList.name = listName
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
                    <CardTitle>
                        {!editingListName ?
                            <>
                                <div className='d-flex justify-content-center'>
                                    <ClickToEdit bsBtnClasses={bsBtnClasses}
                                        bgGradient={bgGradient}
                                        textSize={32}
                                        displayText={choiceList.name}
                                        handleEditClick={() => setEditingListName(true)} />
                                </div>
                                <div>
                                    <DeleteButton bgGradient={bgGradient}
                                        handleClick={deleteChoiceList} />
                                </div>
                            </> :
                            <IGForm bgGradient={bgGradient}
                            handleSubmit={handleSubmit}
                            inputText={listName}
                            handleBlur={handleBlur}
                            handleChange={handleChange}
                            leftBtnTxt=''
                            rtBtn1Txt='Done'
                            rtBtn2Txt='' />
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
                            style={{ height: 160 }} >
                            {options.map((o) =>
                                <Option key={o.id}
                                    bsBtnClasses={bsBtnClasses}
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
                        className={bsBtnClasses}
                        style={{ backgroundImage: bgGradient }}>
                        FeedMe Something!
                    </Button>
                    {randomOption && <Button onClick={clearRandomOption} color='black'>Clear</Button>}
                </CardBody>
                {randomOption &&
                    <CardTitle>
                        <div className='text-black'>
                            <h5>{randomOption.name.toUpperCase()}</h5>
                            <p>FOR THE WIN!</p>
                        </div>
                    </CardTitle>}
            </Card>
        </div>
    )
}