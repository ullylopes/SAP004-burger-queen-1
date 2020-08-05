const INICIAL_STATE = {
    userEmail: '',
    userLogged: 0,
}

function userReducer(state = INICIAL_STATE, action) {
    switch (action.type) {
        case 'LOG_IN':
            return { ...state, userLogged: 1, userEmail: action.userEmail }
        case 'LOG_OUT':
            return { ...state, userLogged: 0, userEmail: '' }
        default:
            return state;
    }
}

export default userReducer;