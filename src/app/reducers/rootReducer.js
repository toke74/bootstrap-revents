import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr'
import testReducer from '../../features/test/testReducer';
import eventReducer from '../../features/event/evantReducer';
import authReducer from '../../features/auth/authReducer';
import asyncReducer from '../../features/async/asyncReducer';

const rootReducer = combineReducers ({
  test: testReducer,
  events: eventReducer,
  form: formReducer,
  auth: authReducer,
  async: asyncReducer,
  toastr: toastrReducer
});

export default rootReducer;
