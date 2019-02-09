import * as api from '../api';

export const GET_CATEGORIES = 'GET_CATEGORIES';
export const ADD_POST = 'ADD_POST';
export const GET_POSTS = 'GET_POSTS';

export const getCategories = () => {
   return dispatch => {
      api.getCategories()
         .then(categories => {
            dispatch({
               type: GET_CATEGORIES,
               payload: categories
            });
         })
         .catch(error => {
            console.log('Get categories failed');
            console.log('Error:', error);
         });
   }
};

export const addPost = (post) => {
   return (dispatch) => {
      api.addPost(post)
         .then(post => {
            dispatch({
               type: ADD_POST,
               payload: post
            });
         })
         .catch(error => {
            console.log('Add post failed.');
            console.log('Error:', error);
         });
   };
};

export const getPosts = () => {
   return (dispatch) => {
      api.getPosts()
         .then(posts => {
            dispatch({
               type: GET_POSTS,
               payload: posts
            });
         })
         .catch(error => {
            console.log('Get posts failed.');
            console.log('Error:', error);
         });
   };
};