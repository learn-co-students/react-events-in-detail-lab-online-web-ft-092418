// Code CoordinatesButton Component Here
import React, { Component } from 'react'


export default class CoordinatesButton extends Component {

    createArr = (event) => {
        const arr = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(arr)
        return arr
    }

    render () {
        return (
            <button onClick={this.createArr}>My Button</button>
        )
    }
}