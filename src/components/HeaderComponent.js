import React, {Component} from 'react'
// import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, UncontrolledDropdown,  DropdownToggle,
//     DropdownMenu,
//     DropdownItem,
//     NavbarText} from 'reactstrap'

import{Navbar, Nav, NavDropdown,Form, FormControl, Button, MenuItem} from 'react-bootstrap';

import {NavLink} from 'react-router-dom'

class Header extends React.Component{
    // constructor(props){
    //     super(props)

    //     this.toggleNav = this.toggleNav.bind(this)
    //     this.state = {
    //         isNavOpen: false,
    //     }
    // }
    constructor(props) {
        super(props);

        this.state = {
            jsxData: [],
            submenu: [],
         
        };
    }

    render() {
        return (
            <React.Fragment>
                <Navbar className="navbar navbar-dark bg-dark navbar-expand-sm" expand="sm">
                    <Navbar.Brand href="/home">
                        
                            <a className="navbar-brand" href="/home">
                                <img src="logo192.png" width="30" height="30" alt="logo" />
                                                               
                                <span> The Guild App</span>
                            </a>
                        
                        
                          
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            
                            
                            <NavDropdown eventKey={1}
                                title={
                                    <div className="pull-left">
                                        <img className="thumbnail-image"
                                            src="/assets/images/icons8-user-shield-80.png"
                                            alt="user pic"
                                            width="40" height="40" className="rounded-circle"
                                        /><span>Self</span>
                                    </div>
                                }
                                id="basic-nav-dropdown" 
                            >
                                <NavDropdown.Item href="/myprofile">My Profile Page</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown eventKey={1}
                                title={
                                    <div className="pull-left">
                                        <img className="thumbnail-image"
                                            src="/assets/images/icons8-web-shield-80.png"
                                            alt="user pic"
                                            width="40" height="40" class="rounded-circle"
                                        /><span>Guild</span>
                                    </div>
                                }
                                id="basic-nav-dropdown"
                            >
                                <NavDropdown.Item href="/myguilds">My Guilds</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown eventKey={1}
                                title={
                                    <div className="pull-left">
                                        <img className="thumbnail-image"
                                            src="/assets/images/shielded_message.png"
                                            alt="user pic"
                                            width="40" height="40" class="rounded-circle"
                                        /><span>Messages</span>
                                    </div>
                                }
                                id="basic-nav-dropdown"
                            >
                                <NavDropdown.Item href="/messagingcenter">Messaging Center</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown eventKey={1}
                                title={
                                    <div className="pull-left">
                                        <img className="thumbnail-image"
                                            src="/assets/images/icons8-security-configuration-100.png"
                                            alt="user pic"
                                            width="40" height="40" class="rounded-circle"
                                        /><span>Admin</span>
                                    </div>
                                }
                                id="basic-nav-dropdown"
                            >
                                <NavDropdown.Item href="/userdirectory">User Directory</NavDropdown.Item>
                                <NavDropdown.Item href="/userprofile">User Profile by Id</NavDropdown.Item>
                                <NavDropdown.Item href="/guilddirectory">Guild Directory</NavDropdown.Item>
                                <NavDropdown.Item href="/guildprofile">Guild Profile</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </React.Fragment>
        );
    }

    // toggleNav(){
    //     this.setState({
    //         isNavOpen: !this.state.isNavOpen
    //     })
    // }


    

    //  [isOpen, setIsOpen] = useState(false);

    //  toggle = () => setIsOpen(!isOpen);
    // render(){
    //     return(
    //         <div>
    //   <Navbar color="light" light expand="md">
    //     <NavbarBrand href="/">reactstrap</NavbarBrand>
    //     <NavbarToggler  />
    //     <Collapse  navbar>
    //       <Nav className="mr-auto" navbar>
    //         {/* {/* <NavItem>
    //           <NavLink href="/components/">Components</NavLink>
    //         </NavItem> */}
    //         <NavItem>
    //           <NavLink >GitHub</NavLink>
    //         </NavItem> 
    //         <UncontrolledDropdown nav inNavbar>
    //           <DropdownToggle nav caret>
    //             Options
    //           </DropdownToggle>
    //           <DropdownMenu right>
    //             <DropdownItem>
    //               Option 1
    //             </DropdownItem>
    //             <DropdownItem>
    //               Option 2
    //             </DropdownItem>
    //             <DropdownItem divider />
    //             <DropdownItem>
    //               Reset
    //             </DropdownItem>
    //           </DropdownMenu>
    //         </UncontrolledDropdown>
    //       </Nav>
    //       <NavbarText>Simple Text</NavbarText>
    //     </Collapse>
    //   </Navbar>
    // </div>

    //         // <React.Fragment>
    //         //     <Navbar dark stick="top" expand="md">
    //         //         <div className="container">
    //         //         <NavbarBrand className="mr-auto" href="/"></NavbarBrand>
    //         //         <NavbarToggler onClick={this.toggleNav}/>
    //         //             <Collapse isOpen={this.state.isNavOpen} navbar>
    //         //                 <Nav navbar>
    //         //                     <NavItem>
    //         //                         <NavLink className='nav-link' to='/home'>
    //         //                             <i className='fa fa-home fa-lg'/> Home
    //         //                         </NavLink>
    //         //                     </NavItem>
    //         //                     <NavItem>
    //         //                         <NavLink className='nav-link' to='/search'>
    //         //                             <i className='fa fa-home fa-lg'/> Search Results
    //         //                         </NavLink>
    //         //                     </NavItem>
    //         //                 </Nav>
    //         //             </Collapse>
    //         //         </div>
    //         //     </Navbar>

    //         // </React.Fragment>
    //     )
    // }
}

export default Header