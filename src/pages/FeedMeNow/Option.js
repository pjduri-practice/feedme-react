// import { Button } from 'reactstrap'

export function Option({ option, options, setOptions }) {
    const {id, name} = option

    const deleteOption = () => {
        const updatedOptions = options.filter(o => o.id !== id)
        console.log(updatedOptions)
        setOptions(updatedOptions)
    }

    return (
        <>
            <li style={{ height: 50 }} className="bg-dark text-secondary">
                {name}
                <span onClick={deleteOption} style={{fontSize: 10, padding: 3}}>
                    DELETE
                </span>
            </li>
        </>
    )
}