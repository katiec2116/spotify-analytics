import './App.css';
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
const code = new URLSearchParams(window.location.search).get('code')


function App() {
  return (
    <Router>
      <div>
        <div>
          {/* <Nav /> */}
          {code ? <Dashboard code={code} /> : <Login />}
            {/* <Route path="/login" component={Login} /> */}
            {/* <Route path="/share" component={Register} /> */}
          {/* </Switch> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
