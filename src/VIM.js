import React from 'react';
import Tav from "./components/Tab"
class VIM extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
    var r = React
  }

  render() {
    return <p>{this.state.someKey}</p>;
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
  "after": ["leader", "leader", "s"]
}
