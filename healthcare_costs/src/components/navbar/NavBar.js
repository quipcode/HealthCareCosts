import React, {useState}from 'react'
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, Button,  Modal, ModalHeader, ModalBody} from 'reactstrap'
import { NavDropdown } from 'react-bootstrap';
import { NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import {logoutUser} from '../../redux/actions/ActionCreators'
import { connect } from "react-redux";
import Login from '../Login/Login'
import Logout from '../logout/Logout'


let NavBar = (props) => {
    const [toggleNav, navToggler] = useState(false)
    const [toggleLoginModal, modalLoginToggler] = useState(false)
    const [toggleLogoutModal, modalLogoutToggler] = useState(false)



    const loginOrProfile = (auth) => {
        
        return auth.isAuthenticated ? 

                <React.Fragment>
                <Collapse isOpen={toggleNav} navbar>
                <Nav className="float-xs-right" navbar>
                    <NavDropdown eventkey={1}
                            title={
                                <div className="pull-left">
                                    <span>Proof of Concept - POC</span>
                                </div>
                            }
                            id="basic-nav-dropdown" 
                        >
                        <NavDropdown.Item href="/pocsearch">POC Search</NavDropdown.Item>
                        <NavDropdown.Item href="/pochealthcarecosts"> POC HealthCare Costs</NavDropdown.Item>
                    </NavDropdown>
            
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
                        <NavLink className="nav-link" to="/healthcarecosts">
                            <i className="fa fa-list fa-lg" /> HealthCare Costs
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink className="nav-link" to="/feedback">
                            <i className=" fa fa-address-card fa-lg" /> Feedback
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
                    <Button color="secondary" onClick={() => modalLogoutToggler(!toggleLogoutModal)} >
                        <i className="fa fa-sign-in fa-lg" /> Logout
                    </Button>
            
                    </NavItem>
                </Nav>

            </Collapse>
                <Modal isOpen={toggleLogoutModal} toggle={modalLogoutToggler}>
                <ModalHeader toggle={() => modalLogoutToggler(!toggleLogoutModal)}>Logout</ModalHeader>
                <ModalBody>
                    <Logout toggler={modalLogoutToggler}/>
                </ModalBody>
            </Modal>
            </React.Fragment>
        : 
            <React.Fragment>
                <Collapse isOpen={toggleNav} navbar>
                    <Nav className="float-xs-right" navbar>
                        <NavDropdown eventkey={1}
                                title={
                                    <div className="pull-left">
                                        <span>Proof of Concept - POC</span>
                                    </div>
                                }
                                id="basic-nav-dropdown" 
                        >
                            <NavDropdown.Item href="/pocsearch">POC Search</NavDropdown.Item>
                            <NavDropdown.Item href="/pochealthcarecosts">POC HealthCare Costs</NavDropdown.Item>        
                        </NavDropdown>
                    </Nav>

                    <Nav className="ml-auto" navbar>
                        <NavItem>
                        <Button color="secondary" onClick={() => modalLoginToggler(!toggleLoginModal)} >
                            <i className="fa fa-sign-in fa-lg" /> Login
                        </Button>
                        </NavItem>
                    </Nav>
                </Collapse>

            <Modal isOpen={toggleLoginModal} toggle={modalLoginToggler}>
                <ModalHeader toggle={() => modalLoginToggler(!toggleLoginModal)}>Login</ModalHeader>
                <ModalBody>
                    {/* //The onclose is needed as it will ensure that the login modal is closed after user has logged in  */}
                    <Login onClose={() => modalLoginToggler(!toggleLoginModal)}/>
                </ModalBody>
            </Modal>
            </React.Fragment>
            
    }
    return(
        <div>
            <Navbar dark sticky="top"  className=" navbar navbar-dark  navbar-expand-sm" expand="sm">
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

const mapStateToProps = state => ({
    auth: state.auth
  });
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(NavBar);