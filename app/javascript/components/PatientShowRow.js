import React from 'react';
import PropTypes from 'prop-types';
import {Form, Input, Label, Button} from 'reactstrap';
import { Link } from 'react-router-dom';

class PatientShowRow extends React.Component {
  constructor(props) {
    super(props); 
  }

  render() {
    
    return (
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.name}</td>
        <td>{this.props.number}</td>
        <td>{this.props.description}</td>
      </tr>
    );
  }
}

PatientShowRow.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  number: PropTypes.number,
  description: PropTypes.string,

};
export default PatientShowRow;
