import React from "react";
import Header from "./components/Header";
import PostDetail from "./components/PostDetail";

const posts = [
   { title: 'post 1', author: 'hari' },
   { title: 'post 2', author: 'krish' },
   { title: 'post 3', author: 'shiv' },
   { title: 'post 4', author: 'bob' }
];

// arrow function syntax
const App = () => {
   const postDetailObjects = posts.map((post) => {
      return <div key={post.title}>
         <PostDetail title={post.title} author={post.author} />
      </div>;
   })

   return (
      <div>
         <Header />
         {postDetailObjects}
      </div>
   );
};

export default App;
