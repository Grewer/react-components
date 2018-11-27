import * as React from 'react';
// @ts-ignore
import QueueAnim from 'rc-queue-anim';
import Animate from 'rc-animate';


interface IComponent {
  time: number
}

interface IState {
  time: number
  start: boolean
}


class TimeCountdown extends React.PureComponent<IComponent, IState> {
  state = {
    time: 0,
    start: false
  }
  private count: NodeJS.Timeout;

  static getDerivedStateFromProps(Props, State) {
    if (Props.start !== State.start) {
      return {
        start: Props.start,
        time: Props.time
      }
    }
    return State
  }

  timeCount = () => {
    console.log('trigger')
    if (this.props.time > 0) {
      if (this.state.time > 0) {
        this.setState({time: this.state.time - 1})
      }
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
    return (<div className="timeCountDown">
      <h3>时间:</h3>
      {/*<QueueAnim*/}
      {/*appear={false}*/}
      {/*interval={0}*/}
      {/*animConfig={[*/}
      {/*{opacity: [1, 1]},*/}
      {/*{opacity: [1, 0], translateY: [0, 20]}*/}
      {/*]}*/}
      {/*>*/}
      {/*<div key={`h${hours}`}>{hours}</div>*/}
      {/*<div style={{left: 30}} key={'hm'}>:</div>*/}
      {/*<div style={{left: 40}} key={`m${minutes}`}>{minutes}</div>*/}
      {/*<div style={{left: 70}} key={'mm'}>:</div>*/}
      {/*<div style={{left: 80}} key={`ss${seconds}`}>{seconds}</div>*/}
      {/*</QueueAnim>*/}
      <Animate
        transitionName="fade"
        component="div"
      >
        <div key={`h${hours}`}>{hours}</div>
      </Animate>
      <div style={{left: 35}}>:</div>
      <Animate
        transitionName="fade"
        component="div"
      >
        <div style={{left: 40}} key={`m${minutes}`}>{minutes}</div>
      </Animate>
      <div style={{left: 70}}>:</div>
      <Animate
        transitionName="fade"
        component="div"
      >
        <div style={{left: 80}} key={`ss${seconds}`}>{seconds}</div>
      </Animate>
    </div>);
  }
}

export default TimeCountdown
