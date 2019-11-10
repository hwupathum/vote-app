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
import {deleteAdminsAction} from "../../store/actions/adminsActions.jsx"

import {
	DropdownMenu,
	DropdownItem,
	UncontrolledDropdown,
	DropdownToggle,
  } from "reactstrap";

const createData = (props) => props.data.map(row => 
	<React.Fragment key={Math.random()}>
		<th scope="row">{row.name}</th>
		<td>{row.email}</td>
		<td>{props.config.adminType[row.type]}</td>
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
					href={'/admin/editadmins?id='+row.id}
				>
					Edit
				</DropdownItem>
				<DropdownItem
					href="#"
					onClick={() => props.deleteAdmin(row.id)}
				>
					Delete
				</DropdownItem>
			</DropdownMenu>
		</UncontrolledDropdown>
	</td>
	</React.Fragment>
	);

class AdminsTable extends React.Component {
  render() {
		// const {data} = this.props;
		const colNames = ['Full Name','Email','Type'];
		// createData(data)
    return (
      <>
        <SimpleTable title="Admins" columns={colNames} rows={createData(this.props)} addLink="/admin/addadmins"/>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
    deleteAdmin: bindActionCreators(deleteAdminsAction, dispatch),
});

export default connect(null,mapDispatchToProps)(AdminsTable);
