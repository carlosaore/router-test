import React from "react";
import './App.css';
import { Switch, Route } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";


class App extends React.Component {
  state = {
    home : "Home text from props"
  }


  render() {
    return (
      <div>
        <Navbar />
        <p>text</p>

        <Switch>
          <Route
            exact path="/"
            render={props =>
              <Home {...props} text={this.state.home} />
            }
          
          />  
          <Route
            path="/about"
            render={props =>
              <About {...props} />
            }  
          />
          <Route
            path="/contact"
            render={props =>
              <Contact {...props} />
            }
          />
        </Switch> 
      </div>
    )
  }
}




export default App;
