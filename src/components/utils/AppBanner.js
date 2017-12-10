import React, {Component} from 'react';
import {ButtonToolbar, Row, Col, ToggleButton, ToggleButtonGroup} from 'react-bootstrap';
import {clickBetsHandler} from '../../libs/function';
import {changeBets} from '../../stores/store';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class AppBanner extends Component{
    render(){
        const {match} = this.props;
        return (
            <div>
            { match && (
                    <Row className="app-banner show-grid">
                        <h4 className="card-title">Don't miss the match</h4>
                        <p className="card-text">{match.homeTeam.name} VS {match.awayTeam.name}</p>
                        <Col xs={8} xsOffset={2}>
                            <ButtonToolbar>
                                <ToggleButtonGroup type="checkbox" name="options">
                                    <ToggleButton onClick={(e) => clickBetsHandler(e, this.props.changeBets)} id={match.id+"_1"} className="odds no-outline" value={1}>
                                        {match.odds[1]}
                                    </ToggleButton>
                                    <ToggleButton onClick={(e) => clickBetsHandler(e, this.props.changeBets)} id={match.id+"_x"} className="odds no-outline" value={"x"}>
                                        {match.odds["x"]}
                                    </ToggleButton>
                                    <ToggleButton onClick={(e) => clickBetsHandler(e, this.props.changeBets)} id={match.id+"_2"} className="odds no-outline" value={2}>
                                        {match.odds[2]}
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            </ButtonToolbar>
                        </Col>
                    </Row>
                )}
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {
        changeBets: bindActionCreators(changeBets, dispatch)
    };
}

export default connect(null, mapDispatchToProps)(AppBanner);