import * as React from 'react';
// @ts-ignore
import QueueAnim from 'rc-queue-anim';
import Animate from 'rc-animate';


interface IComponent {
  time: number
  start: boolean
}

interface IState {
  time: number
}


class TimeCountdown extends React.PureComponent<IComponent, IState> {
  state = {
    time: 0
  }
  private count: NodeJS.Timeout;
  private hasStart: boolean = false


  timeCount = () => {
    console.log('trigger')
    if (this.props.time > 0) {
      if (!this.hasStart) {
        this.hasStart = true
        this.setState({
          time: this.props.time
        })
        console.log('此处触发')
      }
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
    const {start} = this.props
    if (!start) {
      return <div>00:00:00</div>
    }
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
