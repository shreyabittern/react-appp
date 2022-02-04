import { newpatientConstants } from '../_constants';
const initialState = [];

export function newpatient(state = initialState, action) {
  switch (action.type) {
    case newpatientConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case newpatientConstants.GETALL_SUCCESS:
      return {
        newpatients: action.newpatients
      };
    case newpatientConstants.GETALL_FAILURE:
      return { 
        error: action.error
      };
    case newpatientConstants.DELETE_REQUEST:
      // add 'deleting:true' property to newpatient being deleted
      return {
        ...state,
        newpatients: state.newpatients.map(newpatient =>
          newpatient.id === action.id
            ? { ...newpatient, deleting: true }
            : newpatient
        )
      };
    case newpatientConstants.DELETE_SUCCESS:
      // remove deleted newpatient from state
      return {
        newpatients: state.newpatients.filter(newpatient => newpatient.id !== action.id)
      };
    case newpatientConstants.DELETE_FAILURE:
      // remove 'deleting:true' property and add 'deleteError:[error]' property to newpatient 
      return {
        ...state,
        newpatients: state.newpatients.map(newpatient => {
          if (newpatient.id === action.id) {
            // make copy of newpatient without 'deleting:true' property
            const { deleting, ...newpatientCopy } = newpatient;
            // return copy of newpatient with 'deleteError:[error]' property
            return { ...newpatientCopy, deleteError: action.error };
          }

          return newpatient;
        })
      };
    default:
      return state
  }
}