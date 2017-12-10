import React, { Component } from 'react';
import {Badge, Row, Col} from 'react-bootstrap';
import { connect } from 'react-redux';
import Link from'next/link';


 class AppHeader extends Component {

    render() {
        const {bets} = this.props;
        return (
            <Row className="app-header show-grid">
                <Col xs={8} className="title-adjust"><Link href="/"><a>BetApp</a></Link></Col>
                <Col xs={2}>
                    <Link href="/bets">
                        <a>
                            {(bets.length >0 && <Badge className="bet-counter">{bets.length}</Badge>)}
                            <img className="icon" src="/static/img/caddie.png"/>
                        </a>
                    </Link>
                </Col>
                <Col xs={2}><img className="icon icon-adjust" src="/static/img/user.png"/></Col>
            </Row>
        );
    }
}

function mapStateToProps(state) {
    return {
        //isAuthenticated: state.reducer.isAuthenticated
        bets: state.betSummary.simple
    }
}

export default connect(mapStateToProps)(AppHeader);
