import React, {Component} from 'react';
import {changeSimplePrice, showHideMoneyHelper} from '../../libs/function';
import {ToggleButton, ButtonToolbar, ToggleButtonGroup} from 'react-bootstrap';
import { Row, Col} from 'react-bootstrap';
import {changeBets, updateBets} from '../../stores/store';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class BetSimple extends Component{
    render(){
        const {bet, matches} = this.props;
        const match = matches.find((element) => (element.id === bet.match_id));
        return (
            <Row className="bet-simple show-grid">
                    <Col xs={2} className="">
                        <ButtonToolbar>
                            <ToggleButtonGroup type="checkbox" name="options" defaultValue={1}>
                                <ToggleButton id={bet.match_id+"_"+bet.result} className="no-outline align-top" value={1}>
                                    &nbsp;
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </ButtonToolbar>
                    </Col>
                    <Col xs={6} className="">
                        {match.homeTeam.name} VS {match.awayTeam.name} <br/>
                        Odd : {match.odds[bet.result]}
                    </Col>
                    <Col xs={2} className="">
                        Price<br/>
                        <input onClick={() => showHideMoneyHelper(true)} onChange={(e) => changeSimplePrice(e, this.props.changeBets, bet)} type="text" id={bet.match_id+"bet_input"} className="input-text" value={bet.price}/>
                    </Col>
                    <Col xs={2} className="">
                        <img src="/static/img/cross.png" className="icon align-top" />
                    </Col>
            </Row>
        )
    }
}

function mapStateToProps(state){
    return {
        matches: state.matches,
        bets: state.betSummary.simple
    }
}

function mapDispatchToProps(dispatch){
    return {
        changeBets: bindActionCreators(changeBets, dispatch),
        updateBets: bindActionCreators(updateBets, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BetSimple);