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
    const bsNavBtnClasses = 
        'btn btn-outline-light border text-black feedme-gradient' +
        ' border-dark rounded-pill pt-1 pb-1 ps-2 pe-2 mt-1 mb-1' + 
        ' ms-2 me-2 bg-opacity-25 shadow '
    const logoStyle = {
        height: 40, marginTop: 0, marginBottom: 0, padding: 0
    }
    const navBtnStyle = {
        backgroundImage: bgGradient,
        height: 40,
        fontSize: 20
    }

    return (
        <>
            <Navbar {...args}
                className={bsNavbarClasses}
            >
                <NavbarBrand href='/'>
                    <img src={logo} alt='FeedMe'
                        style={logoStyle} />
                </NavbarBrand>
                <Nav className="me-auto" navbar>
                    <NavLink href='/feedmenow'
                        className={bsNavBtnClasses}
                        style={navBtnStyle}>
                        FeedMe Now
                    </NavLink>
                    <NavItem>
                        <NavLink href="/feedmelater" 
                        className={bsNavBtnClasses}
                        style={navBtnStyle}>
                            FeedMe Later
                        </NavLink>
                    </NavItem>

                </Nav>
                <NavbarText className='text-black fw-bold'>Welcome!</NavbarText>
                <AuthDropdown bsNavBtnClasses={bsNavBtnClasses}
                    navBtnStyle={navBtnStyle} />
            </Navbar>
        </>
    )
}
