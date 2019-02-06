// Code CoordinatesButton Component Here
import React, {Component} from 'react'

export default class CoordinatesButton extends Component {

  fireCords = (event) => {
    let cordArray = [event.clientX, event.clientY]
    debugger
    console.log(this.props)

    this.props.onReceiveCoordinates(cordArray)
  }

  render(){
    return (<button onClick={this.fireCords}></button>)
  }
}
