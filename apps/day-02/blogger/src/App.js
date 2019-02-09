import React from "react";
import Header from "./components/Header";
import PostDetail from "./components/PostDetail";
import PostForm from './components/PostForm';
import { getPosts } from './api/BloggerApi';

class App extends React.Component {
   constructor() {
      super();

      this.state = {
         posts: []
      };

      getPosts()
         .then((posts) => {
            console.log('getPosts() response:', posts);
            this.setState({ posts });
         })
         .catch((error) => {
            console.log('getPosts() error:', error);
         });
   }

   handleNewPost = (newPost) => {
      this.setState({ posts: [newPost, ...this.state.posts] });
   };

   render() {
      const postDetailElements = this.state.posts.map((post) => {
         return <PostDetail
            key={post.title}
            post={post}
         />;
      })

      return (
         <div className="container">
            <Header />
            <div className="row">
               {/* <!-- navigation --> */}
            </div>
            <div className="row">
               <div className="col-md-4">
                  <PostForm onNewPost={this.handleNewPost} />
               </div>
               <div className="col-md-8">
                  {postDetailElements}
               </div>
            </div>
         </div>
      );
   }

}

export default App;
