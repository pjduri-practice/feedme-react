

export default function ClickToEdit({ bgGradient, 
    textSize, 
    displayText, 
    handleEditClick }) {

    return (
        <span onClick={handleEditClick}
            className='text-black pt-1 pb-1 ps-2 pe-2 fw-bold rounded-pill shadow bg-light bg-opacity-75'
            style={{
                fontSize: textSize,
                backgroundImage: bgGradient
            }}>
            {displayText}
        </span>
    )
}