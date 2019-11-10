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
import AdminsTable from "components/AdminComponents/AdminsTable.jsx"

import { firestoreConnect, isLoaded } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";

class Admins extends React.Component {
	render() {
		const {admins, config} = this.props;
		if(!isLoaded(admins) || !isLoaded(config)) return null;
		return (
		<>
			<Header />
			{/* Page content */}
			<Container className="mt--7" fluid>
				<Row>
					<div className="col">
						<AdminsTable data={admins} config={config.config_main}/>
					</div>
				</Row>
			</Container>
		</>
		);
	}
}
  
const mapStateToProps = (state) => {
	return {
		admins: state.firestore.ordered.Admin,
		config: state.firestore.data.Config,
	}
};

export default compose(
	connect(mapStateToProps),
	firestoreConnect(['Admin', 'Config'])
)(Admins);