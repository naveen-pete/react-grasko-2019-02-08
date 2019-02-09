import React from 'react';
import { connect } from 'react-redux';

// import { addPost } from '../api';
import { addPost } from '../actions';

class PostForm extends React.Component {
   state = {
      title: '',
      body: '',
      author: '',
      category: ''
   };

   onTitleChange = (e) => {
      this.setState({ title: e.target.value });
   }

   onBodyChange = (e) => {
      this.setState({ body: e.target.value });
   }

   onAuthorChange = (e) => {
      this.setState({ author: e.target.value });
   };

   onCategoryChange = (e) => {
      this.setState({ category: e.target.value });
   };

   onFormSubmit = (e) => {
      e.preventDefault();
      // this.props.onNewPost(this.state);
      this.handleNewPost(this.state);
   };

   handleNewPost = (newPost) => {
      // addPost(newPost)
      //    .then(post => {
      //       console.log('Add post successful.');
      //       console.log('New post:', post);
      //       this.props.history.push('/posts');
      //    })
      //    .catch(error => {
      //       console.log('Add post failed!');
      //       console.log('Error:', error);
      //    });

      this.props.addPost(newPost);
      this.props.history.push('/posts');
   };

   render() {
      console.log(this.props);
      return <div>
         <h3 className="mr-3">Post Form</h3>

         <div className="card bg-light">
            <div className="card-body">
               <form onSubmit={this.onFormSubmit}>
                  <div className="form-group">
                     <label htmlFor="title">Title</label>
                     <input type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        placeholder="Enter title"
                        onChange={this.onTitleChange}
                        value={this.state.title}
                     />
                  </div>
                  <div className="form-group">
                     <label htmlFor="body">Body</label>
                     <textarea className="form-control"
                        id="body"
                        name="body"
                        placeholder="Enter body"
                        rows="3"
                        cols="30"
                        onChange={this.onBodyChange}
                        value={this.state.body}
                     ></textarea>
                  </div>
                  <div className="form-group">
                     <label htmlFor="author">Author</label>
                     <input type="text"
                        className="form-control"
                        id="author"
                        name="author"
                        placeholder="Enter author"
                        onChange={this.onAuthorChange}
                        value={this.state.author}
                     />
                  </div>
                  <div className="form-group">
                     <label htmlFor="category">Category</label>
                     <select required className="form-control" id="category"
                        name="category" onChange={this.onCategoryChange}
                        value={this.state.category}>
                        <option value=""></option>
                        {
                           this.props.categories.map((category) => {
                              return (
                                 <option key={category.code}
                                    value={category.code}>
                                    {category.name}
                                 </option>
                              )
                           })
                        }
                     </select>
                  </div>

                  <button type="submit" className="btn btn-primary">Save</button>
               </form>
            </div>
         </div>

      </div>;
   }
}

const mapStateToProps = (state) => {
   return {
      categories: state.categories
   };
};

export default connect(mapStateToProps, { addPost: addPost })(PostForm);
