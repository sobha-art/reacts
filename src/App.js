import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Nav from './Components/Nav';

class App extends Component {
  render() {
    return (
        <Router>
              <div className="App">
             <Nav />
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
              </div>
        </Router>
    );
  }
}
export default App;