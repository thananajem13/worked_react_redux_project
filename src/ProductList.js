import React from 'react';

// import axios from 'axios';
// const api = axios.create({
//     baseURL : `http://localhost:3000/`
// })
export default class ProductList extends React.Component {
  state = {
    products: []
  }

  componentDidMount() {
    fetch('./product_api.json')
    .then(response => response.json())
    .then(data => console.log(data));
  }

  render() { 
    return (
      <ul>
        { this.state.products.map(product => <li key={product.id}>{product.productName}</li>)}
      </ul>
    )
  }
}