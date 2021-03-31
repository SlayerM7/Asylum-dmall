function startAll() {

const logo = require('./utils/logo')

const { magentaBright: main, yellow, white, red } = require('chalk')
console.log('[1/4] Resolving packages..')
console.log(yellow("warning ") + white(' discord.js > snekfetch@3.6.4: use node-fetch instead'))
setTimeout(() => {
console.log('[2/4] Fetching packages..')
}, 700)
setTimeout(() => {
  console.log(yellow('warning ') + white('Discord.js@11.6.1 is outdated'))
}, 900)
setTimeout(() => {
  console.log('[3/4] Linking dependencies')
}, 1000)
setTimeout(() => {
  console.log('[4/4] Building fresh package')
}, 1200)
setTimeout(() => {

const readline = require('readline')
const Discord = require('discord.js');
const client = new Discord.Client();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}
console.clear();
logo()
rl.question(main("       > ") + white('Enter token')+main(': '), (tokenG) => {
rl.question(main("       > ") + white('Enter message')+main(': '), (msg) => {
const token = tokenG.trim();

client.on('ready', () => {

const a = []

client.users.forEach((user, i) => {
  a.push(user)
});


const amount = client.users.size;
go()
async function go() {
  console.clear();
  logo();
  let count = 0;
  client.users.forEach(async(usez, i) => {
    await sleep(1000)
    const user = usez
    if (usez.id === client.user.id) return;
    user.send(msg).then(() => {
      count++
      console.log(main(`[${count}/${amount}] `) + white('Sent message to ') + main(usez.username))
    }).catch(() => {
      console.log(main(`[?/${amount}] `) + white('Faild to send message to ') + main(usez.username))
    })
  })

}
})

client.login(token).catch(() => {
   console.clear()
   logo()
   console.log(red("       > ") + white('Invalid token'))
  setTimeout(() => {
    console.log(` `)
    rl.question(main("       > ") + white('Would you like to exit') + main(': '), (op) => {
      if (op === 'y' || op === 'yes') {
        process.exit();
        rl.close()
      }
      if (op === 'n' || op === 'no') {
        startAll()
        rl.close()
      }
    })
  }, 1000)
  return;
})
})
})

}, 1500)

}
startAll()
