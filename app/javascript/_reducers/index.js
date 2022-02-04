import { combineReducers } from 'redux';

import { alert } from './alert.reducer';
import { patients } from './patients.reducer';
import { newpatient } from './newpatient.reducer';

const rootReducer = combineReducers({
  patients,
  newpatient,
  alert
});


export default rootReducer;