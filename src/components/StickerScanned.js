import React, { Component } from 'react';
import {database} from '../firebase'
import SetSticker from './SetSticker'
import ShowSticker from './ShowSticker'

class StickerScanned extends Component {
  constructor(props) {
    super(props);
    this.state = {sticker: null, setStickerMenu: false, showStickerMenu: false}
    this.stickerRef = '/users/' + props.match.params.user + '/stickers/' + props.match.params.stickerID  
  }
  
componentDidMount() {
    database.ref(this.stickerRef).on('value', snapshot => {
      this.state.sticker.active ? this.setState({ setStickerMenu: true }) : this.setState({ showStickerMenu: true })
      this.setState({ sticker: snapshot.val() })
    })
  }

changeMenu() {

}

render() {
      console.log(this.props.match.params);
      console.log(this.state.sticker);
      
  return (
    <div>
      {this.state.sticker == null && 'Loading'}
      {this.state.setStickerMenu && <SetSticker changeMenu={changeMenu} sticker={this.state.sticker}/>}
      {this.state.showStickerMenu && <ShowSticker />}
    </div>
    );
  }
};


export default StickerScanned;