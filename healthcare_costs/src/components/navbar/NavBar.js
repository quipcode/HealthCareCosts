import React from 'react'
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink} from 'reactstrap'
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

// import React from 'react'
// import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem} from 'reactstrap'

let NavBar = (props) => {
    const loginOrProfile = (auth) => {
        console.log("auth is", auth)
        return auth.isAuthenticated ? 
        <Nav className="float-xs-right" navbar>
            <NavItem className="navbar-text">
            Welcome back {auth.username}
            </NavItem>
            <NavItem>
            <NavLink tag={Link} to="/logout">Logout</NavLink>
            </NavItem>
      </Nav>
        : 
        
      <Nav className="float-xs-right" navbar>
      <NavItem>
        <NavLink tag={Link} to="/login">Log in</NavLink>
      </NavItem>
    </Nav>
    }
    return(
        <div>
            <Navbar>
            {/* <Navbar color="inverse" dark full> */}
                <NavbarBrand href="/">Our Cool App</NavbarBrand>
                {loginOrProfile(props.auth)}
            </Navbar>
        </div>
    )
}


NavBar.propTypes = {
    auth: PropTypes.object.isRequired
  };

  export default NavBar;