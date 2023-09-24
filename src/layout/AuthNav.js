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

export default function AuthNav() {

    const activeTab = 'active bg-secondary border-dark bg-opacity-50'
    const inactiveTab = 'bg-secondary border-dark bg-opacity-50'
    const [loginTabActive, setLoginTabActive] = useState(activeTab)
    const [registerTabActive, setRegisterTabActive] = useState(inactiveTab)
    const [activeNavTab, setActiveNavTab] = useState('1')

    const handleLoginTab = () => {
        setLoginTabActive(activeTab)
        setRegisterTabActive(inactiveTab)
        setActiveNavTab('1')
    }
    
    const handleRegisterTab = () => {
        setLoginTabActive(activeTab)
        setRegisterTabActive(inactiveTab)
        setActiveNavTab('2')
    }

    return (
        <div className='bg-secondary bg-opacity-50'>
            <Nav tabs className='bg-secondary border-dark bg-opacity-50'>
                <NavItem className='bg-secondary bg-opacity-50'>
                    <NavLink
                        className={loginTabActive}
                        onClick={handleLoginTab}
                    >
                        Login
                    </NavLink>
                </NavItem>
                <NavItem className='bg-secondary bg-opacity-50'>
                    <NavLink
                        className= {registerTabActive}
                        onClick={handleRegisterTab}
                    >
                        Register
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent className='bg-dark bg-opacity-50'  style={{height: 400, width: 400}} activeTab={activeNavTab}>
                <TabPane tabId="1" className='bg-secondary bg-opacity-50'>
                    <Row>
                        <Col sm="12">
                            <LoginForm />
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2" className='bg-secondary bg-opacity-50'>
                    <RegisterForm />
                </TabPane>
            </TabContent>
        </div>
    )
}
