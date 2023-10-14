import React, { useState } from 'react'
import {
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
    Row,
    Col,
    Card,
    CardTitle,
    CardText,
    Button,
} from 'reactstrap'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

export default function AuthNav({ bgGradient, bsNavBtnClasses, navBtnStyle }) {

    const activeTab = 'active bg-secondary border-dark bg-opacity-25 text-info'
    const inactiveTab = 'bg-dark border-dark bg-opacity-25 text-black'
    const [activeNavTab, setActiveNavTab] = useState('1')

    return (
        <div className='container bg-secondary bg-opacity-50'
            style={{ backgroundImage: bgGradient }}>
            <Nav tabs className='bg-secondary border-dark bg-opacity-25'
                style={{ backgroundImage: bgGradient }}>
                <NavItem className='bg-dark bg-opacity-50'
                    style={{ backgroundImage: bgGradient }}
                    onClick={() => { setActiveNavTab('1') }}>
                    <NavLink
                        className={activeNavTab === '1' ? activeTab : inactiveTab}

                    >
                        Login
                    </NavLink>
                </NavItem>
                <NavItem className='bg-secondary border-dark bg-opacity-25'
                    style={{ backgroundImage: bgGradient }}
                    onClick={() => { setActiveNavTab('2') }}>
                    <NavLink
                        className={activeNavTab === '2' ? activeTab : inactiveTab}

                    >
                        Register
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent className='container bg-dark bg-opacity-25'
                style={{
                    height: 350,
                    width: 350,
                    backgroundImage: bgGradient
                }}
                activeTab={activeNavTab}>
                <TabPane tabId="1" className='bg-secondary bg-opacity-50'
                    style={{ backgroundImage: bgGradient }}>
                    <Row>
                        <Col sm="12">
                            <LoginForm bsNavBtnClasses={bsNavBtnClasses}
                                navBtnStyle={navBtnStyle} />
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2" className='bg-dark bg-opacity-25 rounded overflow-auto'
                    style={{ height: '99%' }}>
                    <RegisterForm bsNavBtnClasses={bsNavBtnClasses}
                        navBtnStyle={navBtnStyle} />
                </TabPane>
            </TabContent>
        </div>
    )
}
