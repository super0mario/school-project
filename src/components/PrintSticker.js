
import React from 'react';
import UpDownButton from './UpDownButton'
import { HuePicker } from 'react-color';
import update from 'immutability-helper';
import Qrcodesvg from 'qrcodesvg';
import { database } from '../firebase'
const webSiteRef = 'https://school-project-3b636.firebaseapp.com/'

class PrintSticker extends React.Component {

  constructor(props) {
    super(props)
    this.canvas = null
    this.stickersIDs = []
    this.stickerID = ''
    this.state = {
      stickerSize: 80, stickerImage: null, stickerColors: [], stickerMethod: 'classic'
    }
    this.stickersRef = 'users/' + this.props.name + '/stickers/'
  }
  componentDidMount() {
    this.canvas = document.getElementById("Canvas");
    this.canvas.ctx = this.canvas.getContext("2d");
    this.canvas.x = 0
    this.canvas.y = 0
    this.canvas.maxRowSize = 0;
  }

  componentWillMount() {
    this.stickerID = database.ref(this.stickersRef).push().key
  }

  changeColor = (index, color) => {
    this.setState({ stickerColors: update(this.state.stickerColors, { [index]: { $set: color.hex } }) });
  };

  changeMethod(event) {
    this.setState({ stickerMethod: event.target.value })
  }

  addSticker(image) {
    this.stickersIDs.push(this.stickerID)
    this.stickerID = database.ref(this.stickersRef).push().key
console.log(this.stickersIDs);

    if (this.canvas.x + image.width > 720) {
      this.canvas.y += this.canvas.maxRowSize + 10
      this.canvas.x = 0
    }

    if (image.height > this.canvas.maxRowSize)
      this.canvas.maxRowSize = image.height

    this.canvas.ctx.drawImage(image, this.canvas.x, this.canvas.y);
    this.canvas.x += image.width + 10
  }

  generateQRsticker() {
    console.log(webSiteRef + this.stickersRef + this.stickerID);

    var qrcode = new Qrcodesvg(webSiteRef + this.stickersRef + this.stickerID, this.state.stickerSize);
    var svg = qrcode.generate({
      "fill-colors": this.state.stickerColors,
      "method": this.state.stickerMethod
    })
    var src = 'data:image/svg+xml;base64,' + window.btoa(svg);
    var image = new Image();
    image.src = src;

    image.onload = function () {
      document.getElementById("Img").src = image.src;
    }

    return image
  }

  downloadImage() {
    var a = document.createElement('a')
    a.href = this.canvas.toDataURL();
    a.download = "Stickers";
    a.click();
    this.stickersIDs.forEach(stickerID =>
      database.ref(this.stickersRef).child(stickerID).set({ active: false }));
    this.stickersIDs = []
  }

  render() {
    console.log('render');
    
    var image = this.generateQRsticker()
    return (
      <div id="printSticker">
        <div> Hello <strong>{this.props.name}</strong>. <br /> Add stickers. When you are done, press Download </div>
        <div >
          <div id="upDownButton"><UpDownButton onChange={(stickerSize) => { this.setState({ stickerSize }); }}
            step={10} min={20} max={200} value={this.state.stickerSize} /></div>
          <div>
            colors:
              <div className="huePicker"> <HuePicker color={this.state.stickerColors[0]} onChangeComplete={this.changeColor.bind(this, 0)} /></div>
            <div className="huePicker"> <HuePicker color={this.state.stickerColors[1]} onChangeComplete={this.changeColor.bind(this, 1)} /></div>
            <div className="huePicker"> <HuePicker color={this.state.stickerColors[2]} onChangeComplete={this.changeColor.bind(this, 2)} /></div>
          </div>
          method:
            <select value={this.state.stickerMethod} onChange={this.changeMethod.bind(this)}>
            <option value="classic">classic</option>
            <option value="round">round</option>
          </select>
          <div>
            sticker preview:
              </div>
          <div>
            <img id="Img" src={this.state.stickerImage} alt="Sticker Preview" />
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



export default PrintSticker;