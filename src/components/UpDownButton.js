import React, { Component } from 'react';

class UpDownButton extends Component {
    constructor(props) {
        super(props);
    }

    stickerSizeDown() {
        var prevValue = this.props.value
        var nextValue = prevValue > this.props.min ? prevValue - this.props.step : prevValue
        this.props.onChange(nextValue)
    }
    stickerSizeUp() {
        var prevValue = this.props.value
        var nextValue = prevValue < this.props.max ? prevValue + this.props.step : prevValue
        this.props.onChange(nextValue)
    }

    render() {
        return (
            <div>
                size:
                <button style={{ marginLeft: "5px" }} onClick={this.stickerSizeUp.bind(this)}>+</button>
                <button style={{ marginRight: "10px" }} onClick={this.stickerSizeDown.bind(this)}>-</button>
                {this.props.value}px &nbsp;
            </div>
        );
    }
}

export default UpDownButton