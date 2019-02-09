const apiUrl = 'http://localhost:3001/posts';

export const getPosts = () => {
   return fetch(apiUrl)
      .then(response => response.json());
};
