import React from 'react';
import PrintSticker from './PrintSticker'
import GettingStarted from './GettingStarted'
import MyStickers from './MyStickers'
import { PanelGroup } from 'react-bootstrap'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap'
import Test from './Test'
import Tab from './Tab'
import { Panel, Button, Grid } from 'react-bootstrap'

class Application extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <main >
        <BrowserRouter>
          <div>
            <Grid>
              <PanelGroup>
                {/*<Tab tabName="Getting Started" comp={< GettingStarted />} />*/}
                {/*<Tab tabName="Print Stickers" comp={<PrintSticker />} />*/}
                {/*<Tab tabName="Print Stickers" comp={<Test />} />*/}
                <Tab tabName="My stickers" Comp={MyStickers} />
              </PanelGroup>
            </Grid>
          </div>
        </BrowserRouter>
      </main>
    );
  }
}

export default Application;


