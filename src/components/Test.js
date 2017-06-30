import React from 'react';
import UpDownButton from './UpDownButton'
import { HuePicker } from 'react-color';
import update from 'immutability-helper';
import Qrcodesvg from 'qrcodesvg';

class Test extends React.Component {

  constructor() {
    super()
    this.canvas = null
    this.state = { stickerSize: 80, stickerImage: null, stickerColors: [], stickerMethod: 'classic' }
  }
  componentDidMount() {
    this.canvas = document.getElementById("Canvas");
    this.canvas.ctx = this.canvas.getContext("2d");
    this.canvas.x = 0
    this.canvas.y = 0
    this.canvas.maxRowSize = 0;
  }

  downloadImage() {
    var a = document.createElement('a')
    a.href = this.canvas.toDataURL();
    a.download = "Stickers";
    a.click();
  }

  changeColor = (index, color) => {
    this.setState({ stickerColors: update(this.state.stickerColors, { [index]: { $set: color.hex } }) });
  };

  changeMethod(event) {
    this.setState({ stickerMethod: event.target.value })
  }

  generateQRsticker() {
    var qrcode = new Qrcodesvg("Hello!", this.state.stickerSize);
    var svg = qrcode.generate({
      "fill-colors": this.state.stickerColors,
      "method": this.state.stickerMethod
    })
    var src = 'data:image/svg+xml;base64,' + window.btoa(svg);
    var image = new Image();
    image.src = src;

    image.onload = function () {
      this.setState({ stickerImage: image.src })
    }.bind(this)

    return image
  }

  addSticker(image) {
    if (this.canvas.x + image.width > 720) {
      this.canvas.y += this.canvas.maxRowSize + 10
      this.canvas.x = 0
    }

    if (image.height > this.canvas.maxRowSize)
      this.canvas.maxRowSize = image.height

    this.canvas.ctx.drawImage(image, this.canvas.x, this.canvas.y);
    this.canvas.x += image.width + 10
  }

  render() {
    var image = this.generateQRsticker()
    return (
      <div >
        <div>
          <UpDownButton onChange={(stickerSize) => { this.setState({ stickerSize }); }}
            step={10} min={60} max={200} value={this.state.stickerSize} />
          <div>
            colors:
            <HuePicker color={this.state.stickerColors[0]} onChangeComplete={this.changeColor.bind(this, 0)} />
            <HuePicker color={this.state.stickerColors[1]} onChangeComplete={this.changeColor.bind(this, 1)} />
            <HuePicker color={this.state.stickerColors[2]} onChangeComplete={this.changeColor.bind(this, 2)} />
          </div>
          method:
          <select value={this.state.stickerMethod} onChange={this.changeMethod.bind(this)}>
            <option value="classic">classic</option>
            <option value="round">round</option>
          </select>
          <div>
            sticker Preview
          </div>
          <img src={this.state.stickerImage} alt="Sticker Preview" />
          <div>
            <button type="button" onClick={this.addSticker.bind(this, image)}>Add Sticker</button>
          </div>
        </div>
        <button type="button" onClick={this.downloadImage.bind(this)}>Download</button>
        <canvas id="Canvas" width="720" height="1018" style={{ border: "1px solid black" }}>
          Your browser does not support the HTML5 canvas tag.</canvas>
      </div>
    );
  }
};



export default Test;