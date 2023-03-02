class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error('Отсутствуют обязательные аргументы');
    } else {
      let index = false;
      if (this.alarmCollection.length > 0) {
        index = this.alarmCollection.findIndex(alarm => alarm.time === time);
      }
      if (index) {
        console.warn('Уже присутствует звонок на это же время');
      } else {
        this.alarmCollection.push({
          callback: callback,
          time: time,
          canCall: true
        });
      }
    }
  }

  removeClock(time) {
    let index = this.alarmCollection.findIndex(alarm => alarm.time === time);
    if (index) {
      this.alarmCollection.splice(index, 1);
    }
  }

  getCurrentFormattedTime() {
    let thisMoment = new Date();
    return thisMoment.toLocaleTimeString().substr(0, 5);
  }

  start() {
    if (this.intervalId === null) {
      this.intervalId = setInterval(() => {
        this.alarmCollection.forEach((alarm) => {
          if ((alarm.time === this.getCurrentFormattedTime()) && alarm.canCall) {
            alarm.canCall = false;
            alarm.callback();
          }
        });
      }, 1000);
    }
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach((alarm) => {
      alarm.canCall = true;
    });
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}

