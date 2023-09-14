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

export default function AuthNav() {
    return (
        <div className='bg-secondary'>
            <Nav tabs className='bg-secondary'>
                <NavItem className='bg-secondary'>
                    <NavLink
                        className="active bg-secondary"
                        onClick={function noRefCheck() { }}
                    >
                        Tab1
                    </NavLink>
                </NavItem>
                <NavItem className='bg-secondary'>
                    <NavLink
                        className=""
                        onClick={function noRefCheck() { }}
                    >
                        Tab2
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent  style={{height: 400, width: 400}} activeTab="1">
                <TabPane tabId="1" className='bg-secondary'>
                    <Row>
                        <Col sm="12">
                            <h4 className='p-2'>
                                Log In
                            </h4>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <Row>
                        <Col sm="6">
                            <Card body>
                                <CardTitle>
                                    Special Title Treatment
                                </CardTitle>
                                <CardText>
                                    With supporting text below as a natural lead-in to additional content.
                                </CardText>
                                <Button>
                                    Go somewhere
                                </Button>
                            </Card>
                        </Col>
                        <Col sm="6">
                            <Card body>
                                <CardTitle>
                                    Special Title Treatment
                                </CardTitle>
                                <CardText>
                                    With supporting text below as a natural lead-in to additional content.
                                </CardText>
                                <Button>
                                    Go somewhere
                                </Button>
                            </Card>
                        </Col>
                    </Row>
                </TabPane>
            </TabContent>
        </div>
    )
}
