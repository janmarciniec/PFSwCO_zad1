import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h2>Realizacja zadania nr1 w ramach laboratorium PFSwCO</h2>
          <h3>Jan Marciniec</h3>
          <Link to="/" class="link">Home</Link>
          <Link to="/fib-calc" class="link">Fib Calc</Link>
          <Link to="/documentation" class="link">Documentation</Link>
          <div id="content">
            <Route exact path="/"/>
            <Route path="/fib-calc" component={Fib} />
            <Route path="/documentation" component={OtherPage} />
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;
