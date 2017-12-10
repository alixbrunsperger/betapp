import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

const __DEBUG__ =  true;

let initialState ={
    matches : [],
    betSummary:{
        simple:[],
        combined:{
            price:0,
            odd:0
        }
    },
    isAuthenticated : false
};

export const actionTypes = {
    ADD_MATCHES: 'ADD_MATCHES',
    CHANGE_BETS: 'CHANGE_BETS',
    UPDATE_BETS: 'UPDATE_BETS',
    UPDATE_COMBINED_PRICE: 'UPDATE_COMBINED_PRICE',
    UPDATE_COMBINED_ODD: 'UPDATE_COMBINED_ODD'
};


function reducer(state = initialState, { type, payload }) {

    switch(type){
        case actionTypes.ADD_MATCHES:
            return {...state,
                matches: payload.matches
            };
        case actionTypes.UPDATE_BETS:
            return {...state,
                betSummary:{
                    ...state.betSummary,
                    simple:payload.bets
                }};
        case actionTypes.CHANGE_BETS:
            return {...state,
                betSummary:{
                    ...state.betSummary,
                    simple:handleBets(state.betSummary.simple,payload.bet)
                }
            };
        case actionTypes.UPDATE_COMBINED_ODD:
            return {...state,
                betSummary:{
                    ...state.betSummary,
                    combined:{
                        ...state.betSummary.combined,
                        odd: payload.odd
                    }
                }
            };
        case actionTypes.UPDATE_COMBINED_PRICE:
            return {...state,
                betSummary:{
                    ...state.betSummary,
                    combined:{
                        ...state.betSummary.combined,
                        price: payload.price
                    }
                }
            };
        default:
            return state;
    }
}

let devTools;
if(typeof window !== 'undefined') {
    devTools = window.devToolsExtension ? window.devToolsExtension() : f => f;
}
else {
    devTools = f => f;
}

const middlewares = [
    thunkMiddleware
];

const toolChain = __DEBUG__ ? [
    applyMiddleware(...middlewares),
    devTools,
] : [
    applyMiddleware(...middlewares),
];

export const initStore = (initialState) => {
    let store =  compose(...toolChain)(createStore)(
        reducer,
        initialState,
        applyMiddleware(...middlewares)
    );

    return store;
};

export const addMatches = (matches) => (
    {
        type: actionTypes.ADD_MATCHES, payload: {matches:matches}
    });

export const changeBets = (bet) => (
    {
        type: actionTypes.CHANGE_BETS, payload: {bet:bet}
    });
export const updateBets = (bets) => (
    {
        type: actionTypes.UPDATE_BETS, payload: {bets:bets}
    });
export const updateCombinedPrice = (price) => (
    {
        type: actionTypes.UPDATE_COMBINED_PRICE, payload: {price:price}
    });

export const updateCombinedOdd = (odd) => (
    {
        type: actionTypes.UPDATE_COMBINED_ODD, payload: {odd:odd}
    });

function handleBets(bets, new_bet){
    let final_bets = [];
    if(bets.length > 0){
        final_bets = bets.filter((bet) => {
            return bet.match_id !== new_bet.match_id;
        });
        if(new_bet.result !== 0) {
            final_bets.push(new_bet);
        }
    } else {
        final_bets.push(new_bet);
    }
    final_bets.sort((bet, bet2) => bet.match_id-bet2.match_id);
    return final_bets;
}