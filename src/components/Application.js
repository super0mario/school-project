import React from 'react';
import GettingStarted from './GettingStarted'
import { PanelGroup } from 'react-bootstrap'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Tab from './Tab'
import PrintStickerMenu from './PrintStickerMenu'
import StickerScanned from './StickerScanned'
import Banner from './Banner';
import MyStickersMenu from './MyStickersMenu';
import PublicStickers from './PublicStickers';

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
        <PanelGroup id="mainMenu">
          <Banner />
          <Tab tabName="Getting started" Comp={GettingStarted} />
          <Tab tabName="Print stickers" Comp={PrintStickerMenu} />
          <Tab tabName="My stickers" Comp={MyStickersMenu} />
          <Tab tabName="Public Stickers" Comp={PublicStickers} />
        </PanelGroup>
      </div>
    </main>
  );
};



