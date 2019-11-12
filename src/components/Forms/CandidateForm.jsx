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
  Button,
  // Container,
  Row,
  Col
} from "reactstrap";
import { withFirebase } from "react-redux-firebase";

// core components
// import VotersForm from "components/Forms/Voters.jsx"

// import { firestoreConnect, isLoaded } from "react-redux-firebase";
// import { compose } from "redux";
// import { connect } from "react-redux";


class CandidateForm extends React.Component {
    constructor(props) {
      super(props);

      this.state = props.initValues == null ?
        {
          name: '',
          NIC: '',
          party: '',
          symbol: null
        } : props.initValues;
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleUpload = this.handleUpload.bind(this);
    }
  
    handleChange(event) {
      this.setState({[event.target.name]: event.target.value});
    }
  
    handleSubmit(event) {
      event.preventDefault();
      this.props.onSubmit(this.state)
    }

    handleUpload(event) {
        // this.props.setLoading(true);
        const selectedFile = event.target.files[0];
        // !checkForImages(selectedFile.name) ? setLoading(false) : null;
        // generate random file name
        const newFileName = Math.random().toString(36).substring(2);
        const extension = selectedFile.name.split('.').pop();
        console.log(this.props.firebase);
        // upload the file to the database
        this.props.firebase.storage()
            .ref(`/Election/${this.props.electionId}/Symbols/${newFileName}.${extension}`)
            .put(selectedFile)
            .then(snapshot => {
                const fileName = snapshot.ref.name;
                snapshot.ref.getDownloadURL()
                .then(url => {
                    console.log('Uploaded');
                    this.setState({symbol : url})
                    // this.props.handleUpload(url);
                    // this.props.setLoading(false);
                });
            });
            // this.props.handleUpload('url');
    };
  
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
                      htmlFor="input-NIC"
                    >
                      NIC
                    </label>
                    <Input
                      className="form-control-alternative"
                      // defaultValue={this.props.NIC}
                      value={this.state.NIC}
                      name="NIC"
                      id="input-NIC"
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
                      Party
                    </label>
                    <Input
                      className="form-control-alternative"
                      value={this.state.party}
                      name="party"
                      id="input-first-name"
                      onChange={this.handleChange}
                      type="text"
                      required
                    />
                  </FormGroup>
                </Col>
                <Col lg="6">
                  {/* <FormGroup> */}
                    <label
                      className="form-control-label"
                      htmlFor="input-first-name"
                    >
                      Symbol
                    </label><br/>
                    <Button
                        className="form-control-alternative"
                        onClick={() => this.imageInput.click()}
                        id="input-first-name"
                        style={{color: 'white', backgroundColor: '#5E72E4', fontSize: 14, fontWeight: 600, width: 'auto' }}
                    >Upload File</Button>
                    <input
                      className="form-control-alternative"
                      style={{ display: 'none' }}
                      ref={imageInput => this.imageInput = imageInput}
                      onChange={this.handleUpload}
                      id="input-first-name"
                      type="file"
                    />
                  {/* </FormGroup> */}
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

export default withFirebase(CandidateForm)