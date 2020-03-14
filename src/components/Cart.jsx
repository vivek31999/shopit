import React, {Component} from 'react';
// import { Row,Col,Card} from 'react-bootstrap'
import CCard from './CCard'
import './Home.css'
import {connect} from 'react-redux';

class Cart extends Component{

    removeFromCart = (id) => {
        this.props.removeFromCart(id);
    }

render(){
    console.log(this.props.cartData)
        return(
            this.props.cartData.length !== 0 ?(
            <div className="major">
                <CCard items={this.props.cartData} remove={this.removeFromCart}/>
            </div>
            ):
            ("Cart is empty")
        )
    }
}

const mapStateToProps = (state) =>
{
    return {
        cartData : state.cart
    }
}

// const matchDispatchToProps = (dispatch) =>{
//     return{
//         removeFromCart : (id) => {dispatch({type : 'REMOVE_FROM_CART',id : id})}
//     }
// }

export default connect(mapStateToProps)(Cart)