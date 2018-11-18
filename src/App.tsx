import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import TimeCountdown from "@/components/timeCountdown";


class App extends React.Component {
  render() {
    console.log('render  App')
    return (
      <Router>
        <Switch>
          <Route path="/timeCountdown" component={TimeCountdown} exact={true}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
