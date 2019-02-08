import React from "react";

const PostDetail = props => {
   console.log(props);
   return (
      <div className="card">
         <p>Title: {props.title}</p>
         <p>Author: {props.author}</p>
      </div>
   );
};

export default PostDetail;
