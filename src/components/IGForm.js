import {
    Form,
    Input,
    InputGroup,
    InputGroupText,
} from 'reactstrap'

export default function ({
    bgGradient,
    handleSubmit,
    inputText,
    handleBlur,
    handleChange,
    leftBtnTxt,
    rtBtn1Txt,
    rtBtn2Txt }) {

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <InputGroup>
                    {leftBtnTxt && <InputGroupText
                        className='text-black bg-light bg-opacity-25 border-dark'
                        style={{
                            fontSize: 12,
                            height: 30,
                            backgroundImage: bgGradient
                        }}>
                        {leftBtnTxt}
                    </InputGroupText>}
                    <Input autoFocus
                        type='text'
                        style={{ height: 30, fontSize: 18 }}
                        value={inputText}
                        onBlur={handleBlur}
                        onChange={handleChange} />
                    <InputGroupText
                        className='text-black fw-bold bg-light bg-opacity-25 border-dark'
                        style={{
                            fontSize: 12,
                            height: 30,
                            backgroundImage: bgGradient
                        }}>
                        {rtBtn1Txt}
                    </InputGroupText>
                    {rtBtn2Txt && <InputGroupText
                        className='text-black bg-light bg-opacity-25 border-dark'
                        style={{
                            fontSize: 12,
                            height: 30,
                            backgroundImage: bgGradient
                        }}>
                        {rtBtn2Txt}
                    </InputGroupText>}
                </InputGroup>
            </Form>
        </>
    )
}