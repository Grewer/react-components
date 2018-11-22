import React from 'react';
import {HashRouter as Router, Link, Route, Switch} from 'react-router-dom'
import UseTimeCountdown from "@/components/timeCountdown/useTimeCountdown";
import UseTimeCountUp from "@/components/timeCountdown/useTimeCountUp";

const Main = function (props) {
  return <div>
    列表:
    <ul>
      <li><Link to={"/timeCountdown"}>倒计时组件</Link></li>
      <li><Link to={"/timeCountUp"}>计时组件</Link></li>
    </ul>
  </div>
}


class App extends React.Component {
  render() {
    console.log('render  App')
    return (
      <div>
        <Router>
          <Route path="/" component={Main}/>
        </Router>
        <Router>
          <Switch>
            <Route path="/timeCountdown" component={UseTimeCountdown} exact={true}/>
            <Route path="/timeCountUp" component={UseTimeCountUp} exact={true}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
