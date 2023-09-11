import choiceListGroups from '../components/data/list-layouts.json'
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap'

export default function NavBar({ setLayoutId, ...args }) {
    return (
        <>
            <Navbar {...args} className='bg-dark opacity-70 fixed-top navbar-expand'>
                <NavbarBrand href="/" className='text-secondary'>FeedMe</NavbarBrand>
                <Nav className="me-auto" navbar>
                    <NavLink href='/feedmenow' style={{ marginRight: -25 }} className='text-secondary'>
                        FeedMe Now
                    </NavLink>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret className='text-secondary'>
                        </DropdownToggle>
                        <DropdownMenu right className='bg-secondary'>
                            {choiceListGroups.map(g =>
                                <DropdownItem
                                    className='text-dark bg-secondary'
                                    onClick={() => setLayoutId(g.id)}>
                                    {g.name}
                                </DropdownItem>)}
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <NavItem>
                        <NavLink href="/feedmelater" className='text-secondary'>
                            FeedMe Later
                        </NavLink>
                    </NavItem>

                </Nav>
                <NavbarText className='text-secondary'>Welcome!</NavbarText>
            </Navbar>
        </>
    )
}