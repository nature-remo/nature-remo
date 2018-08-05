const NatureRemo = require('../dist')

// Print the value of the sensor of an Nature Remo
async function printSensorValue() {
  // Instantiate Nature Remo client with an API token
  const client = new NatureRemo.Cloud(process.env.NATURE_REMO_CLOUD_API_TOKEN)

  // Get a list of Nature Remo devices
  const allDevices = await client.getDevices()

  // Print a value of the sensors
  const remo = allDevices[0]
  console.log({
    name: remo.name,
    version: remo.firmware_version,
    temperature: remo.newest_events.te.val,
    humidity: remo.newest_events.hu.val,
    illumination: remo.newest_events.il.val,
    offsets: {
      temperature: remo.temperature_offset,
      humidity: remo.humidity_offset,
    },
  })
}

printSensorValue()
