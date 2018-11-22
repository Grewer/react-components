import * as React from 'react';
// @ts-ignore
import Animate from 'rc-animate';
import QueueAnim from 'rc-queue-anim';


interface IComponent {
  time: number
  start: boolean
}

interface IState {
  time: number
}

class TimeCountUp extends React.PureComponent<IComponent, IState> {
  state = {
    time: 0
  }
  private count: NodeJS.Timeout;
  private lastTime?: number;

  timeCount = () => {
    console.log('trigger')
    if (this.props.start) {
      if (this.lastTime !== this.props.time) {
        this.lastTime = this.props.time
        this.setState({
          time: this.props.time
        })
        console.log('此处触发')
      }
      this.setState({time: this.state.time + 1})
    }
  }

  componentDidMount() {
    this.count = setInterval(this.timeCount, 1000)
  }

  getFormattedTime(time: number) {
    const totalSeconds = time
    let seconds: string = String(totalSeconds % 60 | 0)
    let minutes: string = String((totalSeconds / 60 | 0) % 60)
    let hours: string = String(totalSeconds / 3600 | 0)

    seconds = `${Number(seconds) < 10 ? '0' : ''}${seconds}`
    minutes = `${Number(minutes) < 10 ? '0' : ''}${minutes}`
    hours = `${Number(hours) < 10 ? '0' : ''}${hours}`

    return {seconds, minutes, hours}
  }

  componentWillUnmount() {
    clearInterval(this.count)
  }


  public render() {
    const {seconds, minutes, hours} = this.getFormattedTime(this.state.time)
    console.log(hours, minutes, seconds)
    if (!this.props.start) {
      return <div>00:00:00</div>
    }
    return (<div className="
    timeCountDown">
      <h3>时间:</h3>
      <QueueAnim
        appear={false}
        interval={0}
        animConfig={[
          {opacity: [1, 0]},
          {opacity: [1, 0]}
        ]}
      >
        <div key={`h${hours}`}>{hours}</div>
        <div style={{left: 30}} key={'hm'}>:</div>
        <div style={{left: 40}} key={`m${minutes}`}>{minutes}</div>
        <div style={{left: 70}} key={'mm'}>:</div>
        <div style={{left: 80}} key={`ss${seconds}`}>{seconds}</div>
      </QueueAnim>
    </div>);
  }
}

export default TimeCountUp
