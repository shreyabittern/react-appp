import React from "react"
import PropTypes from "prop-types"
import PatientListRow from './PatientListRow';
import { connect } from 'react-redux';
import { patientActions } from '_actions';

class Patient extends React.Component {
	constructor(props) {
    super(props); 
    this.state = { data: [] };
    this.onSort = this.onSort.bind(this)  
	}

  componentWillMount() {
     this.props.getPatients();
  }

  onSort(event, sortKey){
    this.setState({ data: this.props.patients})
    const data = this.props.patients;
    data.sort((a,b) => a[sortKey].toString().localeCompare(b[sortKey], undefined, {'numeric': true}))

    this.setState({ data: data})
  }

  render () {
    const { patients } = this.props;
    if (this.state.data.length > 0){
      return (
        <div> 
          <table entries="10" className="table table-bordered table-hover table-striped dataTable">
           <thead data-test="datatable-head">
              <tr>
                 <th>ID</th>
                 <th onClick={e => this.onSort(e, 'name')}>Name</th>
                 <th onClick={e => this.onSort(e, 'number')}>Number</th>
                 <th >Description</th>
              </tr>
           </thead>
           <tbody data-test="table-body">    

             {this.state.data && this.state.data.map((patient, index) => (
              <PatientListRow
                key={index}
                index={index}
                id={patient.id}
                name={patient.name}
                number={patient.number}
                description={patient.description}
              />
             ))}
           </tbody>
           
          
        </table>   
        </div>
      );
    }
    else {
      return (
        <div> 
          <table entries="10" className="table table-bordered table-hover table-striped dataTable">
           <thead data-test="datatable-head">
              <tr>
                 <th>ID</th>
                 <th onClick={e => this.onSort(e, 'name')}>Name</th>
                 <th onClick={e => this.onSort(e, 'number')}>Number</th>
                 <th >Description</th>
              </tr>
           </thead>
           <tbody data-test="table-body">
           {patients && patients.map((patient, index) => (
              <PatientListRow
                key={index}
                index={index}
                id={patient.id}
                name={patient.name}
                number={patient.number}
                description={patient.description}
              />
             ))}           
           </tbody>
          
        </table>   
        </div>
      );
    }
    
  }
}

Patient.propTypes = {
  patients: PropTypes.array
};
function mapState(state) {
    const { patients } = state.patients;
    return { patients };
}

const actionCreators = {
    getPatients: patientActions.getAll,
}

export default connect(mapState, actionCreators)(Patient);
