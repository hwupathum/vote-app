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
import AdminsForm from "components/Forms/AdminsForm.jsx"

// actions
import {addAdminsAction} from "../../store/actions/adminsActions.jsx"

import { firestoreConnect, isLoaded } from "react-redux-firebase";
import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";

class AddAdmins extends React.Component {
    handleSubmit = values => {
        this.props.addAdmins(values);
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
						<AdminsForm title="Add Admins" config={config.config_main} onSubmit={this.handleSubmit} initialValues={null}/>
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
    addAdmins: bindActionCreators(addAdminsAction, dispatch),
  });

export default compose(
	connect(mapStateToProps,mapDispatchToProps),
	firestoreConnect(['Config'])
)(AddAdmins);