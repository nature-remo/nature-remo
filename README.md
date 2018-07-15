# Nature Remo

```
npm install nature-remo
```

## Basic Usage

```
const NatureRemo = require('nature-remo')

async function turnOffAirConditioner() {
  const instance = new NatureRemo(NATURE_REMO_CLOUD_API_TOKEN)
  const aircon = await instance.getAircon()
  const newAirconSettings = await instance.updateAirconSettings(aircon.id, {button: 'power-off'})
  console.log('Aircon: turned-off')
  console.debug(newAirconSettings)
}
```

## API Coverage

[API Documents](https://uetchy.github.io/nature-remo/)

### Cloud API

| ✓   | method | endpoint                                  | JS method            |
| --- | ------ | ----------------------------------------- | -------------------- |
|     | GET    | /1/users/me                               |                      |
|     | POST   | /1/users/me                               |                      |
| ✓   | GET    | /1/devices                                | getDevices           |
|     | POST   | /1/detectappliance                        |                      |
| ✓   | GET    | /1/appliances                             | getAppliances        |
|     | POST   | /1/appliances                             |                      |
|     | POST   | /1/appliance_orders                       |                      |
|     | POST   | /1/appliances/{appliance}/delete          |                      |
|     | POST   | /1/appliances/{appliance}                 |                      |
| ✓   | POST   | /1/appliances/{appliance}/aircon_settings | updateAirconSettings |
| ✓   | GET    | /1/appliances/{appliance}/signals         | getApplianceSignals  |
|     | POST   | /1/appliances/{appliance}/signals         |                      |
|     | POST   | /1/appliances/{appliance}/signal_orders   |                      |
|     | POST   | /1/signals/{signal}                       |                      |
|     | POST   | /1/signals/{signal}/delete                |                      |
|     | POST   | /1/signals/{signal}/send                  |                      |
|     | POST   | /1/devices/{device}                       |                      |
|     | POST   | /1/devices/{device}/delete                |                      |
|     | POST   | /1/devices/{device}/temperature_offset    |                      |
|     | POST   | /1/devices/{device}/humidity_offset       |                      |

### Local API

| ✓   | method | endpoint  | JS method |
| --- | ------ | --------- | --------- |
|     | GET    | /messages |           |
|     | POST   | /messages |           |

## Development

```
npm install

NATURE_REMO_CLOUD_TOKEN=<nature-remo-cloud-api-token>
NATURE_REMO_AIRCON_ID=<arbitorary aircon id>
npm test
```
