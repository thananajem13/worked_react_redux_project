import axios from "./../../node_modules/axios/index"


const Products = ()=>{
    return(
       axios.get('/products')
      .then((response) => {
        console.log(response)
      }, (error) => {
        console.log(error)
      })
    )
    
}

export default Products
