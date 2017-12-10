import React, {Component} from 'react';
import MatchBox from './MatchBox';
import {connect} from 'react-redux';
import {Row, Col} from 'react-bootstrap';

class MatchBoxList extends Component{
    render(){
        const {matches} = this.props;
        //const matches=[];
        const content = matches.map((match, key) => {
            return <MatchBox key={key} match={match}/>
        });
        
        return (
        <div className="match-box-list row">
            {content.length > 0 ?(
                content
            ):(
                <Row>
                    <Col xs={8} xsOffset={2} className="center">
                        No matches available at the moment ! <br/><br/>
                        Come again in a few minutes to bet on a match
                    </Col>
                </Row>
            )}
        </div>
        )
    }
}

function mapStateToProps(state){
    return {
        matches: state.matches
    }
}

export default connect(mapStateToProps)(MatchBoxList);