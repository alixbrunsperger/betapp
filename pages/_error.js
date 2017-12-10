
import React from 'react';
import Handler404 from '../src/components/errors/Handler404';
import { setLocale } from 'react-redux-i18n';
import { initStore } from '../src/stores/store';
import withRedux from 'next-redux-wrapper';

class Error extends React.Component {
    static getInitialProps ({ store, query, res, jsonPageRes }) {
        const statusCode = res ? res.statusCode : (jsonPageRes ? jsonPageRes.status : null);
        const langs = ["fr","de","en"];
        if(query.lang && (langs.indexOf(query.lang) > 0)){
            store.dispatch(setLocale(query.lang));
        } else {
            store.dispatch(setLocale("fr"));
        }
        return { statusCode }
    }

    render () {
        if(this.props.statusCode === 404){
            return (
                <div>
                    <Handler404 />
                </div>
            )
        }
        else{
            return (
                <p>{
                    this.props.statusCode
                        ? `An error ${this.props.statusCode} occurred on server`
                        : 'An error occurred on client'
                }</p>
            )
        }
    }
}

export default withRedux(initStore)(Error);