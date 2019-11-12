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
import ElectionsTable from "components/AdminComponents/ElectionsTable.jsx"

import { firestoreConnect, isLoaded } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";

class Elections extends React.Component {
	render() {
		const {elections, admins, config, auth} = this.props;
		if(!isLoaded(elections) || !isLoaded(admins) || !isLoaded(config) || !auth.isLoaded) return null;
		const loggedUser = admins.filter(user => user.email === auth.email)[0];
		return (
		<>
			<Header />
			{/* Page content */}
			<Container className="mt--7" fluid>
				<Row>
					<div className="col">
						<ElectionsTable data={elections} config={config.config_main} loggedUser={loggedUser}/>
					</div>
				</Row>
			</Container>
		</>
		);
	}
}
  
const mapStateToProps = (state) => {
	return {
		auth: state.firebase.auth,
		admins: state.firestore.ordered.Admin,
		elections: state.firestore.ordered.Election,
		config: state.firestore.data.Config,
	}
};

export default compose(
	connect(mapStateToProps),
	firestoreConnect(['Admin', 'Election', 'Config'])
)(Elections);