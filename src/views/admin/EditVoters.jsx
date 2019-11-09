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
import VotersForm from "components/Forms/VotersForm.jsx"

// actions
import {edidVotersAction} from "../../store/actions/votersActions.jsx"

import { firestoreConnect, isLoaded } from "react-redux-firebase";
import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
import moment from "moment";

class AddVoters extends React.Component {
    //  get id of the current voter
    voterId = new URLSearchParams(window.location.search).get('id');

    handleSubmit = values => {
        const DOB = moment(values.DOB).toDate()
        const division = parseInt(values.division)
        this.props.editVoter({...values, DOB, division}, this.voterId);
        // console.log({...values, DOB, division})
    }
	render() {
		const {config, voters} = this.props;
        if(!isLoaded(config) || !isLoaded(voters)) return null;
        const initValues = voters[this.voterId];
        const DOB = moment(initValues.DOB.toMillis()).format("YYYY-MM-DD")
        // console.log(DOB)
		return (
		<>
			<Header />
			{/* Page content */}
			<Container className="mt--7" fluid>
				<Row>
					<div className="col">
						<VotersForm title="Edit Voters" config={config.config_main} onSubmit={this.handleSubmit} initValues={{...initValues, DOB}}/>
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
		voters: state.firestore.data.Voter,
	}
};

const mapDispatchToProps = dispatch => ({
    editVoter: bindActionCreators(edidVotersAction, dispatch),
  });

export default compose(
	connect(mapStateToProps,mapDispatchToProps),
	firestoreConnect(['Config', 'Voter'])
)(AddVoters);