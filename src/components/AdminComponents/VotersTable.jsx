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
import SimpleTable from "components/Tables/Table.jsx"
import { bindActionCreators } from "redux";
import moment from "moment";
import { connect } from "react-redux";
import {deleteVotersAction} from "../../store/actions/votersActions.jsx"

import {
	DropdownMenu,
	DropdownItem,
	UncontrolledDropdown,
	DropdownToggle,
  } from "reactstrap";

const createData = (props) => props.data.map(row => 
	<React.Fragment key={Math.random()}>
		<th scope="row">{row.name}</th>
		<td>{row.NIC}</td>
		<td>{row.sex}</td>
		<td>{props.config.division[row.division]}</td>
		<td>{moment(row.DOB.toMillis()).format('MM/DD/YYYY')}</td>
		<td className="text-right">
		<UncontrolledDropdown>
			<DropdownToggle
				className="btn-icon-only text-light"
				href="#"
				role="button"
				size="sm"
				color=""
				onClick={e => e.preventDefault()}
			>
				<i className="fas fa-ellipsis-v" />
			</DropdownToggle>
			<DropdownMenu className="dropdown-menu-arrow" right>
				<DropdownItem
					href={'/admin/editvoters?id='+row.id}
				>
					Edit
				</DropdownItem>
				<DropdownItem
					href="#"
					onClick={() => props.deleteVoter(row.id)}
				>
					Delete
				</DropdownItem>
			</DropdownMenu>
		</UncontrolledDropdown>
	</td>
	</React.Fragment>
	);

class VotersTable extends React.Component {
  render() {
		// const {data} = this.props;
		const colNames = ['Full Name','NIC Number','Gender','Division','Date of Birth'];
		// createData(data)
    return (
      <>
        <SimpleTable title="Voters" columns={colNames} rows={createData(this.props)} addLink="/admin/addvoters"/>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
    deleteVoter: bindActionCreators(deleteVotersAction, dispatch),
});

export default connect(null,mapDispatchToProps)(VotersTable);
