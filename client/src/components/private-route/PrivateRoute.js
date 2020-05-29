import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";


const PrivateRoute = ({ component: Component, auth, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        auth.isAuthenticated === true ? (
          <Component {...props} />
        ) : (
           <React.Fragment>
                {window.alert(`Please login to access this page`)}
                <Redirect to="/home" />
          </React.Fragment>
        )
      }
    />
  );

  PrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired
  };

  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(mapStateToProps)(PrivateRoute);
  