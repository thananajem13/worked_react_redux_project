import './App.css';
import {connect} from 'react-redux'
import {addToCart} from './actions/index'
import { Component } from 'react';
// import Products from './api/index'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios'
import ProductList from './ProductList';
class App extends Component {
  state = {
    product: [],
    total_price : 0
  }
  render(){
    return (
      <Router>
            <div className="App">
              <ProductList/>
      {/* {`products:${Products()}`} */}
      {/* <button onClick={()=>{ 
        console.log(this.props.add_to_cart({id:2, price:1000, name:'dell lap', qty:2}))
        console.log(this.props.cart) 
      }}>Appear action in console</button> */}
    </div>
    <Switch>
          <Route path="/Productlist">
            <ProductList />
          </Route> 
        </Switch>
      </Router>

  );
}
}
function mapDispatchToProps(dispatch) {
    return {
        add_to_cart : (params) => { 
          dispatch(addToCart(params))
        }
    }
}

function mapStateToProps(state) {
  console.log(state)  
  return {
        cart: state
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
