import { patientConstants } from '../_constants';
const initialState = [];

export function patients(state = initialState, action) {
  switch (action.type) {
    case patientConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case patientConstants.GETALL_SUCCESS:
      return {
        patients: action.patients
      };
    case patientConstants.GETALL_FAILURE:
      return { 
        error: action.error
      };
    case patientConstants.DELETE_REQUEST:
      // add 'deleting:true' property to patient being deleted
      return {
        ...state,
        patients: state.patients.map(patient =>
          patient.id === action.id
            ? { ...patient, deleting: true }
            : patient
        )
      };
    case patientConstants.DELETE_SUCCESS:
      // remove deleted patient from state
      return {
        patients: state.patients.filter(patient => patient.id !== action.id)
      };
    case patientConstants.DELETE_FAILURE:
      // remove 'deleting:true' property and add 'deleteError:[error]' property to patient 
      return {
        ...state,
        patients: state.patients.map(patient => {
          if (patient.id === action.id) {
            // make copy of patient without 'deleting:true' property
            const { deleting, ...patientCopy } = patient;
            // return copy of patient with 'deleteError:[error]' property
            return { ...patientCopy, deleteError: action.error };
          }

          return patient;
        })
      };
    default:
      return state
  }
}