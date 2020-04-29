import React from 'react';
import './style.css';

import {Jumbotron,Form,Row,Col,Button} from 'react-bootstrap';

export default function(props){
    return (<Jumbotron className={props.visible?"visible":"hidden"}>
          <Row>
              <Col>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Please enter a comma separated list of numbers</Form.Label>
                        <Form.Control type="array" placeholder="i.e: 1,2,3,4,5" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Please enter number to search</Form.Label>
                        <Form.Control type="number" placeholder="i.e: 10" />
                    </Form.Group>
                    <Button variant="outline-light" type="submit">
                        Search
                    </Button>
                </Form>
              </Col>
              <Col>
                <h1>Description</h1>
                <p>youtube video of how it works...eventually I will make one of me descibing it but for now just a random person works</p>
              </Col>
          </Row>
    </Jumbotron>);
}