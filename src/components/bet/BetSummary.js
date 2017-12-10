import React,{Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import {connect} from 'react-redux';
import {getTotalPrice, getTotalGain} from '../../libs/function';

class BetSummary extends Component {

    render(){
        const {simpleBets, combinedBets, matches} = this.props;
        return (
            <Row className="bet-summary show-grid">
                <Col xs={4}>Total price :<br/>   {getTotalPrice(simpleBets, combinedBets)} €</Col>
                <Col xs={4}>Potential gain :<br/>   {getTotalGain(simpleBets, combinedBets, matches)} €</Col>
            </Row>
        )
    }
}

function mapStateToProps(state){
    return{
        matches: state.matches,
        simpleBets: state.betSummary.simple,
        combinedBets: state.betSummary.combined
    }
}

export default connect(mapStateToProps)(BetSummary);