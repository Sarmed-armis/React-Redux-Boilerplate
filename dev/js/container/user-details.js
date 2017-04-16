/**
 * Created by lenovo on 4/17/2017.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';


class UserDetail extends Component {
    render() {
        if (!this.props.user) {
            return (<div>please show user !</div>);
        }
        return (
            <div>
                <img src={this.props.user.thumbnail} />
                <h2>{this.props.user.first} {this.props.user.last}</h2>
                <h3>Age: {this.props.user.age}</h3>
                <h3>Description: {this.props.user.description}</h3>
            </div>
        );
    }
}

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        user: state.ActiveUserReducer
    };
}

export default connect(mapStateToProps)(UserDetail);
