import {combineReducers} from 'redux';
import testReducer from '../../features/test/testReducer';
import eventReducer from '../../features/event/evantReducer';

const rootReducer = combineReducers ({
  test: testReducer,
  events: eventReducer,
});

export default rootReducer;
