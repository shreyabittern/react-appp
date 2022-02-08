import React from "react"
import PropTypes from "prop-types"
import PatientShowRow from './PatientShowRow';
import { connect } from 'react-redux';
import { patientActions } from '_actions';
import queryString from 'query-string'
import { useParams } from "react-router-dom"

class Patientshow extends React.Component {
	constructor(props) {
    super(props); 
    this.state = { data: [] };
    this.onSort = this.onSort.bind(this)  
	}

  componentDidMount(prevProps) {
   this.props.getPatientshow(window.location.pathname.split("/")[2]);
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
              <PatientShowRow
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
              <PatientShowRow
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

Patientshow.propTypes = {
  patients: PropTypes.array
};
function mapState(state) {

    const { patients, patient_id } = state.patients;
    return { patients, patient_id };
}

const actionCreators = {
    getPatientshow: patientActions.show,
}

export default connect(mapState, actionCreators)(Patientshow);
