import React from 'react';


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
      <button className="btn" onClick={this.submit}>download Sticker Page</button>
    </div>)
  }
}

export default PrintSticker;
