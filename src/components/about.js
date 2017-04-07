import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getQuotes } from '../actions';

class About extends Component {
    componentWillMount() {
        this.props.getQuotes();
    }
    render() {
        if (!this.props.quotes) {
            return <div>loading</div>
        }
        return <div>{ this.props.quotes[0] }</div>
    }
}

function mapStateToProps(state) {
    return { quotes: state.quotes };
}

export default connect(mapStateToProps, { getQuotes })(About);