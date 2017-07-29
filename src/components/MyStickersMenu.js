import React, { Component } from 'react';
import MyStickers from './MyStickers';

class MyStickersMenu extends Component {
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
            <button onClick={() => this.setState({ stayOpen: false })}>Get Stickers</button>
          </div>}
        {!this.state.stayOpen && <MyStickers name={this.state.name} />}
      </div>
    );
  }
}

export default MyStickersMenu;