import React, { Component } from 'react';
import withRedux from 'next-redux-wrapper';
import {initStore} from '../src/stores/store';
import {Grid, Form, FormGroup, FormControl, ControlLabel, Col, Button, Row} from 'react-bootstrap';
import AppHeader from '../src/components/utils/AppHeader';
import {getTotalPrice, getTotalGain} from '../src/libs/function';
import Link from 'next/link';

export class validation extends Component {

    static async getInitialProps ({ store, query, req }) {

        return {
            simpleBets: store.getState().betSummary.simple,
            combinedBets: store.getState().betSummary.combined,
            matches: store.getState().matches
        }
    }

    render() {
        const {simpleBets, combinedBets, matches} = this.props;
        return (
            <Grid bsClass="validation-container container-fluid grey">
                <AppHeader />
                <Form horizontal>
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                            Email
                        </Col>
                        <Col sm={10}>
                            <FormControl type="email" placeholder="Email" />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={2}>
                            Password
                        </Col>
                        <Col sm={10}>
                            <FormControl type="password" placeholder="Password" />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col xs={12} className="center">
                            <Button bsStyle="primary" className="input-size" type="submit">
                                Sign in
                            </Button>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col xs={12} className="center">
                            <Button bsStyle="primary" className="input-size" type="submit">
                                Create an account
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
                ---------------
                <Row className="bet-summary show-grid">
                    <Col xsOffset={4} xs={4}>Total price :<br/>   {getTotalPrice(simpleBets, combinedBets)} €</Col>
                    <Col xs={4}>Potential gain :<br/>   {getTotalGain(simpleBets, combinedBets, matches)} €</Col>
                </Row>
                <Form horizontal>
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                            Validation code
                        </Col>
                        <Col sm={10}>
                            <FormControl type="text" placeholder="Validation Code" />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col xsOffset={9} xs={2}>
                            <Link href="/finish">
                                <Button bsStyle="primary" type="submit">
                                    Go
                                </Button>
                            </Link>
                        </Col>
                    </FormGroup>
                </Form>
            </Grid>
        )
    }
};

export default withRedux(initStore)(validation);
