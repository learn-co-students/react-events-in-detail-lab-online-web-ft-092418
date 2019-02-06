// Code DelayedButton Component Here
import React, {Component} from 'react'

export default class DelayedButton extends Component{


  render(){
    return (<button onClick={(event)=> {
      event.persist()
      this.props.onDelayedClick(event)
    }}></button>)
  }
}
