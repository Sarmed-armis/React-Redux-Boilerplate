/**
 * Created by lenovo on 4/16/2017.
 */
import React from 'react';
import UserList from './container/UserList';
import UserDetails from './container/user-details';


const App = () => (
    <div>
        <h2>User List</h2>
        <UserList />
        <hr />
        <UserDetails />
    </div>
);

export default App;