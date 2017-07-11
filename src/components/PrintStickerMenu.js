import React, { Component } from 'react';
import PrintSticker from './PrintSticker'

class PrintStickerMenu extends Component {
  constructor() {
    super();
    this.state = { stayOpen: true, name: "" }
  }

  render() {
    return (
      <div className='buttonGreen'>
        {this.state.stayOpen &&
          <div>
            Your name:  <input type="text" value={this.state.name}
              onChange={(event) => this.setState({ name: event.target.value })} />
            <button onClick={() => this.setState({ stayOpen: false })}>next</button>
          </div>}
        {!this.state.stayOpen && <PrintSticker name={this.state.name}/>}
      </div>
    );
  }
}

export default PrintStickerMenu;
