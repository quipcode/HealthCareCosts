import React, {Component} from 'react'
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, Button, UncontrolledDropdown,  DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText} from 'reactstrap'

// import{Navbar, Nav, NavDropdown,Form, FormControl, Button, MenuItem} from 'react-bootstrap';

import {NavLink} from 'react-router-dom'

class Header extends React.Component{
    constructor(props){
        super(props)

        this.toggleNav = this.toggleNav.bind(this)
        this.state = {
            isNavOpen: false,
        }
    }
    
    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }


    

    //
    render(){
        return(
            <React.Fragment>
                <Navbar dark sticky="top" color="light" className=" navbar navbar-dark  navbar-expand-sm" expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/"><img src="/assets/images/logo.png" height="30" width="30" alt="NuCamp Logo" /></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <i className="fa fa-home fa-lg" /> Home <a style={{backgroundColor: yellow}}>yellow</a>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/directory">
                                        <i className="fa fa-list fa-lg" /> Directory
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <i className="fa fa-info fa-lg" /> About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <i className="fa fa-address-card fa-lg" /> Contact Us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <span className="navbar-text-ml-auto">
                                <Button outline onClick={this.toggleModal}>
                                    <i className="fa fa-sign-in fa-lg">Login</i>
                                </Button>
                            </span>
                        </Collapse>
                    </div>
                </Navbar>
                

            </React.Fragment>
        )
    }
}

export default Header