const NightMare = require('nightmare')
const nightmare = NightMare({show: true})
const axios = require('axios')
let timer;
let totaltime = 0;

const run = async () => {
  // nightmare.on('page', (p1, p2, p3) => {
  //   console.log(p1, p2, p3)
  // }).then(res => {
  //   console.log(res)
  // }).catch(err => {
  //   console.log(err)
  // })

  await nightmare.goto('http://127.0.0.1/test.html')
  nightmare.wait('#su').then(res => {
    console.log(res, 11)
  });
}


run()



