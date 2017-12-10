import React, { Component } from 'react';
import withRedux from 'next-redux-wrapper';
import {initStore} from '../src/stores/store';
import {Grid, Col, Row, Button} from 'react-bootstrap';
import AppHeader from '../src/components/utils/AppHeader';

export class finish extends Component {

    static async getInitialProps ({ store, query, req }) {

        return {

        }
    }

    render() {
        return (
            <Grid bsClass="finish-container container-fluid grey">
                <AppHeader />
                <Row className=" show-grid">
                    <Col xs={6}>
                        <img src="/static/img/win.png" className="image" />
                    </Col>
                    <Col xs={6}>
                        <h2>Nice ! </h2>
                        You will be notified as soon as possible.
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} xsOffset={6} className="center">
                        <Button bsStyle="primary" type="submit">
                            See the matches
                        </Button>
                    </Col>
                    <Col xs={6} xsOffset={6} className="center">
                        <Button bsStyle="warning" type="submit">
                            Bet on a player/score
                        </Button>
                    </Col>
                </Row>
            </Grid>
        )
    }
};

export default withRedux(initStore)(finish);
