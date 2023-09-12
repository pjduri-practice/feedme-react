import { useState } from 'react'
import choiceListGroups from '../../components/data/list-layouts.json'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem }
    from 'reactstrap'

export function Banner({ setLayoutId }) {
    const [ dropdownOpen, setDropdownOpen ] = useState(false)
    const toggle = () => setDropdownOpen(!dropdownOpen)

    return (
        <div style={{ marginTop: 85, marginBottom: 5, background: 'transparent' }} className='row'>
            <h1>FeedMe Now</h1>
                <Dropdown className='me-2' 
                isOpen={dropdownOpen} 
                toggle={toggle}>
                    <DropdownToggle nav caret className='col col-4 offset-4'>
                        Select Layout
                    </DropdownToggle>
                    {/* positionFixed={true} */}
                    <DropdownMenu  className='bg-secondary'>
                        {choiceListGroups.map(g =>
                            <DropdownItem
                                key={g.id}
                                className='text-dark bg-secondary'
                                onClick={() => setLayoutId(g.id)}>
                                {g.name}
                            </DropdownItem>)}
                    </DropdownMenu>
                </Dropdown>
        </div>
    )
}