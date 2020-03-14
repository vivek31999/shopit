import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './NavbarPlate.css'

export default class NavbarPlate extends Component{
    render(){
        return(
            <Navbar bg="light" expand="lg">
            <Navbar.Brand style={{marginRight:'20px'}}><Link to="/">Shopit</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="nav">
                <Link className="home" to="/"><NavItem >Home</NavItem></Link>
                <Link className="cart" to="/Cart"><NavItem>Cart</NavItem></Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        )
    }
}
