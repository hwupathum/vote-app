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
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  // Container,
  Row,
  Col
} from "reactstrap";

// core components
// import VotersForm from "components/Forms/Voters.jsx"

// import { firestoreConnect, isLoaded } from "react-redux-firebase";
// import { compose } from "redux";
// import { connect } from "react-redux";


class VotersForm extends React.Component {
    constructor(props) {
      super(props);

      this.state = props.initValues == null ?
        {
          name: '',
          NIC: '',
          DOB: '2000-01-01',
          division: 0,
          sex: '',
        } : props.initValues;
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({[event.target.name]: event.target.value});
    }
  
    handleSubmit(event) {
      event.preventDefault();
      this.props.onSubmit(this.state)
    }
  
    render() {
      const {config,title} = this.props;
      return (
        <>
        <Card className="bg-secondary shadow">
        <CardHeader className="bg-white border-0">
          <Row className="align-items-center">
            <Col xs="8">
              <h3 className="mb-0">{title}</h3>
            </Col>
          </Row>
        </CardHeader>
        <CardBody>
          <Form onSubmit={this.handleSubmit}>
            <div className="pl-lg-4">
              <Row>
                <Col lg="6">
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="input-name"
                    >
                      Name
                    </label>
                    <Input
                      className="form-control-alternative"
                      // defaultValue={this.props.name}
                      value={this.state.name}
                      id="input-name"
                      name="name"
                      type="text"
                      onChange={this.handleChange}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="input-email"
                    >
                      NIC Number
                    </label>
                    <Input
                      className="form-control-alternative"
                      // defaultValue={this.props.NIC}
                      value={this.state.NIC}
                      name="NIC"
                      id="input-email"
                      type="text"
                      onChange={this.handleChange}
                      required
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col lg="6">
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="input-first-name"
                    >
                      Gender
                    </label>
                    <Input
                      className="form-control-alternative"
                      // defaultValue={this.props.gender}
                      value={this.state.sex}
                      name="sex"
                      id="input-first-name"
                      onChange={this.handleChange}
                      type="select"
                      required
                    >
                      <option></option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="input-division"
                    >
                      Division
                    </label>
                    <Input
                      className="form-control-alternative"
                      // defaultValue={this.props.division}
                      value={this.state.division}
                      name="division"
                      id="input-division"
                      onChange={this.handleChange}
                      type="select"
                      required
                    >
                      <option></option>
                      {config.division.map((div,index) => 
                        <option key={index} value={index}>{div}</option>
                      )}
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
              <Col lg="6">
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="input-dob"
                    >
                      Date of Birth
                    </label>
                    <Input
                      className="form-control-alternative"
                      // defaultValue={this.props.DOB}
                      value={this.state.DOB}
                      name="DOB"
                      id="input-dob"
                      onChange={this.handleChange}
                      type="date"
                      required
                    />
                  </FormGroup>
                </Col>
              </Row>
            </div>
            <Col xs="2">
              <Input type="submit" style={{color: 'white', backgroundColor: '#5E72E4', fontSize: 14, fontWeight: 600, width: 'auto' }}/>
            </Col>
          </Form>
        </CardBody>
      </Card>
      </>
      );
    }
  }

export default VotersForm