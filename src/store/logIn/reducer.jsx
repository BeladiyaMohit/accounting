
const initialState={
    data:null
}
const logInReducer = (state=initialState,action) => {

    switch (action) {
        case ATTEMPT_LOGIN:
            return{
                ...state,
            }
        case LOGIN_SUCCESS:
            return{
                ...state,
            }
        case LOGIN_FAIL:
            return{
                ...state,
            }

        default:
            return state;
    }
}

export default logInReducer