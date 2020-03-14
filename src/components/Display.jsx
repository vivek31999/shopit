import React, {Component} from 'react'
import axios from 'axios';


class Display extends Component{
    
    state = {
        value : [],
      }
    
  componentDidMount(){
    var url = 'http://localhost/shotit/src/backend/index.php';
    axios.get(url)
        .then(res =>{
          console.log(res.data)
          this.setState({
            value : res.data
          })
        })
  }
  

    // componentDidMount(){
    //     axios.get(`http://localhost/shotit/src/backend/index.php`)
    //   .then(res => {
    //     console.log(res.data)
    //     this.setState({
    //         data :  res.data
    //     })
    //   })
    // }


    render(){
      return(
        <div>
          {
              this.state.value.map((dat) => (
                <div>
                  <h3>{dat.itemname}</h3>
                  <h3>{dat.rate}</h3>
                </div>
              ))
          }
              </div>
        )
    }
}
export default Display;