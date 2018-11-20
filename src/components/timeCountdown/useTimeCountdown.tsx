import * as React from 'react';
import TimeCountdown from "@/components/timeCountdown/timeCountdown";

class UseTimeCountdown extends React.PureComponent {
  state = {start: false, time: 36184}

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        start: true
      })
    }, 1000)
    setTimeout(() => {
      this.forceUpdate()
    }, 2000)

  }

  public render() {
    return (<div>
      <TimeCountdown time={this.state.time} start={this.state.start}/>
    </div>);
  }
}

export default UseTimeCountdown
