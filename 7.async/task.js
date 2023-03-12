class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback) {
      this.alarmCollection.push({
        callback: callback,
        time: time,
        canCall: true
      });
     if((arguments.length != 2) || (time === null) || (callback === null)) {
      throw new Error('Отсутствуют обязательные аргументы');
    }
    let index = false;
   
    if (index) {
      console.warn('Уже присутствует звонок на это же время');
    }
  }

  removeClock(time) {
   let index = this.alarmCollection.some(alarm => alarm.time === time);
    if(index) {
      for(let i = 0; i < this.alarmCollection.length; i++) {
      this.alarmCollection.splice(index, 1);
    }
    }
  }

  getCurrentFormattedTime() {
    let thisMoment = new Date();
    return thisMoment.toLocaleTimeString("ru-Ru", {
      hour: "2-digit",
      minute: "2-digit",
    });
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

