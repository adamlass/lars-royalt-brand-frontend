import React, { Component, Text} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import { Grid, Row, Col, PageHeader, Image } from 'react-bootstrap';
import Facade from "./facade/facade"
import CarView from "./components/CarView"
import './App.css';

class App extends Component {
  render() {
    return (
      
      <div className="App" >
              <Image style={{width: "100%", maxWidth: 900}}src={require("./pics/LRB-brown.png")}/>
        <Switch>
              <Route exact path="/confirmed" component={OrderConfirmation}/>
              <Route path="/:id" component={CarView}/>
      </Switch>

      </div>
    );
  }
}

function OrderConfirmation(){
  return (
    <div>
      <h1 style={{color:"white"}}>Thank you for your order!</h1>
      <h5 style={{color:"white"}}>Your luxurious Lars Royality Brand car is on it's way to your garage.</h5>
    </div>
  )
}

export default App;
