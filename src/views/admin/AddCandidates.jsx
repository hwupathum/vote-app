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
import CandidateForm from "components/Forms/CandidateForm.jsx"

// actions
import {addCandidateAction} from "../../store/actions/electionsActions.jsx"

import { firestoreConnect, isLoaded } from "react-redux-firebase";
import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";

const electionId = new URLSearchParams(window.location.search).get('eid');

class AddCandidate extends React.Component {
    handleSubmit = values => {
        // console.log(electionId)
        this.props.addCandidate(values, electionId);
    }
	render() {
		const {config} = this.props;
		if(!isLoaded(config)) return null;
		return (
		<>
			<Header />
			{/* Page content */}
			<Container className="mt--7" fluid>
				<Row>
					<div className="col">
						<CandidateForm title="Add Admins" config={config.config_main} onSubmit={this.handleSubmit} initialValues={null} electionId={electionId}/>
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
		config: state.firestore.data.Config,
	}
};

const mapDispatchToProps = dispatch => ({
    addCandidate: bindActionCreators(addCandidateAction, dispatch),
  });

export default compose(
	connect(mapStateToProps,mapDispatchToProps),
	firestoreConnect(['Config'])
)(AddCandidate);