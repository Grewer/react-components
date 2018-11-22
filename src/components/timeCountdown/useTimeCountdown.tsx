import * as React from 'react';
import TimeCountdown from "@/components/timeCountdown/timeCountdown";

class UseTimeCountdown extends React.PureComponent {
  state = {time: 36004}

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        time: 36004
      })
    }, 1000)
  }

  public render() {
    return (<div>
      <TimeCountdown time={this.state.time}/>
    </div>);
  }
}

export default UseTimeCountdown
