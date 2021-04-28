import axios from "axios";
import {
  GET_USERS,
  GET_FOLLOWERS,
  GET_FOLLOWING,
  GET_REPOS,
  GET_USER,
  START_LOADING,
  STOP_LOADING,
} from "./types";

export const getUsers = (name, pageNumber) => {
  return (dispatch) => {
    dispatch({
      type: START_LOADING,
    });
    const url =
      "https://api.github.com/search/users?q=" + name + "&page=" + pageNumber;
    axios
      .get(url)
      .then((response) => {
        dispatch({
          type: GET_USERS,
          payload: response.data,
        });
        dispatch({
          type: STOP_LOADING,
        });
      })
      .catch((error) => {
        dispatch({
          type: STOP_LOADING,
        });
        return error.response;
      });
  };
};

export const getUser = (name) => {
  return (dispatch) => {
    const url = "https://api.github.com/users/" + name;
    axios
      .get(url)
      .then((response) => {
        dispatch({
          type: GET_USER,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: STOP_LOADING,
        });
        return error.response;
      });
  };
};

export const getFollowers = (name) => {
  return (dispatch) => {
    const url = "https://api.github.com/users/" + name + "/followers";
    axios
      .get(url)
      .then((response) => {
        dispatch({
          type: GET_FOLLOWERS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: STOP_LOADING,
        });
        return error.response;
      });
  };
};

export const getRepos = (name) => {
  return (dispatch) => {
    const url = "https://api.github.com/users/" + name + "/repos";
    axios
      .get(url)
      .then((response) => {
        dispatch({
          type: GET_REPOS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: STOP_LOADING,
        });
        return error.response;
      });
  };
};

export const getFollowing = (name) => {
  return (dispatch) => {
    const url = "https://api.github.com/users/" + name + "/following";
    axios
      .get(url)
      .then((response) => {
        dispatch({
          type: GET_FOLLOWING,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: STOP_LOADING,
        });
        return error.response;
      });
  };
};
