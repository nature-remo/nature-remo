const NatureRemo = require('../dist')

// Turn on/off air conditioner.
async function toggleAirconSwitch() {
  // Instantiate Nature Remo client with an API token
  const client = new NatureRemo.Cloud(process.env.NATURE_REMO_CLOUD_API_TOKEN)

  // Get a list of available air conditioners
  const airconList = await client.listAircon()

  // Use an air conditioner in the first of the list
  const aircon = airconList[0]
  console.log(aircon)

  // Check if air conditioner is powered on
  const isPoweredOn = aircon.settings.button === 'power-off' ? false : true
  console.log(isPoweredOn)

  // Toggle air conditioner's switch
  if (isPoweredOn) {
    // Turn off aircon
    await client.updateAirconSettings(aircon.id, { button: 'power-off' })
  } else {
    // Turn on aircon with specific operation mode
    await client.updateAirconSettings(aircon.id, {
      operation_mode: aircon.settings.mode,
    })
  }
}

toggleAirconSwitch()
