import React from 'react';
// import PrintSticker from './PrintSticker'
import GettingStarted from './GettingStarted'
import MyStickers from './MyStickers'
import { PanelGroup } from 'react-bootstrap'
import { BrowserRouter, Route, Link , Switch} from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap'
import Test from './Test'
import Tab from './Tab'
import { Panel, Button, Grid } from 'react-bootstrap'
import PrintStickerMenu from './PrintStickerMenu'
import StickerScanned from './StickerScanned'

class Application extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/users/:user/stickers/:stickerID" component={StickerScanned}/>
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
              <div className="banner"> Scan <img src="https://firebasestorage.googleapis.com/v0/b/school-project-3b636.appspot.com/o/img%2FQRcode.png?alt=media&token=886ffda1-0527-49cc-9839-517828613af5" alt="QRcode" height="45" width="45" /> and comment</div>
              <PanelGroup id="mainMenu">
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



