const NatureRemo = require('nature-remo')

// Turn on/off air conditioner.
async function toggleAirconSwitch() {
  // Instantiate Nature Remo client with an API token
  const client = new NatureRemo.Cloud(process.env.NATURE_REMO_CLOUD_API_TOKEN)

  // Get a list of air conditioners
  const airconList = await client.listAircon()

  // Pick an air conditioner from the top of the list
  const aircon = airconList[0]
  console.log(aircon)

  // Check if the air conditioner is running
  const isPoweredOn = aircon.settings.button !== 'power-off'
  console.log(isPoweredOn)

  // Toggle the air conditioner's switch
  if (isPoweredOn) {
    // Turn off the aircon
    await client.updateAirconSettings(aircon.id, { button: 'power-off' })
  } else {
    // Turn on the aircon with specific operation mode
    await client.updateAirconSettings(aircon.id, {
      operation_mode: aircon.settings.mode,
    })
  }
}

toggleAirconSwitch()
