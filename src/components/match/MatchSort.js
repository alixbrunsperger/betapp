import React, {Component} from 'react';
import {Grid, Row, DropdownButton, MenuItem} from 'react-bootstrap';

class MatchSort extends Component{
    render(){
        return (
        <Row className="match-filter show-grid grey">
            <DropdownButton bsStyle="default" title="Sort" id="sort" className="grey">
                <MenuItem eventKey="1">Favorites</MenuItem>
                <MenuItem eventKey="2">Best Odds</MenuItem>
                <MenuItem eventKey="3">Most popular matches</MenuItem>
            </DropdownButton>
        </Row>
        )
    }
}

export default MatchSort;