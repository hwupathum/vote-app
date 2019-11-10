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
		const {elections, config} = this.props;
		if(!isLoaded(elections) || !isLoaded(config)) return null;
		return (
		<>
			<Header />
			{/* Page content */}
			<Container className="mt--7" fluid>
				<Row>
					<div className="col">
						<ElectionsTable data={elections} config={config.config_main}/>
					</div>
				</Row>
			</Container>
		</>
		);
	}
}
  
const mapStateToProps = (state) => {
	return {
		elections: state.firestore.ordered.Election,
		config: state.firestore.data.Config,
	}
};

export default compose(
	connect(mapStateToProps),
	firestoreConnect(['Election', 'Config'])
)(Elections);