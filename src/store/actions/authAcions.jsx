export const signIn = (props, credentials) => (dispatch, getState) => {
  const { firebase } = props;
  // console.log(credentials.getIn(['email']));
  firebase.auth().signInWithEmailAndPassword(
    credentials.email,
    credentials.password,
  ).then(() => {
    dispatch({ type: 'LOGIN_SUCCESS' });
  }).catch((err) => {
    dispatch({ type: 'LOGIN_ERROR', err });
  });
};

export const signOut = (props) => (dispatch, getState) => {
  const { firebase } = props;
  firebase.auth().signOut().then(() => {
    dispatch({ type: 'LOGOUT_SUCCESS' });
  });
};
  
export const unregisteredLogin = (props) => (dispatch, getState) => {
  const { firebase } = props;
  firebase.auth().signOut().then(() => {
    dispatch({ type: 'UNREGISTERED_LOGIN' });
  });
};