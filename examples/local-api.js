const NatureRemo = require('nature-remo')
const assert = require('assert')

const remoIP = process.env.NATURE_REMO_LOCAL_REMO_IP
assert(
  remoIP,
  'Missing NATURE_REMO_LOCAL_REMO_IP. Read the Local API doc: https://local-swagger.nature.global/'
)

async function receiveSignal() {
  const client = new NatureRemo.Local(remoIP)
  const signal = await client.fetchReceivedSignal()
  return signal
}

async function sendSignal(signal) {
  const client = new NatureRemo.Local(remoIP)
  const response = await client.sendSignal(signal)
  return response
}

async function main() {
  console.log('querying:', remoIP)

  const signal = await receiveSignal()

  if (!signal) {
    console.log('no signal detected')
    return
  }

  console.log('signal received:', signal)

  console.log('replaying received signal...')
  await sendSignal(signal)
}

main().catch((err) => console.log(err))
