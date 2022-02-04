import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from '_helpers';
import Patient from './Patient';
import Newpatient from './Newpatient';

class App extends React.Component {
  render() {
    const path = this.props.path
    return (
      <Provider store={store}  >
        { path == "patient_create" &&
          <Newpatient />
        }
        { path == "patient_lists" &&
          <Patient />
        }
      </Provider>
    );
  }
}
export default App;
