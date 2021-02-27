import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import DBTable from '../db-table/db-table';

const DBTabs = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div>
      <Nav tabs>
        <NavItem className="tabs-box">
          <NavLink
            className={classnames({ active: activeTab === '1', backgroundColor: "red" })}
            onClick={() => { toggle('1'); }}
          >
            Panel
          </NavLink>
        </NavItem>
        <NavItem className="tabs-box">
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Settings
          </NavLink>
        </NavItem>
        <NavItem className="tabs-box">
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          >
            Settings
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <DBTable />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="6">
              <div className="my-4 p-4 card-tab-body">
                <CardTitle>Daniel</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Go somewhere</Button>
              </div>
            </Col>
            <Col sm="6">
              <div className="my-4 p-4 card-tab-body">
                <CardTitle>Luisa</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Go somewhere</Button>
              </div>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col sm="12">
              <DBTable />
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default DBTabs;