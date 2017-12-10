import React,{Component} from 'react';
import {Row, Col, OverlayTrigger, Tooltip} from 'react-bootstrap';
import {connect} from 'react-redux';
import {updateCombinedPrice} from '../../stores/store';
import {bindActionCreators} from 'redux';
import {showHideMoneyHelper} from '../../libs/function';

class BetCombined extends Component {
    render(){
        const {combinedBet} = this.props;
        const tooltip = <Tooltip id="tooltip"> Explanation about combined bets!</Tooltip>;
        return (
            <Row className="bet-combined show-grid">
                <Col xs={1} className="">
                    <OverlayTrigger placement="right" overlay={tooltip}>
                        <img src="/static/img/question.png" className="icon"/>
                    </OverlayTrigger>
                </Col>
                <Col xs={7} className="">
                    <span className="sub-title">Combined Bets</span>
                </Col>
                <Col xs={8} className="grey force-height"></Col>
                <Col xs={3} className="grey">
                    Price<br/>
                    <input onClick={() => showHideMoneyHelper(true)} onChange={(e) => this.props.updateCombinedPrice(parseInt(e.target.value))} type="text" id="combined_input" className="input-text" value={combinedBet.price}/>
                </Col>
                <Col xs={1} className="grey force-height"></Col>
            </Row>
        )
    }
}
function mapStateToProps(state){
    return {
        combinedBet: state.betSummary.combined
    }
}

function mapDispatchToProps(dispatch){
    return {
        updateCombinedPrice: bindActionCreators(updateCombinedPrice, dispatch),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BetCombined);