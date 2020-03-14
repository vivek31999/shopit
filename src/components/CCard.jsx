import React, {Component} from 'react';
import { Row,Col,Card} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'

import './Home.css'

class CCard extends Component{

    render()
    {
        const {items,add,remove} = this.props;        
        const list = items.map(data => {
        return(
            <div  key={data.id}>
                <Col >
                <Card className="card" style={{ width: '15rem'}}>
                   <Link to={'/Product/'+data.name}> <Card.Img variant="top" className="img-fluid" src={data.image}/></Link>
                    <Card.Body>
                        <Card.Title>{data.name}</Card.Title>
                            <Card.Text>
                                {data.desc}
                            </Card.Text>
                            {data.i==='1' ?(<button className="btn btn-primary" onClick={()=>remove(data.id)}>Remove from cart</button>):
                            (<button className="btn btn-primary" onClick ={() => add(data.id)}>Add to  cart</button>)}
                    </Card.Body>
                </Card>
                </Col>
            </div>
        )
    })

    return(
        <div>
            <Row> 
            {list}
            </Row>
        </div>
        )
    }
}

const matchDispatchToProps = (dispatch) =>{
    return{
        addToCart : (id) => {dispatch({type : 'ADD_TO_CART',id : id})},
        removeFromCart : (id) => {dispatch({type : 'REMOVE_FROM_CART',id : id})}
    }
}

export default connect(matchDispatchToProps)(CCard)
