import React, { Component } from 'react';
import Sticker from './Sticker';
import { Link } from 'react-router-dom'

class ShowSticker extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <div className='stickerTitle'>{this.props.sticker.title}</div>
        <Sticker {...this.props} />
        <Link to="/"><button className='Home' onClick={() => <Link to="/" replace />}>Home</button></Link>
      </div>
    );
  }
}

export default ShowSticker;