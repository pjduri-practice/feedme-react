import { useState } from 'react'
import choiceListGroups from '../../components/data/list-layouts.json'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem }
    from 'reactstrap'

export function Banner({ setLayoutId }) {
    const [ dropdownOpen, setDropdownOpen ] = useState(false)
    const toggle = () => setDropdownOpen(!dropdownOpen)

    return (
        <div style={{ marginTop: 85 }} className='container-fluid row'>
            <h1>FeedMe Now</h1>
                <Dropdown className='me-2' 
                direction='down'
                isOpen={dropdownOpen} 
                toggle={toggle}>
                    <DropdownToggle nav caret className='col col-4 offset-4'>
                        Select Layout
                    </DropdownToggle>
                    <DropdownMenu positionFixed={true} className='bg-secondary'>
                        {choiceListGroups.map(g =>
                            <DropdownItem
                                className='text-dark bg-secondary'
                                onClick={() => setLayoutId(g.id)}>
                                {g.name}
                            </DropdownItem>)}
                    </DropdownMenu>
                </Dropdown>
        </div>
    )
}