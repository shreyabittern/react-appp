import React from 'react';
import PropTypes from 'prop-types';

class PatientListRow extends React.Component {
  constructor(props) {
    super(props); 
  }

  render() {
    
    return (
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.name}</td>
        <td>{this.props.date}</td>
        <td>{this.props.num}</td>
        <td>{this.props.description}</td>
      </tr>
    );
  }
}

PatientListRow.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  date: PropTypes.string,
  num: PropTypes.number,
  description: PropTypes.string,

};
export default PatientListRow;
