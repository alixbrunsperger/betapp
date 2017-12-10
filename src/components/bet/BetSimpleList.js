import React, {Component} from 'react';
import BetSimple from './BetSimple';
import {connect} from 'react-redux';
import {Row} from 'react-bootstrap';

class BetSimpleList extends Component{
    render(){
        const {bets} = this.props;
        const content = bets.map((bet, key) => {
            return <BetSimple key={key} bet={bet}/>
        })
        return (
            <Row className="bet-simple-list">
                {content}
            </Row>
        )
    }
}

function mapStateToProps(state){
    return {
        bets: state.betSummary.simple
    }
}

export default connect(mapStateToProps)(BetSimpleList);