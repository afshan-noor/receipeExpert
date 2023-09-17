// actions.js
export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const SET_SEARCH = 'SET_SEARCH';

export const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST,
});

export const fetchDataSuccess = (data:any) => ({
  type: FETCH_DATA_SUCCESS,
  data,
});

export const fetchDataFailure = (error:any) => ({
  type: FETCH_DATA_FAILURE,
  error,
});

export const setSearch = (search:any) => ({
  type: SET_SEARCH,
  search,
});
