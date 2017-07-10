import React from 'react';
import { Panel, Button, Grid } from 'react-bootstrap'

class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tab: false };
  }

  render() {
    const { tabName, Comp, ...props } = this.props

    return (
      <div id="tab">
        <button onClick={() => this.setState({ tab: !this.state.tab })}>{tabName}</button>
        <Panel id="panel" collapsible expanded={this.state.tab}><Comp {...props} /></Panel>
      </div>
    );
  }
};

export default Tab;