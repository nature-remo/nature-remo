const NatureRemo = require('nature-remo')

async function listDevices() {
  // Instantiate Nature Remo client with an API token
  const client = new NatureRemo.Cloud(process.env.NATURE_REMO_CLOUD_API_TOKEN)

  // Get a list of the devices
  const devices = await client.getDevices()
  for (const device of devices) {
    const { id, nickname, type } = device
    console.log({
      id,
      nickname,
      type,
    })
  }
}

listDevices().catch((err) => console.log(err))
