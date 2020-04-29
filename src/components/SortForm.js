import React from 'react';
import './style.css';

import {Jumbotron,Container,Row,Col} from 'react-bootstrap';

export default function(props){
    return (<Jumbotron className={props.visible?"visible":"hidden"}>
          <h1>Sort Form</h1>
          <Row>
              <Col>Input, output, button</Col>
              <Col>Description</Col>
          </Row>
    </Jumbotron>);
}