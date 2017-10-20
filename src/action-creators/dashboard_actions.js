import axios from "axios";
import store from './../store';
let users=[
    {
        name:"User1",
        gender:"male",
        dob:"",
        address:"",
        phone:"",
        username:"user1",
        password:"user1"
    },
    {
        name:"User2",
        gender:"female",
        dob:"",
        address:"",
        phone:"",
        username:"user2",
        password:"user2"
    }
]

export function fetchUsers() {
   
            store.dispatch({ type: "FETCH_USERS_FULFILLED", payload: users })
      
}

export function logoutUser()
{
    store.dispatch({type:"LOGOUT", payload:[]});
}
