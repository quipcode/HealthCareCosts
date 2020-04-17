import React, {Component} from 'react';
import history from './history';
import Main from './components/MainComponent'
import './App.css'
// import { createBrowserHistory } from 'history'
import jwt_decode from "jwt-decode";

import {Router, BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'

import setAuthToken from './utils/setAuthToken'
import {setCurrentUser, loginUser, logoutUser} from './redux/actions/ActionCreators'
import './App.css';
import {ConfigureStore} from './redux/configureStore'
const store = ConfigureStore()



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn Re
//         </a>
//       </header>
//     </div>
//   );
// }

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./home";
  }
}

class App extends Component {
  render(){
    return(

      <Provider store={store}>
        <Router history={history} >
          <div className="App">
            <Main/>
          </div>
        </Router>
      </Provider>

    )
  }
}

export default App;
