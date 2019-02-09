// Code CoordinatesButton Component Here
import React from 'react'

export default class CoordinatesButton extends React.Component {
    position = (event) => {
        let pos = [event.clientX, event.clientY] 
        this.props.onReceiveCoordinates(pos)
    }

    render() {
        return (
            <button onClick={this.position}>coordinates</button>
        )
    }
}