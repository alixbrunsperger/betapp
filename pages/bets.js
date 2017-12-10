import React, { Component } from 'react';
import withRedux from 'next-redux-wrapper';
import {initStore, updateCombinedOdd} from '../src/stores/store';
import {Grid, Button, Row, Col} from 'react-bootstrap';
import AppHeader from '../src/components/utils/AppHeader';
import BetSummary from '../src/components/bet/BetSummary';
import BetSimpleHeader from '../src/components/bet/BetSimpleHeader';
import BetSimpleList from '../src/components/bet/BetSimpleList';
import BetCombined from '../src/components/bet/BetCombined';
import NoBets from '../src/components/bet/NoBets';
import Link from 'next/link';
import MoneyHelper from '../src/components/utils/MoneyHelper';

export class bets extends Component {

    static async getInitialProps ({ store, query, req }) {
        let combinedOdds = 0;
        const matches = store.getState().matches;
        store.getState().betSummary.simple.map((bet) => {
            const odd = parseInt(matches.find((match) => match.id === bet.match_id).odds[bet.result]);
            combinedOdds = (combinedOdds === 0 ? odd : combinedOdds*odd);
        })
        store.dispatch(updateCombinedOdd(combinedOdds));
        return {simpleBets: store.getState().betSummary.simple}
    }

    render() {
        return (
            <Grid bsClass="bets-container container-fluid grey">
                <AppHeader />
                { (this.props.simpleBets && this.props.simpleBets.length > 0 ? (
                        <div>
                            <h1>YOUR BETS</h1>
                            <BetSummary />
                            <BetSimpleHeader />
                            <BetSimpleList />
                            <BetCombined />
                            <MoneyHelper/>
                            <Row>
                                <Col xs={3} xsOffset={9} >
                                    <Link href="/validation">
                                        <Button bsStyle="primary">Go</Button>
                                    </Link>
                                </Col>
                            </Row>
                        </div>
                    ) : (
                   <NoBets />
            ))}
            </Grid>
        )
    }
};

export default withRedux(initStore)(bets);
