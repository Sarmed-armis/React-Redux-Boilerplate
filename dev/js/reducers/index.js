/**
 * Created by lenovo on 4/15/2017.
 * this is for combine all data to big object
 */
import {combineReducers} from "redux";
import  ReducerUser from "./reduscer.users";

const allReducers=combineReducers({

    users:ReducerUser
});
export default allReducers;