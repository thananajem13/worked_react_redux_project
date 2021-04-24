import React from 'react';

import axios from 'axios';

export default class ProductList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`product_api.json`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        { this.state.persons.map(person => <li>{person.name}</li>)}
      </ul>
    )
  }
}