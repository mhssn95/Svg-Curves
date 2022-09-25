import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navigator from "./elements/navigator/Navigator";
import Cubic from "./elements/pages/Cubic";
import SmoothCubic from "./elements/pages/SmoothCubic";
import Quadratic from "./elements/pages/Quadratic";
import SmoothQuadratic from "./elements/pages/SmoothQuadratic";
import Arc from "./elements/pages/Arc";
import GithubCorner from "react-github-corner";
import {ReactComponent as Twitter} from './assets/Logo blue.svg'

function App() {
  return (
      <Router>
          <div className={"page"}>
              <GithubCorner href="https://github.com/mhssn95/Svg-Curves" bannerColor={"#64ceaa"} />
              <div className={"left"}>
                  <h1 id={"title"}>SVG Curves</h1>
                  <Navigator/>
                  <p style={{
                      marginTop: '8em',
                      color: '#606060'
                  }}>made with ❤️ by mhssn.</p>
                  <a href={"https://twitter.com/mhssn95"}><Twitter style={{
                      width:'15px',
                      marginRight: '7px'
                  }}/>mhssn95</a>
              </div>
              <div className={"right"}>
                  <Switch>
                      <Router exact path={"/"}>
                          <Cubic/>
                      </Router>
                      <Router exact path={"/smooth-cubic"}>
                          <SmoothCubic/>
                      </Router>
                      <Router exact path={"/quadratic"}>
                          <Quadratic/>
                      </Router>
                      <Router exact path={"/smooth-quadratic"}>
                          <SmoothQuadratic/>
                      </Router>
                      <Router exact path={"/arc"}>
                          <Arc/>
                      </Router>
                  </Switch>
              </div>
          </div>
      </Router>
  );
}

export default App;
