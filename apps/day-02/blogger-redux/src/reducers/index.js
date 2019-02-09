import { GET_CATEGORIES, ADD_POST, GET_POSTS } from '../actions';
import { combineReducers } from 'redux';

// const categories = [
//    { "name": "React", "code": "react" },
//    { "name": "Redux", "code": "redux" },
//    { "name": "Angular", "code": "angular" },
//    { "name": "ES6", "code": "es6" },
//    { "name": "Java", "code": "java" },
//    { "name": "ASP.NET", "code": "asp.net" },
//    { "name": "CSharp", "code": "csharp" }
// ];

const categoriesReducer = (state = [], action) => {
   switch (action.type) {
      case GET_CATEGORIES:
         return [...action.payload];
   }
   return state;
};

const postsReducer = (state = [], action) => {
   switch (action.type) {
      case ADD_POST:
         return [...state, action.payload];

      case GET_POSTS:
         return [...action.payload]

      // case UPDATE_POST:
      // case DELETE_POST:
   }

   return state;
};

const appReducers = combineReducers({
   categories: categoriesReducer,
   posts: postsReducer
});

export default appReducers;