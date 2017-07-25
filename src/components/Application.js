import React from 'react';
// import PrintSticker from './PrintSticker'
import GettingStarted from './GettingStarted'
import MyStickers from './MyStickers'
import { PanelGroup } from 'react-bootstrap'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap'
import Test from './Test'
import Tab from './Tab'
import { Panel, Button, Grid } from 'react-bootstrap'
import PrintStickerMenu from './PrintStickerMenu'
import StickerScanned from './StickerScanned'
import Banner from './Banner';

class Application extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/users/:user/stickers/:stickerID" component={StickerScanned} />
          </Switch >
        </BrowserRouter>
      </div>
    );
  }
}

export default Application;

const Home = () => {
  return (
    <main >
      <div>
        <Grid>
          <PanelGroup id="mainMenu">
            debugger;
            <Banner />
            <Tab tabName="Getting started" Comp={GettingStarted} />
            <Tab tabName="Print stickers" Comp={PrintStickerMenu} />
            {/*<Tab tabName="Print Stickers" Comp={<Test />} />*/}
            <Tab tabName="My stickers" Comp={MyStickers} />
          </PanelGroup>
        </Grid>
      </div>
    </main>
  );
};



