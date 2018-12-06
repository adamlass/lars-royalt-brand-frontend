import React, { Component, Text} from 'react';
import { Image, Button } from 'react-bootstrap';
import Facade from "../facade/facade"
import { Card, CardBody, CardImage, CardTitle, CardText, Col } from 'mdbreact';
import CurrencyFormat from "react-currency-format"

export default class CarView extends Component {
  constructor(props){
    super(props)
    this.state = {car: null}
  }

  async componentDidMount(){
    const car = await Facade.getCar(this.props.match.params.id)
    this.setState({car})
  }

  render(){
    const car = this.state.car
    if(car){
      console.log(JSON.stringify(car))
      return(
        
          <div>
              <div style={{margin: "auto", maxWidth: 600, width:"95%"}}>
                <Image src={car.imageURL} style={{width: "97%", maxWidth: 400, margin: "auto", boxShadow: "0px 0px 50px " + car.color}}></Image>
                
              </div>
              <div style={{textAlign: "center", color:"#f9f9f9", margin: "auto", maxWidth: 600, width:"95%"}}>
                <br/>
                <hr/>
                <h2>{car.model}, {car.energyType}{car.turbo ? ", Turbo":""}</h2>
                <p>Our {car.color} {car.model} {car.seats} seater at a price of</p>
                <p></p>
                <h3><CurrencyFormat value={car.price} displayType={'text'} thousandSeparator={true} prefix={'$'}/></h3>
                <hr/>
                <p><strong>Performance:</strong> {car.horsepower} HP - {car.rpm} rpm - {car.cylinders} cylinders</p>
                <p><strong>Eco-rating:</strong> {car.ecoRating}- {car.kmLiter} km/liter</p>
                <p><strong>Leather Type:</strong> {car.letherType}</p>
                <p><strong>Enigne Size:</strong> {car.engineSize}</p>
                <p><strong>Weight:</strong> {car.weight} kg</p>
                <p><strong>Dimentions:</strong> {car.length} x {car.width} x {car.height} m </p>
                <p><strong>Volumen:</strong> {car.volumen} m^3</p>
                <button onClick={() => window.location.href = "#/confirmed"} style={{fontSize:50, color: "#161210", backgroundColor: "#a68117", maxWidth: 500, width: "98%", border:"none"}}>Purchase</button>
              </div>

              <br/>
              <br/>
              <br/>
          </div>

      )
    }else {
      return(
        <div></div>
      )
    }
    
  }
  
  
}