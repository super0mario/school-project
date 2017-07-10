import React from 'react';
import { Button } from 'react-bootstrap'

class PrintSticker extends React.Component {
  constructor(props) {
    super(props)
    this.state = { stickerSize: 1 };
  }

  submit = () => {
  }

  render() {

    return (<div>
      <div>
      </div>
      <div>Preview</div>
      <div>Your name: <input /></div>
      <Button onClick={this.submit}>download Sticker Page</Button>
    </div>)
  }
}

export default PrintSticker;
