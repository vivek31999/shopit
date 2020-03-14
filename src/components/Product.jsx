import React ,{Component} from 'react'

export default class Product extends Component{
state = {
    name : null
}

    componentDidMount()
    {
        const name = this.props.match.params.name
        this.setState({
            name 
        });
    }

    render(){
        return(
        <div>Product is {this.state.name}</div>
        )
}
}