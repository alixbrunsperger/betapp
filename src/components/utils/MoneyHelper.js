import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import {showHideMoneyHelper} from '../../libs/function';

class MoneyHelper extends Component{
    render(){
        return(
            <Row id="money-helper" className="show-grid hide" onClick={() => showHideMoneyHelper(false)}>
                <Col xs={4} className="number center">1</Col>
                <Col xs={4} className="number center">2</Col>
                <Col xs={4} className="number center">5</Col>
                <Col xs={4} className="number center">10</Col>
                <Col xs={4} className="number center">20</Col>
                <Col xs={4} className="number center">50</Col>
            </Row>
        )
    }
}

export default MoneyHelper;