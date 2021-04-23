import './App.css';
import {connect} from 'react-redux'
import {addToCart} from './actions/index'
import { Component } from 'react';
class App extends Component {
  state = {
    product: [],
    total_price : 0
  }
  render(){
    return (
    <div className="App">
      <button onClick={()=>{ 
        console.log(this.props.add_to_cart({id:2, price:1000, name:'dell lap', qty:2}))
        console.log(this.props.cart) 
      }}>Appear action in console</button>
    </div>
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
