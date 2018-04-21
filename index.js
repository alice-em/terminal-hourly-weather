// npm install -g cli-weather

const {exec} = require('child_process');
const schedule = require('node-schedule');

var j = schedule.scheduleJob('01 * * * *', () => {
  exec('weather -z ZIPCODE', (error, stdout, stderr) => {
    const d = new Date();
    const time = `${d.toDateString()} ${d.toLocaleTimeString()}`
    if (error) {
      console.log(time)
      return;
    }
    console.log(stdout);
    console.log(time);
  })
})
