/*!

=========================================================
* Argon Dashboard React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// reactstrap components
import { Container, Row } from "reactstrap";

// core components
import Header from "components/Headers/Header.jsx";
import ElectionsForm from "components/Forms/ElectionsForm.jsx"

// actions
import {editElectionsAction} from "../../store/actions/electionsActions.jsx"

import { firestoreConnect, isLoaded } from "react-redux-firebase";
import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
import moment from "moment";

class EditElections extends React.Component {

    electionId = new URLSearchParams(window.location.search).get('id');

    handleSubmit = values => {
        const voteStart = moment(values.voteStart).toDate()
        const voteEnd = moment(values.voteEnd).toDate()
        const candidateStart = moment(values.candidateStart).toDate()
        const candidateEnd = moment(values.candidateEnd).toDate()
        // const division = parseInt(values.division)
        this.props.editElections({...values, voteStart, voteEnd, candidateStart, candidateEnd}, this.electionId);
    }
	render() {
        const {config, election} = this.props;
        if(!isLoaded(config) || !isLoaded(election)) return null;
        const initValues = election[this.electionId];
        const voteStart = moment(initValues.voteStart.toMillis()).format("YYYY-MM-DDTHH:mm")
        const voteEnd = moment(initValues.voteEnd.toMillis()).format("YYYY-MM-DDTHH:mm")
        const candidateStart = moment(initValues.candidateStart.toMillis()).format("YYYY-MM-DDTHH:mm")
        const candidateEnd = moment(initValues.candidateEnd.toMillis()).format("YYYY-MM-DDTHH:mm")
		return (
		<>
			<Header />
			{/* Page content */}
			<Container className="mt--7" fluid>
				<Row>
					<div className="col">
						<ElectionsForm title="Edit Election" config={config.config_main} onSubmit={this.handleSubmit} initValues={{...initValues, voteStart, voteEnd, candidateEnd, candidateStart}}/>
					</div>
				</Row>
			</Container>
		</>
		);
	}
}
  
const mapStateToProps = (state) => {
	return {
		// auth: state.auth.key,
		election: state.firestore.data.Election,
		config: state.firestore.data.Config,
	}
};

const mapDispatchToProps = dispatch => ({
    editElections: bindActionCreators(editElectionsAction, dispatch),
  });

export default compose(
	connect(mapStateToProps,mapDispatchToProps),
	firestoreConnect(['Config', 'Election'])
)(EditElections);