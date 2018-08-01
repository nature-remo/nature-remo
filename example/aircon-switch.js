const NatureRemo = require('../dist')

async function toggleAirconSwitch() {
  const client = new NatureRemo.Cloud(process.env.NATURE_REMO_CLOUD_API_TOKEN)
  const airconList = await client.listAircon()
  const aircon = airconList[0]
  console.log(aircon)

  const isPowerOn = aircon.settings.button === 'power-off' ? false : true
  console.log(isPowerOn)
  if (isPowerOn) {
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
