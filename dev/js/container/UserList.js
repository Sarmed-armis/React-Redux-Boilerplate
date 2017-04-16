/**
 * Created by lenovo on 4/16/2017.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectUser} from "../actions/index";
import {bindActionCreators} from 'redux';
class UserList extends Component {
    getListOfUser() {
        return this.props.users.map((user) => {
            return (
                <li  onClick={() => this.props.selectUser(user)} key={user.id}>{user.first} {user.last}</li>
            );

        })
    }

    render() {

        return (
            <ul>
                {this.getListOfUser()}
            </ul>
        );

    }

}
function mapStateToProps(state) {
    return {
        users: state.users
    };
}
    function matchDispatchToProps(dispatch) {
        return bindActionCreators({selectUser:selectUser},dispatch);
    }

export default connect(mapStateToProps,matchDispatchToProps)(UserList);