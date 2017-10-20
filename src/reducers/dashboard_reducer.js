export default function reducer(state = {
    users: []
}, action) {

    switch (action.type) {
        case "FETCH_USERS_FULFILLED": {
            console.log("users: "+JSON.stringify(action.payload));
            return Object.assign({}, state, { users: action.payload });
        }
        
        case "LOGOUT":
        {
            return Object.assign({}, state, { users: [] });
        }

    }
    return state;
}






