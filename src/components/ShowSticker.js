import React, { Component } from 'react';
import Sticker from './Sticker';

class ShowSticker extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    console.log("props", this.props);

    return (
      <div>
        <div className='stickerTitle'>{this.props.sticker.title}</div>
        <Sticker {...this.props} />
        <button className='Home'>Home</button>
      </div>
    );
  }
}

export default ShowSticker;