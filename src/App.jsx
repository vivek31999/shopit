import React,{Component} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'
import Product from './components/Product'
import NavbarPlate from './components/NavbarPlate'
import Display from './components/Display'
import './App.css'

class App extends Component{
  render(){
    return(
      <Router>
        <div>
        <NavbarPlate/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/Cart" component={Cart}/>
            <Route path="/Product/:name" component={Product}/>
            <Route path="/display" component={Display} />
          </Switch>
        <div className="jumbotron">
        hello
        </div>
        </div>
      </Router>
    )
  }
}

export default App;
