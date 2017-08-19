import React, { Component } from 'react';
import { database } from "../firebase"
import _ from 'lodash'
import Tab from './Tab'
import { PanelGroup } from 'react-bootstrap'
import MyStickers from './MyStickers';

class PublicStickers extends Component {
  constructor(props) {
    super(props);
    this.state = { users: null };
  }

  componentDidMount() {
    database.ref('/users/').on('value', snapshot => {
      this.setState({ users: snapshot.val() })
    })
  }

  render() {
    return (
      <div id="PublicStickers">
        <PanelGroup>
          {_.map(this.state.users, (user, key) =>
            <Tab tabName={key} Comp={MyStickers} key={key} name={key}
            />)}
        </PanelGroup>
      </div>
    );
  }
}

export default PublicStickers;