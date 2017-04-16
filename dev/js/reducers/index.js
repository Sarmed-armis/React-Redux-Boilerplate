/**
 * Created by lenovo on 4/15/2017.
 * this is for combine all data to big object
 */
import {combineReducers} from "redux";
import  ReducerUser from "./reduscer.users";
import ActiveUserReducer from './reducer-active-user';

const allReducers=combineReducers({

    users:ReducerUser,
    ActiveUserReducer:ActiveUserReducer
});
export default allReducers;