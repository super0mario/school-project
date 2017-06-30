import React, { Component } from 'react';
import { database } from "../firebase"
import _ from 'lodash'
import Tab from './Tab'
import { PanelGroup } from 'react-bootstrap'
import Sticker from './Sticker'

class MyStickers extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', stickers: null };

  }

  componentDidMount() {
    database.ref('/users/' + "liran/" + 'stickers').once('value').then(snapshot => {
      console.log(snapshot.val());
      this.setState({ stickers: snapshot.val() })
      // var newPostKey = database.ref().child('posts').push()
      // console.log(newPostKey);
      //database.ref().update({['/posts/' + newPostKey]: 4})


    })
  }

  nameChange(event) {
    this.setState({ value: event.target.value });
  }

  fetchStickers() {


  }


  render() {
    return (
      <div>
        <div>
          Your name:
          <input type="text" value={this.state.name} onChange={this.nameChange} />
          <button type="button" onClick={this.fetchStickers.bind(this)}>Get stickers</button>
        </div>
        <div>

          <PanelGroup>
            {_.map(this.state.stickers, sticker =>
              <Tab tabName={sticker.title} comp={Sticker} comments={sticker.comments} key={sticker.key} />)}
          </PanelGroup>
        </div>
      </div>
    );
  }
}

export default MyStickers;