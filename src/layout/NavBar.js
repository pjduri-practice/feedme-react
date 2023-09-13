import choiceListGroups from '../components/data/list-layouts.json'
import logo from '../assets/FeedMeLogo6.png'

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

export default function NavBar({...args }) {
    return (
        <>
            <Navbar {...args}
                className='bg-dark fixed-top navbar-expand shadow-lg bg-opacity-75'
            >
                <NavbarBrand href='/'>
                    {/* FeedMe */}
                    <img src={logo} alt='logo' style={{ height: 80, marginTop: 0, marginBottom: 0, padding: 0 }} />
                </NavbarBrand>
                <Nav className="me-auto" navbar>
                    <NavLink href='/feedmenow'
                        style={{ color: 'black' }}>
                        FeedMe Now
                    </NavLink>
                    {/* <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret style={{color: 'black'}}>
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
                    </UncontrolledDropdown> */}
                    <NavItem>
                        <NavLink href="/feedmelater" style={{color: 'black'}}>
                            FeedMe Later
                        </NavLink>
                    </NavItem>

                </Nav>
                <NavbarText style={{color: 'black'}}>Welcome!</NavbarText>
            </Navbar>
            {/* <Banner setLayoutId={setLayoutId}/> */}
        </>
    )
}
