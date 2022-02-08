import React from 'react';
import PropTypes from 'prop-types';
import {Form, Input, Label, Button} from 'reactstrap';
import { Link } from 'react-router-dom';
import { patientActions } from '_actions';
import { connect } from 'react-redux';

class PatientListRow extends React.Component {
  constructor(props) {
    super(props); 
  }

  patientDelete = (id) => {
    this.props.getA(id);
  }

  render() {
    
    return (
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.name}</td>
        <td>{this.props.number}</td>
        <td>{this.props.description}</td>
        <td><a href={"/patients/"+this.props.id}> Show </a></td>
        <td><a href={"/patients/"+this.props.id+"/edit"}> edit </a></td>
        <Button color="primary" size="sm" onClick={() => {if(window.confirm('Delete the item?')){this.patientDelete(this.props.id)};}} >Delete</Button>
      </tr>
    );
  }
}

PatientListRow.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  number: PropTypes.number,
  description: PropTypes.string,

};


function mapState(state) {
    const { patients } = state.patients;
    return { patients };
}

const actionCreators = {
    getA: patientActions.delete_data,
}

export default connect(mapState, actionCreators)(PatientListRow);

