import React, {Component} from 'react';
import {clickBetsHandler} from '../../libs/function';
import {ButtonToolbar, ToggleButtonGroup, ToggleButton} from 'react-bootstrap';
import { Row, Col} from 'react-bootstrap';
import {changeBets} from '../../stores/store';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class MatchBox extends Component{
    render(){
        const {match} = this.props;

        return (
        <Row className="match-box show-grid">
            <Col xs={1} className="alert-danger small-text">{match.live && "Live" }</Col>
            <Col xs={5} className="date small-text">{match.kickoff}</Col>
            <Col xs={12} className="versus-text">{match.homeTeam.name} VS {match.awayTeam.name}</Col>
            <Col xs={3}><img src={match.homeTeam.flag} /></Col>
            <Col xs={6} className="odds-list">
                <ButtonToolbar>
                    <ToggleButtonGroup type="checkbox" name="options">
                        <ToggleButton onClick={(e) => clickBetsHandler(e, this.props.changeBets)} id={match.id+"_1"} className="no-outline" value={1}>
                            {match.odds[1]}
                        </ToggleButton>
                        <ToggleButton onClick={(e) => clickBetsHandler(e, this.props.changeBets)} id={match.id+"_x"} className="no-outline" value={"x"}>
                            {match.odds["x"]}
                        </ToggleButton>
                        <ToggleButton onClick={(e) => clickBetsHandler(e, this.props.changeBets)} id={match.id+"_2"} className="no-outline" value={2}>
                            {match.odds[2]}
                        </ToggleButton>
                    </ToggleButtonGroup>
                </ButtonToolbar>
            </Col>
            <Col xs={3}><img src={match.awayTeam.flag} /></Col>
        </Row>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {
        changeBets: bindActionCreators(changeBets, dispatch)
    };
}

export default connect(null, mapDispatchToProps)(MatchBox);