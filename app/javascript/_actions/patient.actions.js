import { patientConstants } from '../_constants';
import { newpatientConstants } from '../_constants';
import { patientService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const patientActions = {    
    getAll,
    create
};



function getAll() {
    return dispatch => {
        dispatch(request());

        patientService.getAll()
            .then(
                patients => {
                    dispatch(success(patients))
                },
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: patientConstants.GETALL_REQUEST } }
    function success(patients) { return { type: patientConstants.GETALL_SUCCESS, patients } }
    function failure(error) { return { type: patientConstants.GETALL_FAILURE, error } }
}

function create(patient) {
  return dispatch => {
    dispatch(request());
    patientService.create(patient)
    .then(
        patient => {
            dispatch(success(patient));
            // <Link to={{
            //           pathname: '/home',
            //         }}> Your Page </Link>

            // history.push('/');
            //  window.location = document."/http://localhost:3000";
            // location.reload("/home");
            window.location.reload("/http://localhost:3000");
            console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&", patient);
        },
        error => dispatch(failure(error.toString()))
    );
  };
  function request() { return { type: newpatientConstants.GETALL_REQUEST } }
  function success(patient) { return { type: newpatientConstants.GETALL_SUCCESS, patient } }
  function failure(error) { return { type: newpatientConstants.GETALL_FAILURE, error } }
}
