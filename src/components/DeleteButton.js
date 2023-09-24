


export default function DeleteButton({ bgGradient, handleClick }) {
    return (
        <div className='btn btn-outline-danger rounded p-1 text-danger shadow'
            onClick={handleClick}
            style={{
                fontSize: 9,
                padding: 3,
                marginTop: 3,
                marginLeft: -15,
                marginRight: 5,
                backgroundImage: bgGradient
            }}>
            DEL
        </div>
    )
}