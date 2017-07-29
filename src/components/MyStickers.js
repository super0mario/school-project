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
    database.ref('/users/' + this.props.name + '/stickers').on('value', snapshot => {
      this.setState({ stickers: snapshot.val() })
    })
  }

  handleAddComment = (name, data, stickerKey) => {

    const stickerRef = '/users/' + this.props.name + '/stickers/' + stickerKey + '/comments/'
    var newCommentKey = database.ref(stickerRef).push().key
    database.ref(stickerRef).child(newCommentKey)
      .set({ name, data, time: moment().format("DD.MM.Y, H:mm") });
  }

  fetchStickers() {

  }
  render() {
    return (
      <div id="getStickers">
        <PanelGroup>
          {_.map(this.state.stickers, (sticker, key) => sticker.active &&
            <Tab tabName={sticker.title} Comp={Sticker}
              sticker={{ ...sticker, key }} handleAddComment={this.handleAddComment} key={key} />)}
        </PanelGroup>
      </div>
    );
  }
}

export default MyStickers;