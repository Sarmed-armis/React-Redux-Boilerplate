/**
 * Created by lenovo on 4/16/2017.
 */


import React, {Component} from 'react';

import {connect} from 'react-redux';

class UserList extends Component {
    getListOfUser(){
        return this.props.users.map((user) => {
            return(
                <li key={user.id}>{user.first} {user.last}</li>
            );

        })
    }
    render() {

    return(
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
export default connect(mapStateToProps)(UserList);