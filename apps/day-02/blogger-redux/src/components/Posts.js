import React from "react";
import { connect } from 'react-redux';

import PostDetail from "./PostDetail";
import Categories from './Categories';
import { getPosts } from '../actions';

class Posts extends React.Component {
   constructor() {
      super();

      this.state = {
         // posts: [],
         category: { code: 'all', name: 'All' }
      };
   }

   componentDidMount() {
      this.props.getPosts();
   }

   handleCategorySelect = (category) => {
      this.setState({ category });
   };

   renderPostDetailElements() {
      console.log(this.props);
      // let filteredPosts = this.state.posts;
      let filteredPosts = this.props.posts;

      if (this.state.category.code !== 'all') {
         filteredPosts = this.props.posts.filter((post) => {
            return post.category === this.state.category.code
         });
      }

      return filteredPosts.map((post) => {
         return <PostDetail
            key={post.title}
            post={post}
         />;
      })
   }

   onButtonClick = () => {
      console.log(this.props);
      this.props.history.push('/posts/new');
   }

   render() {
      return (
         <div>
            <button className="btn btn-success btn-sm m-2" onClick={this.onButtonClick}>New Post</button>
            <div className="row">
               <div className="col-md-4">
                  {/* <PostForm onNewPost={this.handleNewPost} /> */}
                  <Categories onSelect={this.handleCategorySelect} />
               </div>
               <div className="col-md-8">
                  {this.renderPostDetailElements()}
               </div>
            </div>
         </div>
      );
   }

}

const mapStateToProps = (state) => {
   return {
      posts: state.posts
   };
};

export default connect(mapStateToProps, { getPosts: getPosts })(Posts);
