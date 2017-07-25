import React, { Component } from 'react';

class SetSticker extends Component {
  constructor(props) {
    super(props);
    this.state = { title: null, moreInfo: null }
  }

  render() {
    return (
      <div className="stickerScanned">
        <div className="settingUp">Setting up {this.props.stickerUser}'s Sticker:</div>
        <div className="title">Title:<input type="text" value={this.state.title} onChange={(event) => this.setState({ title: event.target.value })} /></div>
        <div className="moreInfo">
          <div>More Info:</div>
          <textarea rows="4" cols="300" value={this.state.moreInfo} onChange={(event) => this.setState({ moreInfo: event.target.value })} /></div>
        <button className="activate" type="button" onClick={() => this.props.handleActivate(this.state.title, this.state.moreInfo)}>Activate</button>
      </div>
    );
  }

}

export default SetSticker;