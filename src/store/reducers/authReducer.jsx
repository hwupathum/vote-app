const initialState = {
  authError: null,
};

const authReducer =  (state = initialState, action = {}) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
      alert('Login Failed');
      return {
        ...state,
        authError: 'Login Failed'
      };
    case 'UNREGISTERED_LOGIN':
      alert('User Not Registered');
      return {
        ...state,
        authError: 'User Not Registered'
      };
    case 'LOGIN_SUCCESS':
      console.log('Login Success');
      return {
        ...state,
        authError: null,
      };
    case 'LOGOUT_SUCCESS':
      console.log('Logout Success');
      window.location.href = '/auth/login';
      return state;
    default:
      return state;
  }
}

export default authReducer;