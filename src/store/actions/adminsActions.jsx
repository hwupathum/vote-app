export const addAdminsAction = (data) => (dispatch, getState, getFirestore) => {
    const firestore = getFirestore();

    firestore.collection('Admin').add({
      ...data
    }).then(() => {
        console.log('dd')
      window.location.href = '/admin/admins';
    });
};

export const editAdminsAction = (data,id) => (dispatch, getState, getFirestore) => {
    const firestore = getFirestore();

    firestore.collection('Admin').doc(id).update({
      ...data
    }).then(() => {
      window.location.href = '/admin/admins';
    });
};

export const deleteAdminsAction = (id) => (dispatch, getState, getFirestore) => {
    const firestore = getFirestore();

    firestore.collection('Admin').doc(id).delete()
    .then(() => {
        // console.log('dd')
    //   window.location.href = '/admin/admins';
    });
};