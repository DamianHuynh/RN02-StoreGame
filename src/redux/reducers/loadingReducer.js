import {CHANGE_LOADING} from '../actions/loadingAction';

const initialState = {
  isLoading: false,
};

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LOADING:
      state.isLoading = action.payload;
      return {...state};
    default:
      return state;
  }
};

export default loadingReducer;
