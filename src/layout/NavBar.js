import logo from '../assets/FeedMeLogo6.png'

import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap'
import AuthDropdown from './AuthDropdown'

export default function NavBar({bgGradient, ...args }) {
    const bsNavbarClasses =
        'navi fixed-top navbar-expand shadow-lg bg-dark bg-opacity-75 fw-light'

    return (
        <>
            <Navbar {...args}
                className={bsNavbarClasses}
            >
                <NavbarBrand href='/'>
                    <img src={logo} alt='FeedMe'
                        style={{
                            height: 40, marginTop: 0, marginBottom: 0, padding: 0
                        }} />
                </NavbarBrand>
                <Nav className="me-auto" navbar>
                    <NavLink href='/feedmenow'
                        className='text-black'>
                        FeedMe Now
                    </NavLink>
                    <NavItem>
                        <NavLink href="/feedmelater" className='text-black'>
                            FeedMe Later
                        </NavLink>
                    </NavItem>

                </Nav>
                <NavbarText className='text-black'>Welcome!</NavbarText>
                <AuthDropdown bgGradient={bgGradient} />
            </Navbar>
        </>
    )
}
