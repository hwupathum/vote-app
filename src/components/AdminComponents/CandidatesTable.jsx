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
import { connect } from "react-redux";
import {deleteCandidatesAction} from "../../store/actions/electionsActions.jsx"

import {
	DropdownMenu,
	DropdownItem,
	UncontrolledDropdown,
    DropdownToggle,
    Media
  } from "reactstrap";

const createData = (props) => props.data.map(row => 
	<React.Fragment key={Math.random()}>
		<th scope="row">{row.name}</th>
		<td>{row.NIC}</td>
		<td>{row.party}</td>
		<td>
            <Media className="align-items-center">
                <img
                    className="avatar rounded-circle mr-3"
                    alt=""
                    src={row.symbol}
                />
            </Media>
        </td>
        {props.loggedUser.type !== 'LLA' ?
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
				{/* <DropdownItem
					href={'/admin/editcandidate?eid='+props.id+'&id='+row.id}
				>
					Edit
				</DropdownItem> */}
				<DropdownItem
					href="#"
					onClick={() => props.deleteCandidate(props.id,row.id)}
				>
					Delete
				</DropdownItem>
			</DropdownMenu>
		</UncontrolledDropdown>
	</td> : null}
	</React.Fragment>
	);

class VotersTable extends React.Component {
  render() {
    // const {id, ...props} = this.props;
    const colNames = ['Full Name','NIC Number','Party','Symbol'];
    // console.log(this.props.loggedUser)
    return (
      <>
        <SimpleTable title="Candidates" columns={colNames} rows={createData(this.props)} addLink={"/admin/addcandidate?eid="+this.props.id} disableAdd={this.props.loggedUser.type === 'LLA' ? true : false}/>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
    deleteCandidate: bindActionCreators(deleteCandidatesAction, dispatch),
});

export default connect(null,mapDispatchToProps)(VotersTable);
