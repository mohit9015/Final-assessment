// redux/reducers.js
import { combineReducers } from 'redux';
import { ADD_FORM_DATA } from './actions';

const initialFormState = {
  formData: [],
};

const formReducer = (state = initialFormState, action) => {
  switch (action.type) {
    case ADD_FORM_DATA:
      return {
        ...state,
        formData: [...state.formData, action.payload],
      };
    default:
      return state;
  }
};

export default combineReducers({
  form: formReducer,
});