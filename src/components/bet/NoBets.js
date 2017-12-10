import React, {Component} from 'react';
import {Row,Col} from 'react-bootstrap';

class NoBets extends Component{
    render(){
        return (
            <Row className="no-bets">
                <Col xs={12}>You don't have any bets at the moment</Col>
                <Col xs={12}><img src="/static/img/no-bets.png" className="image"/></Col>
                <Col xs={12}>Click on the boxes to add a bet</Col>
            </Row>
        )
    }
}
export default NoBets;