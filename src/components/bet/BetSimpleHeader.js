import React,{Component} from 'react';
import {Row,Col} from 'react-bootstrap';

class BetSimpleHeader extends Component {
    render(){
        return (
            <Row className="show-grid bet-simple-header" >
                <Col xs={12}>
                <span className="sub-title">Simple Bets</span>&nbsp;&nbsp;
                <span className="small-text">(check the bets to combine them)</span>
                </Col>
            </Row>
        )
    }
}

export default BetSimpleHeader;