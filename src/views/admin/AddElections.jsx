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
import {addElectionsAction} from "../../store/actions/electionsActions.jsx"

import { firestoreConnect, isLoaded } from "react-redux-firebase";
import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
import moment from "moment";

class AddElections extends React.Component {
    handleSubmit = values => {
        const voteStart = moment(values.voteStart).toDate()
        const voteEnd = moment(values.voteEnd).toDate()
        const candidateStart = moment(values.candidateStart).toDate()
        const candidateEnd = moment(values.candidateEnd).toDate()
        console.group(voteStart)
        // const division = parseInt(values.division)
        this.props.addElections({...values, voteStart, voteEnd, candidateStart, candidateEnd});
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
						<ElectionsForm title="Add Election" config={config.config_main} onSubmit={this.handleSubmit} initialValues={null}/>
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
    addElections: bindActionCreators(addElectionsAction, dispatch),
  });

export default compose(
	connect(mapStateToProps,mapDispatchToProps),
	firestoreConnect(['Config'])
)(AddElections);