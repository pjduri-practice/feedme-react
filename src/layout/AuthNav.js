import React, { useState } from 'react'
import {
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
    Row,
    Col
} from 'reactstrap'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

export default function AuthNav({ bgGradient, bsNavBtnClasses, navBtnStyle }) {

    const activeTab = 'active bg-secondary border-dark bg-opacity-25 text-info'
    const inactiveTab = 'bg-dark border-dark bg-opacity-25 text-black'
    const tabPaneClasses = 'bg-transparent rounded overflow-auto'
    const [activeNavTab, setActiveNavTab] = useState('1')

    return (
        <div className='container bg-transparent'
            style={{ backgroundImage: bgGradient }}>
            <Nav tabs className='bg-secondary border-dark bg-opacity-25 shadow'
                style={{ backgroundImage: bgGradient }}>
                <NavItem
                    style={{ backgroundImage: bgGradient }}
                    onClick={() => { setActiveNavTab('1') }}>
                    <NavLink
                        className={activeNavTab === '1' ? activeTab : inactiveTab}>
                        Login
                    </NavLink>
                </NavItem>
                <NavItem
                    style={{ backgroundImage: bgGradient }}
                    onClick={() => { setActiveNavTab('2') }}>
                    <NavLink
                        className={activeNavTab === '2' ? activeTab : inactiveTab}>
                        Register
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent className='container shadow bg-secondary bg-opacity-25'
                style={{
                    height: 350,
                    width: 350,
                    backgroundImage: bgGradient
                }}
                activeTab={activeNavTab}>
                <TabPane tabId="1" className={tabPaneClasses}
                    style={{ height: '99%' }}>
                    <LoginForm bsNavBtnClasses={bsNavBtnClasses}
                        navBtnStyle={navBtnStyle} />
                </TabPane>
                <TabPane tabId="2" className={tabPaneClasses}
                    style={{ height: '99%' }}>
                    <RegisterForm bsNavBtnClasses={bsNavBtnClasses}
                        navBtnStyle={navBtnStyle} />
                </TabPane>
            </TabContent>
        </div>
    )
}
