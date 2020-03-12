import React, {Component} from 'react';
import Main from './components/MainComponent'
import './App.css'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import logo from './logo.svg';
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

class App extends Component {
  render(){
    return(

      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main/>
          </div>
        </BrowserRouter>
      </Provider>

    )
  }
}

export default App;
