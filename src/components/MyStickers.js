import React, { Component } from 'react';
import { database } from "../firebase"
import _ from 'lodash'
import Tab from './Tab'
import { PanelGroup, Button } from 'react-bootstrap'
import Sticker from './Sticker'
import moment from 'moment'

class MyStickers extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', stickers: null };

  }

  componentDidMount() {
    database.ref('/users/' + "liran/" + 'stickers').on('value', snapshot => {
      this.setState({ stickers: snapshot.val() })
    })
  }

  handleAddComment(name, data, stickerKey) {

    const stickerRef = '/users/' + "liran/" + 'stickers/' + stickerKey + '/comments/'
    var newCommentKey = database.ref(stickerRef).push()
    console.log(newCommentKey.key);
    database.ref(stickerRef).child(newCommentKey.key)
      .set({ name, data, time: moment().format("DD.MM.Y, H:mm") });
  }

  fetchStickers() {

  }
  render() {
    return (
      <div>
        <div id="myStickers">
          Your name:
          <input type="text" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
          <button onClick={this.fetchStickers.bind(this)}>Get stickers</button>
        </div>
        <div>
          <PanelGroup>
            {_.map(this.state.stickers, (sticker, key) =>
              <Tab tabName={sticker.title} Comp={Sticker}
                sticker={{ comments: sticker.comments, key }} handleAddComment={this.handleAddComment} key={key} />)}
          </PanelGroup>
        </div>
      </div>
    );
  }
}

export default MyStickers;