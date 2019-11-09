export const addVotersAction = (data) => (dispatch, getState, getFirestore) => {
    const firestore = getFirestore();
    const DOB = firestore.Timestamp.fromDate(data.DOB)

    firestore.collection('Voter').add({
      ...data, DOB
    }).then(() => {
        console.log('dd')
      window.location.href = '/admin/voters';
    });
};

export const edidVotersAction = (data,id) => (dispatch, getState, getFirestore) => {
    const firestore = getFirestore();
    const DOB = firestore.Timestamp.fromDate(data.DOB)

    firestore.collection('Voter').doc(id).update({
      ...data, DOB
    }).then(() => {
      window.location.href = '/admin/voters';
    });
};

export const deleteVotersAction = (id) => (dispatch, getState, getFirestore) => {
    const firestore = getFirestore();

    firestore.collection('Voter').doc(id).delete()
    .then(() => {
        console.log('dd')
      window.location.href = '/admin/voters';
    });
};