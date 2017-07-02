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
      <div>
        <Button onClick={() => this.setState({ tab: !this.state.tab })}>{tabName}</Button>
        <Panel collapsible expanded={true || this.state.tab}><Comp {...props} /></Panel>
      </div >
    );
  }
};

export default Tab;