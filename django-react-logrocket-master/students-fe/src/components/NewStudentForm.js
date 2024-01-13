import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import { API_URL } from "../constants";

class NewStudentForm extends React.Component {
  state = {
    pk: 0,
    name: "",
    email: "",
    document: null, // Updated to handle file uploads
    phone: ""
  };

  componentDidMount() {
    if (this.props.student) {
      const { pk, name, document, email, phone } = this.props.student;
      this.setState({ pk, name, document, email, phone });
    }
  }

  onChange = (e) => {
    // If the input is a file input, set the 'document' state to the file
    if (e.target.type === "file") {
      this.setState({ [e.target.name]: e.target.files[0] });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  createStudent = (e) => {
    e.preventDefault();
    const formData = new FormData(); // Use FormData to handle file uploads
    formData.append("name", this.state.name);
    formData.append("email", this.state.email);
    formData.append("document", this.state.document); // Append the image file
    formData.append("phone", this.state.phone);

    axios.post(API_URL, formData).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editStudent = (e) => {
    e.preventDefault();
    const formData = new FormData(); // Use FormData to handle file uploads
    formData.append("name", this.state.name);
    formData.append("email", this.state.email);
    formData.append("document", this.state.document); // Append the image file
    formData.append("phone", this.state.phone);

    axios.put(API_URL + this.state.pk, formData).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = (value) => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.student ? this.editStudent : this.createStudent}>
        <FormGroup>
          <Label for="name">Name:</Label>
          <Input
            type="text"
            name="name"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.name)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email:</Label>
          <Input
            type="email"
            name="email"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.email)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="document">Document (Image):</Label>
          <Input
            type="file"  // Use file input for image uploads
            name="document"
            onChange={this.onChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="phone">Phone:</Label>
          <Input
            type="text"
            name="phone"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.phone)}
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewStudentForm;
