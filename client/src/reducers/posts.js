import { FETCH_ALL } from '../constants/actionTypes';

export default (state = {posts : []}, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return{
        ...state,
        posts: action.payload, 
        all: action.payload, 
    }
    case 'FILTER_TYPE':
      return{
        ...state,
        posts: state.all.filter(item => item.type === action.payload), 
    }
    default:
      return state;
  }
};

