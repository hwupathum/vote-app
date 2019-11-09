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
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  UncontrolledTooltip
} from "reactstrap";
// core components

class SimpleTable extends React.Component {
  render() {
		const { title, columns, rows } = this.props;
    return (
      <>
				<Card className="shadow">
					<CardHeader className="border-0">
						<h3 className="mb-0">{ title }</h3>
					</CardHeader>
					<Table className="align-items-center table-flush" responsive>
						<thead className="thead-light">
							<tr>
								{columns.map(title => 
									<th scope="col" key={Math.random()}>{ title }</th>
								)}
								<th scope="col" />
							</tr>
						</thead>
						<tbody>
						{rows.map(row => 
							<React.Fragment key={Math.random()}>
								<tr>
									{row}
									{/* <td className="text-right">
										<UncontrolledDropdown>
											<DropdownToggle
												className="btn-icon-only text-light"
												href="#pablo"
												role="button"
												size="sm"
												color=""
												onClick={e => e.preventDefault()}
											>
												<i className="fas fa-ellipsis-v" />
											</DropdownToggle>
											<DropdownMenu className="dropdown-menu-arrow" right>
												<DropdownItem
													href="#pablo"
													onClick={e => e.preventDefault()}
												>
													Action
												</DropdownItem>
												<DropdownItem
													href="#pablo"
													onClick={e => e.preventDefault()}
												>
													Another action
												</DropdownItem>
												<DropdownItem
													href="#pablo"
													onClick={e => e.preventDefault()}
												>
													Something else here
												</DropdownItem>
											</DropdownMenu>
										</UncontrolledDropdown>
									</td> */}
							</tr>
							</React.Fragment>
						)}
						</tbody>
					</Table>
					<CardFooter className="py-4">	</CardFooter>
				</Card>
      </>
    );
  }
}

export default SimpleTable;
