import React, { Component } from 'react';
import { database } from '../firebase'
import SetSticker from './SetSticker'
import ShowSticker from './ShowSticker'
import Banner from './Banner';
import moment from 'moment'

class StickerScanned extends Component {
  constructor(props) {
    super(props);
    this.stickerUser = props.match.params.user
    this.stickerID = props.match.params.stickerID
    this.state = { sticker: null, setStickerMenu: false, showStickerMenu: false }
    this.stickerRef = '/users/' + this.stickerUser + '/stickers/' + this.stickerID
  }

  componentDidMount() {
    database.ref(this.stickerRef).on('value', snapshot => {
      this.setState({ sticker: snapshot.val() })
      console.log(snapshot.val());
      console.log(this.state.sticker.active);
      this.state.sticker.active ? this.setState({ showStickerMenu: true }) : this.setState({ setStickerMenu: true })
    })
  }

  handleActivate = (title, moreInfo) => {
    const stickerRef = '/users/' + this.stickerUser + '/stickers/' + this.stickerID
    database.ref(stickerRef).set({ title, moreInfo, active: true });
    this.setState({ setStickerMenu: false });
    this.setState({ showStickerMenu: true });
  }


  handleAddComment = (name, data, stickerKey) => {

    const stickerRef = '/users/' + this.stickerUser + '/stickers/' + stickerKey + '/comments/'
    var newCommentKey = database.ref(stickerRef).push().key
    database.ref(stickerRef).child(newCommentKey)
      .set({ name, data, time: moment().format("DD.MM.Y, H:mm") });
  }

  render() {
    console.log(this.props.match.params);
    console.log(this.state.sticker);

    return (
      <div >
        <Banner />
        <div className='stickerScanned'>
          {this.state.sticker == null && 'Loading'}
          {this.state.setStickerMenu && <SetSticker handleActivate={this.handleActivate} stickerUser={this.stickerUser} />}
          {this.state.showStickerMenu && <ShowSticker sticker={{ ...this.state.sticker, key: this.stickerID }} handleAddComment={this.handleAddComment} />}
        </div>
      </div>
    );
  }
};


export default StickerScanned;