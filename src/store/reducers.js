import FORM_SUBMIT from './types';

export default (state = {}, action) => {
  switch (action.type) {
    case FORM_SUBMIT:
      return state;
    default:
      return state;
  }
};
