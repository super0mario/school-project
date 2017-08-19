import React from 'react';
import PrintSticker from './PrintSticker'
import GettingStarted from './GettingStarted'
import { PanelGroup } from 'react-bootstrap'
import { Panel } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const NavBar = () => {
  return (
    <div >
      <PanelGroup role="button">
        <LinkContainer to="/foo/bar">
          <Panel header="Panel 1" collapsible><GettingStarted /></Panel>
        </LinkContainer>
        <Panel header="Panel 2" collapsible defaultExpanded><PrintSticker /></Panel>
      </PanelGroup>
    </div>

  );
};

export default NavBar;

