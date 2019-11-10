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
        authError: 'Account Not Verified'
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
    case 'SIGNUP_SUCCESS':
      console.log('Signup Success');
      return {
        ...state,
        authError: null,
      }
    case 'SIGNUP_ERROR':
      alert(action.err.message);
      return {
        ...state,
        authError: action.err.message,
      }
    default:
      return state;
  }
}

export default authReducer;