import {
  CREATE_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
  FETCH_EVENTS,
} from './eventConstants';
import {
  asyncActionStart,
  asyncActionFinish,
  asyncActionError,
} from '../async/asyncActions';
import { fetchSample } from '../../app/data/mockApi';
import { toastr } from 'react-redux-toastr';

export const createEvent = (event) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: CREATE_EVENT,
        payload: {
          event,
        },
      });
      toastr.success('Success!', 'Event has been Created');
    } catch (error) {
      toastr.error('Oops', 'Something went wong');
    }
  };
};
export const updateEvent = (event) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: UPDATE_EVENT,
        payload: {
          event,
        },
      });
      toastr.success('Success!', 'Event has been updated');
    } catch (error) {
      toastr.error('Oops', 'Something went wong');
    }
  };
};
export const deleteEvent = (eventId) => {
  return {
    type: DELETE_EVENT,
    payload: {
      eventId,
    },
  };
};

export const loadEvent = () => {
  return async (dispatch) => {
    try {
      dispatch(asyncActionStart());
      const events = await fetchSample();
      dispatch({ type: FETCH_EVENTS, payload: { events } });
      dispatch(asyncActionFinish());
    } catch (error) {
      console.log(error);
      dispatch(asyncActionError());
    }
  };
};
