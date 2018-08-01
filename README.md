# Nature Remo

[![npm version](https://badge.fury.io/js/nature-remo.svg)](https://badge.fury.io/js/nature-remo)

```
npm install nature-remo
```

## Basic Usage

```
const NatureRemo = require('nature-remo')

async function turnOffAirConditioner() {
  const instance = new NatureRemo.Cloud(process.env.NATURE_REMO_CLOUD_API_TOKEN)
  const airconList = await instance.listAircon()
  const aircon = airconList[0]
  const newAirconSettings = await instance.updateAirconSettings(
    aircon.id,
    {
      button: 'power-off'
    }
  )
  console.log('Aircon: turned off')
  console.debug(newAirconSettings)
}

async function turnOnAirConditioner() {
  const instance = new NatureRemo.Cloud(process.env.NATURE_REMO_CLOUD_API_TOKEN)
  const airconList = await instance.listAircon()
  const aircon = airconList[0]
  const newAirconSettings = await instance.updateAirconSettings(
    aircon.id,
    {
      operation_mode: 'cool',
      temperature: 24
    }
  )
  console.log('Aircon: turned on')
  console.debug(newAirconSettings)
}
```

You might want to obtain Nature Remo Cloud API token from https://home.nature.global.

Checkout [RunKit Notebook](https://runkit.com/uetchy/nature-remo-cloud-api-nodejs-example) for Nature Remo Cloud API example.
See __example/__ for various code examples.

Also, see [API Documents](https://uetchy.github.io/nature-remo/) for detailed API document.

## API Coverage

### Cloud API

```
new NatureRemo.Cloud(NATURE_REMO_CLOUD_API_TOKEN)
```

| ✓   | method | endpoint                                  | JS method               |
| --- | ------ | ----------------------------------------- | ----------------------- |
| ✓   | GET    | /1/users/me                               | getUser                 |
| ✓   | POST   | /1/users/me                               | updateUser              |
| ✓   | GET    | /1/devices                                | getDevices              |
| ✓   | POST   | /1/detectappliance                        | detectAppliance         |
| ✓   | GET    | /1/appliances                             | getAppliances           |
| ✓   | POST   | /1/appliances                             | createAppliance         |
| ✓   | POST   | /1/appliance_orders                       | updateAppliancesOrder   |
| ✓   | POST   | /1/appliances/{appliance}/delete          | deleteAppliance         |
| ✓   | POST   | /1/appliances/{appliance}                 | updateAppliance         |
| ✓   | POST   | /1/appliances/{appliance}/aircon_settings | updateAirconSettings    |
| ✓   | GET    | /1/appliances/{appliance}/signals         | getApplianceSignals     |
| ✓   | POST   | /1/appliances/{appliance}/signals         | createApplianceSignal   |
| ✓   | POST   | /1/appliances/{appliance}/signal_orders   | updateSignalOrders      |
| ✓   | POST   | /1/signals/{signal}                       | updateSignal            |
| ✓   | POST   | /1/signals/{signal}/delete                | deleteSignal            |
| ✓   | POST   | /1/signals/{signal}/send                  | sendSignal              |
| ✓   | POST   | /1/devices/{device}                       | updateDevice            |
| ✓   | POST   | /1/devices/{device}/delete                | deleteDevice            |
| ✓   | POST   | /1/devices/{device}/temperature_offset    | updateTemperatureOffset |
| ✓   | POST   | /1/devices/{device}/humidity_offset       | updateHumidityOffset    |

### Local API

```
new NatureRemo.Local(NATURE_REMO_LOCAL_ADDRESS)
```

| ✓   | method | endpoint  | JS method           |
| --- | ------ | --------- | ------------------- |
| ✓   | GET    | /messages | fetchReceivedSignal |
| ✓   | POST   | /messages | sendSignal          |

## Development

```
npm install

NATURE_REMO_CLOUD_TOKEN=<nature-remo-cloud-api-token>
NATURE_REMO_AIRCON_ID=<arbitorary aircon id>
npm test
```
