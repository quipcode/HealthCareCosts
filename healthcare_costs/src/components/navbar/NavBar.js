import React, {useState}from 'react'
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, Button, Col,  Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import { NavDropdown } from 'react-bootstrap';
import {Link, NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import {logoutUser} from '../../redux/actions/ActionCreators'
import { connect } from "react-redux";
import Login from '../Login/Login'

// import React from 'react'
// import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem} from 'reactstrap'

let NavBar = (props) => {
    const [toggleNav, navToggler] = useState(false)
    const [toggleLoginModal, modalLoginToggler] = useState(false)
    const [toggleLogoutModal, modalLogoutToggler] = useState(false)
    const [message, logger] = useState("sup")
    // const logMeOut = useFriendStatus(props.logoutUser);
    const logMeOut = () => {
        // e.preventDefault();
        //Need to call the modalLogoutToggler to ensure that logout modal is closed upon confirmation
        modalLogoutToggler(!toggleLogoutModal)
        props.logoutUser();
        
      };
    const loginOrProfile = (auth) => {
        console.log("auth is", auth)
        return auth.isAuthenticated ? 
        // <Collapse isOpen={toggleNav} navbar>
        <React.Fragment>
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
              {/* <NavItem className="navbar-text">
              Welcome back {auth.username}
              </NavItem> */}
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
        <Nav className="ml-auto" navbar>
          <NavItem>
                    {/* <Button  color="secondary" onClick={console.log("button clicked")}>
                      <i className="fa fa-sign-out fa-lg" /> Logout
                    
                    </Button> */}
                    <Button color="secondary" onClick={() => modalLogoutToggler(!toggleLogoutModal)} >
                        <i className="fa fa-sign-in fa-lg" /> Logout
                    </Button>
                  {/* <NavLink className="nav-link" to="/logut">
                      <i className="fa fa-sign-out fa-lg" /> Logout 
                  </NavLink>
                <NavLink tag={Link} to="/logout">Logout</NavLink> */}
              </NavItem>
           
        </Nav>
      </Collapse>
        <Modal isOpen={toggleLogoutModal} toggle={modalLogoutToggler}>
        <ModalHeader toggle={() => modalLogoutToggler(!toggleLogoutModal)}>Logout</ModalHeader>
        <ModalBody>
            <p  > Are you sure you want to logout? </p>
            <ModalFooter>
            <Button color="primary" onClick={ () =>  logMeOut()} >
                <i className="fa fa-sign-in fa-lg" /> Confirm
            </Button>
            <Button color="secondary" onClick={() => modalLogoutToggler(!toggleLogoutModal)} >
                <i className="fa fa-sign-in fa-lg" /> Cancel
            </Button>
            </ModalFooter>
        </ModalBody>
     </Modal>
     </React.Fragment>
        : 
    // <Navbar dark sticky="top"  className=" navbar navbar-dark  navbar-expand-sm" expand="sm"  >
    
          <React.Fragment>
          
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
              
            </Nav>
            <Nav className="ml-auto" navbar>
                {/* <NavItem>
                <Button  color="secondary" >
                    <i className="fa fa-sign-in fa-lg" /> Login
                </Button> */}
                {/* <Button outline onClick={this.toggleModal}> */}
                  
                      
                      {/* {this.props.auth.isFetching ?
                          <span className="fa fa-spinner fa-pulse fa-fw"></span>
                          : null
                      } */}
                  
                {/* </NavItem> */}
                <NavItem  >
                
                <Button color="secondary" onClick={() => modalLoginToggler(!toggleLoginModal)} >
                    <i className="fa fa-sign-in fa-lg" /> Login
                </Button>
                </NavItem>
                {/* <NavItem>
                  <NavLink className="nav-link" to="/login">
                      <i className="fa fa-sign-in fa-lg" /> Login 
                  </NavLink>
              </NavItem> */}
            </Nav>
          </Collapse>
           <Modal isOpen={toggleLoginModal} toggle={modalLoginToggler}>
              <ModalHeader toggle={() => modalLoginToggler(!toggleLoginModal)}>Login</ModalHeader>
              <ModalBody>
                    {/* //The onclose is needed as it will ensure that the login modal is closed after user has logged in  */}
                    <Login onClose={() => modalLoginToggler(!toggleLoginModal)}/>
                    {/* <Login onClose={this.showModal}/> */}
              </ModalBody>
           </Modal>
          </React.Fragment>
    //</Navbar>
    }
    return(
        <div>
            <Navbar dark sticky="top"  className=" navbar navbar-dark  navbar-expand-sm" expand="sm">
            {/* <Navbar color="inverse" dark full> */}
                {/* <NavbarBrand href="/">Our Cool App</NavbarBrand> */}
                <NavbarBrand className="mr-auto" href="/"><img src="../assets/images/2018-healthcare-costs.jpg" height="30" width="30" alt="Cost of HealthCare" /></NavbarBrand>
                <NavbarToggler onClick={() => navToggler(!toggleNav)} />
                {loginOrProfile(props.auth)}
            </Navbar>
        </div>
    )
}


NavBar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };

//   export default NavBar;


const mapStateToProps = state => ({
    auth: state.auth
  });
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(NavBar);