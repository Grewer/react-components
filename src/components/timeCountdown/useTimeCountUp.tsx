import * as React from 'react';
import TimeCountUp from "@/components/timeCountdown/timeCountUp";

class UseTimeCountUp extends React.PureComponent {
  state = {time: 36004, start: false}

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        time: 36004
      })
    }, 1000)
    setTimeout(() => {
      this.setState({
        start: true
      })
    }, 3000)
    setTimeout(() => {
      this.setState({
        start: false
      })
    }, 10000)
    setTimeout(() => {
      this.setState({
        time: 123,
        start: true
      })
    }, 15000)
  }

  public render() {
    return (<div>
      <TimeCountUp start={this.state.start} time={this.state.time}/>
    </div>);
  }
}

export default UseTimeCountUp
