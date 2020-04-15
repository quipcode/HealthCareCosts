import React, {useState}from 'react'
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, Button, Col} from 'reactstrap'
import { NavDropdown } from 'react-bootstrap';
import {Link, NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';

// import React from 'react'
// import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem} from 'reactstrap'

let NavBar = (props) => {
    const [toggleNav, toggler] = useState(false)
    const loginOrProfile = (auth) => {
        console.log("auth is", auth)
        return auth.isAuthenticated ? 
        // <Collapse isOpen={toggleNav} navbar>
          <Nav className="float-xs-right" navbar>
            <NavDropdown eventkey={1}
                    title={
                        <div className="pull-left">
                            {/* <img className="thumbnail-image"
                                src="/assets/images/icons8-user-shield-80.png"
                                alt="user pic"
                                width="40" height="40" className="rounded-circle"
                            /> */}
                            <span>Proof of Concept</span>
                        </div>
                    }
                    id="basic-nav-dropdown" 
                >
                    <NavDropdown.Item href="/home">Home</NavDropdown.Item>
                    <NavDropdown.Item href="/healthcarecosts">HealthCare Costs</NavDropdown.Item>
                  
              </NavDropdown>
              <NavItem className="navbar-text">
              Welcome back {auth.username}
              </NavItem>
              <NavItem>
                  <NavLink className="nav-link" to="/logut">
                      <i className="fa fa-sign-out fa-lg" /> Logout 
                  </NavLink>
                <NavLink tag={Link} to="/logout">Logout</NavLink>
              </NavItem>
        </Nav>
      // </Collapse>
        : 
    // <Navbar dark sticky="top"  className=" navbar navbar-dark  navbar-expand-sm" expand="sm"  >
    
          // <React.Fragment>
          
          <Collapse isOpen={toggleNav} navbar>
            <Nav className="float-xs-right" navbar>
              <NavDropdown eventkey={1}
                    title={
                        <div className="pull-left">
                            {/* <img className="thumbnail-image"
                                src="/assets/images/icons8-user-shield-80.png"
                                alt="user pic"
                                width="40" height="40" className="rounded-circle"
                            /> */}
                            <span>Proof of Concept</span>
                        </div>
                    }
                    id="basic-nav-dropdown" 
                >
                    <NavDropdown.Item href="/home">Home</NavDropdown.Item>
                    <NavDropdown.Item href="/healthcarecosts">HealthCare Costs</NavDropdown.Item>
                    
                </NavDropdown>
              <NavItem>
                <NavLink tag={Link} to="/login">Log in</NavLink>
              </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
                <NavItem>
                {/* <Button outline onClick={this.toggleModal}> */}
                  <Button  color="secondary">
                      <i className="fa fa-sign-in fa-lg" /> Login
                      {/* {this.props.auth.isFetching ?
                          <span className="fa fa-spinner fa-pulse fa-fw"></span>
                          : null
                      } */}
                  </Button>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/login">
                      <i className="fa fa-sign-in fa-lg" /> Login 
                  </NavLink>
                  {/* <NavLink tag={Link} to="/login">Log in</NavLink> */}
              </NavItem>
            </Nav>
          </Collapse>
          // </React.Fragment>
    //</Navbar>
    }
    return(
        <div>
            <Navbar dark sticky="top"  className=" navbar navbar-dark  navbar-expand-sm" expand="sm">
            {/* <Navbar color="inverse" dark full> */}
                {/* <NavbarBrand href="/">Our Cool App</NavbarBrand> */}
                <NavbarBrand className="mr-auto" href="/"><img src="../assets/images/2018-healthcare-costs.jpg" height="30" width="30" alt="Cost of HealthCare" /></NavbarBrand>
                <NavbarToggler onClick={() =>toggler(!toggleNav)} />
                {loginOrProfile(props.auth)}
            </Navbar>
        </div>
    )
}


NavBar.propTypes = {
    auth: PropTypes.object.isRequired
  };

  export default NavBar;