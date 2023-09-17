// reducer.js
import {
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    SET_SEARCH,
  } from './action';
  
  const initialState = {
    url: 'https://www.themealdb.com/api/json/v1/1/search.php?f=a',
    item: [],
    show: false,
    errorMessage: '',
    search: '',
    searchPerformed: false,
  };
  
  const reducer = (state = initialState, action:any) => {
    switch (action.type) {
      case FETCH_DATA_REQUEST:
        return {
          ...state,
          show: false,
          errorMessage: '',
        };
      case FETCH_DATA_SUCCESS:
        return {
          ...state,
          item: action.data.meals || [],
          show: true,
        };
      case FETCH_DATA_FAILURE:
        return {
          ...state,
          errorMessage: 'An error occurred while fetching data.',
          show: false,
        };
      case SET_SEARCH:
        return {
          ...state,
          search: action.search,
          searchPerformed: false,
          url:
            action.search.trim() === ''
              ? 'https://www.themealdb.com/api/json/v1/1/search.php?f=a'
              : `https://www.themealdb.com/api/json/v1/1/search.php?s=${action.search}`,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  