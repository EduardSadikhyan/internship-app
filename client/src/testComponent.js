import React, { Component } from 'react';
import { connect } from "react-redux";

class TestComponent extends Component {
    render() {
        return <div > 
            <div>{this.props.data[1] &&  this.props.data[1].title}</div>
            <div>{this.props.text}</div>

        </div>

    }
}

const mapStateToProps = store => {
    return {
        data: store.crud.data
    };
}

export default connect(
    mapStateToProps,
    null
)(TestComponent);