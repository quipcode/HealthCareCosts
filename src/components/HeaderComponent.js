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
                <Navbar dark sticky="top"  className=" navbar navbar-dark  navbar-expand-sm" expand="sm"  >
                    
                        <NavbarBrand className="mr-auto" href="/"><img src="/assets/images/2018-healthcare-costs.jpg" height="30" width="30" alt="Cost of HealthCare" /></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <i className="fa fa-home fa-lg" /> Home 
                                    </NavLink>
                                </NavItem>
                              
                            
                                
                                <NavItem>
                                    <NavLink className="nav-link" to="/submissionform">
                                        <i className=" fa fa-pencil-square-o fa-lg" /> Submission Form
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <i className=" fa fa-address-card fa-lg" /> Contact Us
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/healthcarecosts">
                                        <i className="fa fa-list fa-lg" /> HealthCare Costs
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/myprofile">
                                        <i className="fa fa-user fa-lg" /> My Profile
                                    </NavLink>
                                </NavItem>

                                
                            </Nav>
                            
                        </Collapse>
                    
                </Navbar>
                

            </React.Fragment>
            
            
        //     <React.Fragment>
        //     <Navbar className="navbar navbar-dark bg-dark navbar-expand-sm" expand="sm">
        //         <Navbar.Brand href="/home">
                    
        //                 <a className="navbar-brand" href="/home">
        //                     <img src="/assets/images/transparent_shield.png" width="30" height="30" alt="logo" />
        //                     {/* instead of <img src={"/images/resto.png"} /> you need to use <img src={require('/images/image-name.png')} /> */}
        //                     {/* <img src={require("images/transparent_shield.png")} width="30" height="30" alt="logo" /> */}
        //                     {/* <img src="http://localhost:3001/images/transparent_shield.png" width="30" height="30" alt="logo" /> */}
                            
        //                     <span> The Guild App</span>
        //                 </a>
                    
                    
        //                 {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-list-4" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        //                     <span class="navbar-toggler-icon"></span>
        //                 </button> */}
        //         </Navbar.Brand>
        //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //         <Navbar.Collapse id="basic-navbar-nav">
        //             <Nav className="mr-auto">
                        
                        
        //                 <NavDropdown eventKey={1}
        //                     title={
        //                         <div className="pull-left">
        //                             <img className="thumbnail-image"
        //                                 src="/assets/images/icons8-user-shield-80.png"
        //                                 alt="user pic"
        //                                 width="40" height="40" className="rounded-circle"
        //                             /><span>Self</span>
        //                         </div>
        //                     }
        //                     id="basic-nav-dropdown" 
        //                 >
        //                     <NavDropdown.Item href="/myprofile">My Profile Page</NavDropdown.Item>
        //                     <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        //                     <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        //                     <NavDropdown.Divider />
        //                     <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        //                 </NavDropdown>
        //                 <NavDropdown eventKey={1}
        //                     title={
        //                         <div className="pull-left">
        //                             <img className="thumbnail-image"
        //                                 src="/assets/images/icons8-web-shield-80.png"
        //                                 alt="user pic"
        //                                 width="40" height="40" class="rounded-circle"
        //                             /><span>Guild</span>
        //                         </div>
        //                     }
        //                     id="basic-nav-dropdown"
        //                 >
        //                     <NavDropdown.Item href="/myguilds">My Guilds</NavDropdown.Item>
        //                     <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        //                     <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        //                     <NavDropdown.Divider />
        //                     <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        //                 </NavDropdown>
        //                 <NavDropdown eventKey={1}
        //                     title={
        //                         <div className="pull-left">
        //                             <img className="thumbnail-image"
        //                                 src="/assets/images/shielded_message.png"
        //                                 alt="user pic"
        //                                 width="40" height="40" class="rounded-circle"
        //                             /><span>Messages</span>
        //                         </div>
        //                     }
        //                     id="basic-nav-dropdown"
        //                 >
        //                     <NavDropdown.Item href="/messagingcenter">Messaging Center</NavDropdown.Item>
        //                     <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        //                     <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        //                     <NavDropdown.Divider />
        //                     <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        //                 </NavDropdown>
        //                 <NavDropdown eventKey={1}
        //                     title={
        //                         <div className="pull-left">
        //                             <img className="thumbnail-image"
        //                                 src="/assets/images/icons8-security-configuration-100.png"
        //                                 alt="user pic"
        //                                 width="40" height="40" class="rounded-circle"
        //                             /><span>Admin</span>
        //                         </div>
        //                     }
        //                     id="basic-nav-dropdown"
        //                 >
        //                     <NavDropdown.Item href="/userdirectory">User Directory</NavDropdown.Item>
        //                     <NavDropdown.Item href="/userprofile">User Profile by Id</NavDropdown.Item>
        //                     <NavDropdown.Item href="/guilddirectory">Guild Directory</NavDropdown.Item>
        //                     <NavDropdown.Item href="/guildprofile">Guild Profile</NavDropdown.Item>
        //                     <NavDropdown.Divider />
        //                     <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        //                 </NavDropdown>
        //             </Nav>
        //             <Form inline>
        //                 <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        //                 <Button variant="outline-success">Search</Button>
        //             </Form>
        //         </Navbar.Collapse>
        //     </Navbar>
        // </React.Fragment>
        )
    }
}

export default Header