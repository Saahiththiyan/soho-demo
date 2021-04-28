import * as actionTypes from "../actions/types";

const initialState = {
  followers: [],
  following: [],
  repos: [],
  usersData: [],
  userData: null,
  isLoading: false,
  totalCount: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USERS:
      return {
        ...state,
        usersData: action.payload.items,
        totalCount: action.payload.total_count,
      };
    case actionTypes.GET_FOLLOWERS:
      return {
        ...state,
        followers: action.payload,
      };
    case actionTypes.GET_REPOS:
      return {
        ...state,
        repos: action.payload,
      };
    case actionTypes.GET_FOLLOWING:
      return {
        ...state,
        following: action.payload,
      };
    case actionTypes.GET_USER:
      return {
        ...state,
        userData: action.payload,
      };
    case actionTypes.START_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.STOP_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
