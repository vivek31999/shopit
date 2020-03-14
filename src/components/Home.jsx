import React, {Component } from 'react'
import './Home.css'
import CCard from './CCard'
import {connect} from 'react-redux';


class Home extends Component{

add = (id) => {
    this.props.addToCart(id)
    window.alert("Item added to cart");
}

removeFromCart = (id) => {
    this.props.removeFromCart(id);
}

render(){
        console.log(this.props.products)
        return(
            <div className="major">
                <CCard items = {this.props.products} add={this.add} remove={this.removeFromCart}/>
            </div>
    )
}
}

const mapStateToProps = (state) => {
    return {
        products : state.data,
        cartItems : state.cart 
    }
}
  

const matchDispatchToProps = (dispatch) =>{
    return{
        addToCart : (id) => {dispatch({type : 'ADD_TO_CART',id : id})},
        removeFromCart : (id) => {dispatch({type : 'REMOVE_FROM_CART',id : id})}
    }
}

export default connect(mapStateToProps,matchDispatchToProps)(Home)