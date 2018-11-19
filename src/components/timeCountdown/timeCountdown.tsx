import * as React from 'react';
import QueueAnim from 'rc-queue-anim';

// 方案 1

class TimeCountdown extends React.PureComponent {
  state = {
    time: '10:00:04',
    hours: '10',
    minutes: '00',
    seconds: '04',// 后续更新
  }

  changeNum = (num: string): string => {
    let min = Number(num)
    let afterChange = String(min - 1)
    if (afterChange.length === 1) {
      afterChange = '0' + afterChange
    }
    return afterChange
  }

  count = () => {
    const time = this.state.time
    let timeSplit = time.split(':')
    let afterChange: string
    let posi: number

    let l = timeSplit.length
    while (l--) {
      const cur = timeSplit[l]
      if (Number(cur) > 0) {
        afterChange = this.changeNum(cur)
        posi = l
        break;
      } else {
        timeSplit[l] = '59'
      }
    }

    // @ts-ignore
    timeSplit[posi] = afterChange

    this.setState({
      time: timeSplit.join(':')
    })
  }

  setTime = () => {
    setTimeout(() => {
      this.count()
      this.setTime()
    }, 1000)
  }

  componentDidMount() {
    this.setTime()
  }

  public render() {
    const time = this.state.time.split(':')
    return (<div className="timeCountDown">
      <h3>时间:</h3>
      <QueueAnim
        appear={false}
        interval={1000}
        animConfig={[
          {opacity: [1, 1]},
          {opacity: [0, 0], translateY: [0, 20]}
        ]}
      >
        {
          (function () {
            let l = time.length
            return time.map((v, k) => {
              let temp = <div style={{left: k * 28}} key={`${k}${v}`}>{v}</div>
              if (k !== l - 1) {
                temp = <div style={{left: k * 25}} key={`${k}${v}`}><span>{v}</span>:</div>
              }
              return temp
            })
          }())
        }
      </QueueAnim>
    </div>);
  }
}

export default TimeCountdown
