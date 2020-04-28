import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import testReducer from '../../features/test/testReducer';
import eventReducer from '../../features/event/evantReducer';

const rootReducer = combineReducers ({
  test: testReducer,
  events: eventReducer,
  form: formReducer,
});

export default rootReducer;
