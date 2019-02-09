import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCategories } from '../actions';

const allCategory = {
   code: 'all',
   name: 'All'
}

class Categories extends Component {
   componentDidMount() {
      this.props.getCategories();
   }

   renderCategories() {
      return this.props.categories.map(category => {
         return <li onClick={() => { this.props.onSelect(category) }} key={category.code} className="list-group-item list-group-item-action">
            {category.name}
         </li>
      });
   }

   render() {
      return (
         <ul className="list-group">
            {this.renderCategories()}
         </ul>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      categories: state.categories
   };
};

export default connect(mapStateToProps, { getCategories: getCategories })(Categories);