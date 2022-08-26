import { FETCH_ALL } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const TypeChanged = (type) => (dispatch) => {
  try {
    dispatch({ type: 'FILTER_TYPE', payload: type });
  } catch (error) {
    console.log(error.message);
  }
};
