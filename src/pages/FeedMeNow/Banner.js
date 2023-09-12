import { useState } from 'react'
import choiceListGroups from '../../components/data/list-layouts.json'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem }
    from 'reactstrap'

export function Banner({ setLayoutId }) {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const toggle = () => setDropdownOpen(!dropdownOpen)

    return (
        <div
            style={{
                paddingTop: 120,
                color: 'black',
                background: 'rgba(11, 79, 79, 0.6)'
            }}>
            <h1>FeedMe Now</h1>
            <Dropdown className='me-2'
                isOpen={dropdownOpen}
                toggle={toggle}>
                <DropdownToggle nav caret className='col col-4 offset-4 bg-secondary bg-opacity-75 mb-1'>
                    Select Layout
                </DropdownToggle>
                <DropdownMenu className='bg-secondary'>
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