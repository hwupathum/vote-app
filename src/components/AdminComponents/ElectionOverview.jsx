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

import {
    Card,
    CardHeader,
    CardBody,
    NavItem,
    NavLink,
    Nav,
    Row,
    Col
} from "reactstrap";
import moment from "moment";
import Timer from "react-compound-timer"

class ElectionOverview extends React.Component {
    render() {
        const { name, voteStart, voteEnd, candidateStart, candidateEnd, id } = this.props.data;
        const now = moment()
        const voteStartAt = moment(voteStart.toMillis())
        const voteEndAt = moment(voteEnd.toMillis())
        const candidateStartAt = moment(candidateStart.toMillis())
        const candidateEndAt = moment(candidateEnd.toMillis())
        // const colNames = ['Election Name' ,'Starting Time', 'End Time', 'Nominaton Start', 'Nomination End'];
        // createData(data)
        const voteStatus = now.isBefore(voteStartAt) ? 0 : now.isBetween(voteStartAt, voteEndAt) ? 1 : 2;
        const candidateStatus = now.isBefore(candidateStartAt) ? 0 : now.isBetween(candidateStartAt, candidateEndAt) ? 1 : 2;
        const voteTimer = voteStatus === 0 ? moment.duration(voteStartAt.diff(now)).asMilliseconds() : voteStatus === 1 ? moment.duration(voteEndAt.diff(now)).asMilliseconds() : 0;
        const candidateTimer = candidateStatus === 0 ? moment.duration(candidateStartAt.diff(now)).asMilliseconds() : candidateStatus === 1 ? moment.duration(candidateEndAt.diff(now)).asMilliseconds() : 0;
        console.log(id)
        return (
            <>
                <Row>
                    <Col className="mb-5 mb-xl-0">
                        <Card className="bg-gradient-default shadow">
                            <CardHeader className="bg-transparent">
                                <Row className="align-items-center">
                                    <div className="col">
                                        <h6 className="text-uppercase text-light ls-1 mb-1">
                                            Election
                      </h6>
                                        <h1 className="text-white mb-0">{name}</h1>
                                    </div>
                                    <div className="col">
                                        <Nav className="justify-content-end" pills>
                                            <NavItem>
                                                <NavLink
                                                    className="py-2 px-3"
                                                    href={"/admin/candidates?id="+id}
                                                >
                                                    <span className="d-none d-md-block">View Candidates</span>
                                                    <span className="d-md-none">C</span>
                                                </NavLink>
                                            </NavItem>
                                            {/* <NavItem>
                                                <NavLink
                                                    className="py-2 px-3"
                                                    data-toggle="tab"
                                                    href="#pablo"
                                                >
                                                    <span className="d-none d-md-block">Week</span>
                                                    <span className="d-md-none">W</span>
                                                </NavLink>
                                            </NavItem> */}
                                        </Nav>
                                    </div>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                <Row className="align-items-center">
                                    <div className="col">
                                        <h2 className="text-white">{candidateStatus === 0 ? 'Nominations Begins In' : candidateStatus === 1 ? 'Nominations Ends In' : 'Nomination Ended'}</h2>
                                        {/* <h2 className="text-white"> */}
                                        <Timer
                                            initialTime={candidateTimer}
                                            direction="backward"
                                        >
                                            {() => (
                                                <Row>
                                                    <div className="col">
                                                    <h1 className="text-white"><Timer.Days /></h1> <h3 className="text-white">days</h3>
                                                    </div>
                                                    <div className="col">
                                                    <h1 className="text-white"><Timer.Hours /></h1> <h3 className="text-white">hours</h3> 
                                                    </div>
                                                    <div className="col">
                                                    <h1 className="text-white"><Timer.Minutes /></h1> <h3 className="text-white">minutes</h3> 
                                                    </div>
                                                    <div className="col">
                                                    <h1 className="text-white"><Timer.Seconds /></h1> <h3 className="text-white">seconds</h3>
                                                    </div>
                                                </Row>
                                            )}
                                        </Timer>
                                        {/* </h2> */}
                                    </div>
                                    <div className="col">
                                        <h2 className="text-white">{voteStatus === 0 ? 'Election Begins In' : voteStatus === 1 ? 'Election Ends In' : 'Election Ended'}</h2>
                                        <h2 className="text-white">
                                        <Timer
                                            initialTime={voteTimer}
                                            direction="backward"
                                        >
                                            {() => (
                                                <Row>
                                                <div className="col">
                                                <h1 className="text-white"><Timer.Days /></h1> <h3 className="text-white">days</h3>
                                                </div>
                                                <div className="col">
                                                <h1 className="text-white"><Timer.Hours /></h1> <h3 className="text-white">hours</h3> 
                                                </div>
                                                <div className="col">
                                                <h1 className="text-white"><Timer.Minutes /></h1> <h3 className="text-white">minutes</h3> 
                                                </div>
                                                <div className="col">
                                                <h1 className="text-white"><Timer.Seconds /></h1> <h3 className="text-white">seconds</h3>
                                                </div>
                                            </Row>
                                            )}
                                        </Timer>
                                        </h2>
                                    </div>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <br />
            </>
        );
    }
}

export default ElectionOverview;
