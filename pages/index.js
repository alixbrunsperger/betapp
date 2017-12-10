import React, { Component } from 'react';
import withRedux from 'next-redux-wrapper';
import MatchDataManagement from '../src/classes/MatchDataManagement';
import {initStore, addMatches} from '../src/stores/store';
import AppHeader from '../src/components/utils/AppHeader';
import AppBanner from '../src/components/utils/AppBanner';
import MatchSort from '../src/components/match/MatchSort';
import MatchBoxList from '../src/components/match/MatchBoxList';
import {Grid} from 'react-bootstrap';
import Link from 'next/link';

export class index extends Component {

    static async getInitialProps ({ store, query, req }) {
        const parameters = {};
        const matches = await MatchDataManagement.getMatches(parameters);
        store.dispatch(addMatches(matches));

        return {}
    }

    render() {
        const match = {
                "id":222222,
                "kickoff":"Monday 20:45",
                "homeTeam": {
                    name: "Olympique Lyonnais"
                },
                "awayTeam":{
                    name: "Lorient"
                },
                "odds":{
                    "1":"3.50",
                    "x":"1.30",
                    "2":"7.62"
                }
            }
        return (
            <Grid bsClass="main_container container-fluid grey">
                    <AppHeader />
                    <AppBanner match={match}/>
                    <MatchSort />
                    <MatchBoxList />
            </Grid>

        )
    }
};

export default withRedux(initStore)(index);
