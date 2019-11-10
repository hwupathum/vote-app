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
		<td>{moment(row.voteStart.toMillis()).format('MM/DD/YYYY HH:mm')}</td>
		<td>{moment(row.voteEnd.toMillis()).format('MM/DD/YYYY HH:mm')}</td>
		<td>{moment(row.candidateStart.toMillis()).format('MM/DD/YYYY HH:mm')}</td>
		<td>{moment(row.candidateEnd.toMillis()).format('MM/DD/YYYY HH:mm')}</td>
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
					href={'/admin/editElections?id='+row.id}
				>
					Edit
				</DropdownItem>
                <DropdownItem
					href={'/admin/candidates?id='+row.id}
				>
					View Candidates
				</DropdownItem>
			</DropdownMenu>
		</UncontrolledDropdown>
	</td>
	</React.Fragment>
	);

class VotersTable extends React.Component {
  render() {
		// const {data} = this.props;
		const colNames = ['Election Name' ,'Starting Time', 'End Time', 'Nominaton Start', 'Nomination End'];
		// createData(data)
    return (
      <>
        <SimpleTable title="Elections" columns={colNames} rows={createData(this.props)} addLink="/admin/addelections"/>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
    deleteVoter: bindActionCreators(deleteVotersAction, dispatch),
});

export default connect(null,mapDispatchToProps)(VotersTable);
