export const signIn = (props) => (dispatch, getState) => {
    const { firebase } = props;
    // console.log(credentials.getIn(['email']));
    // firebase.auth().signInWithEmailAndPassword(
    //   credentials.getIn(['email']),
    //   credentials.getIn(['password']),
    // ).then(() => {
    //   dispatch({ type: types.LOGIN_SUCCESS });
    // }).catch((err) => {
    //   dispatch({ type: types.LOGIN_ERROR, err });
    // });
  };