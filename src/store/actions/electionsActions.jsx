export const addElectionsAction = (data) => (dispatch, getState, getFirestore) => {
    const firestore = getFirestore();
    const voteStart = firestore.Timestamp.fromDate(data.voteStart)
    const voteEnd = firestore.Timestamp.fromDate(data.voteEnd)
    const candidateStart = firestore.Timestamp.fromDate(data.candidateStart)
    const candidateEnd = firestore.Timestamp.fromDate(data.candidateEnd)

    firestore.collection('Election').add({
      ...data, voteStart, voteEnd, candidateStart, candidateEnd
    }).then(() => {
      window.location.href = '/admin/elections';
    });
};

export const editElectionsAction = (data,id) => (dispatch, getState, getFirestore) => {
    const firestore = getFirestore();
    const voteStart = firestore.Timestamp.fromDate(data.voteStart)
    const voteEnd = firestore.Timestamp.fromDate(data.voteEnd)
    const candidateStart = firestore.Timestamp.fromDate(data.candidateStart)
    const candidateEnd = firestore.Timestamp.fromDate(data.candidateEnd)

    firestore.collection('Election').doc(id).update({
      ...data, voteStart, voteEnd, candidateStart, candidateEnd
    }).then(() => {
      window.location.href = '/admin/elections';
    });
};

export const addCandidateAction = (data, eid) => (dispatch, getState, getFirestore) => {
  const firestore = getFirestore();

  firestore.collection('Election').doc(eid).collection('Candidate').add({
    ...data
  }).then(() => {
    window.history.back()
  });
};

export const deleteCandidatesAction = (eid, id) => (dispatch, getState, getFirestore) => {
  const firestore = getFirestore();

  firestore.collection('Election').doc(eid).collection('Candidate').doc(id).delete()
  .then(() => {
    window.location.reload()
  });
};

