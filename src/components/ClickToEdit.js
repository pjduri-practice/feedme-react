

export default function ClickToEdit({ bsBtnClasses,
    bgGradient, 
    textSize, 
    displayText, 
    handleEditClick }) {

    return (
        <span onClick={handleEditClick}
            className={bsBtnClasses}
            // 'text-black pt-1 pb-1 ps-2 pe-2 fw-bold rounded-pill shadow bg-light bg-opacity-75 col-12 overflow-hidden text-nowrap'
            style={{
                fontSize: textSize,
                backgroundImage: bgGradient
            }}>
            {displayText}
        </span>
    )
}