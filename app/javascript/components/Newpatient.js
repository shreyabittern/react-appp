import React from "react"
import PropTypes from "prop-types"
import PatientListRow from './PatientListRow';
import { connect } from 'react-redux';
import { patientActions } from '_actions';
import {Form, Input, Label, Button} from 'reactstrap';

class Newpatient extends React.Component {
	constructor(props) {
    super(props); 
    this.state = { data: [] };
    this.onSort = this.onSort.bind(this)

    this.state = {
      patient: {
        first_name: '',
        last_name: '',
        number: '',
        loaded: 0
      },
      submitted: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.goBack = this.goBack.bind(this);

	}

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ submitted: true });
    const { patient } = this.state;
    this.props.createPatient(patient);
    // if (student.first_name && student.middle_name && student.last_name && student.image && student.dob && student.gender && student.handicaped && student.blood_group && student.standard && student.medium && student.enrollment_no) {
    //   this.props.createStudent(student);
    // }
  }

  handleChange(event) {
    const { name, value } = event.target;
    const { patient } = this.state;
    this.setState({
        patient: { ...patient, [name]: value }
    });
  }

  onSort(event, sortKey){
    this.setState({ data: this.props.patients})
    const data = this.props.patients;
    data.sort((a,b) => a[sortKey].toString().localeCompare(b[sortKey], undefined, {'numeric': true}))

    this.setState({ data: data})
  }
  render () {
    const { patient, submitted } = this.state;
    return (
      <div> 
        <Form onSubmit={this.handleSubmit}>
          <Label for="fname">First name:</Label>
          <Input
            type="text"
            name="first_name"
            placeholder="First Name"
            value={patient.first_name} onChange={this.handleChange}  autoFocus
          /><br/>
          <Label for="lname">Last name:</Label>
          <Input
            type="text"
            name="last_name"
            placeholder="Last Name"
            value={patient.last_name} onChange={this.handleChange}  autoFocus
          /><br/>
          <Label for="lnumber">Number :</Label>
          <Input
            type="integer"
            name="number"
            placeholder="number"
            value={patient.number} onChange={this.handleChange}  autoFocus
          /><br/>
          <Button type="submit" >Submit</Button>
        </Form> 
      </div>
    )
  }
}
Newpatient.propTypes = {
  patients: PropTypes.array
};
function mapState(state) {
  const { patients } = state.patients;
  return { patients };
}
const actionCreators = {
  createPatient: patientActions.create,
}
export default connect(mapState, actionCreators)(Newpatient);
