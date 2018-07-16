# Nature Remo

```
npm install nature-remo
```

## Basic Usage

```
const NatureRemo = require('nature-remo')

async function turnOffAirConditioner() {
  const instance = new NatureRemo.Cloud(NATURE_REMO_CLOUD_API_TOKEN)
  const aircon = await instance.getAircon()
  const newAirconSettings = await instance.updateAirconSettings(aircon.id, {button: 'power-off'})
  console.log('Aircon: turned-off')
  console.debug(newAirconSettings)
}
```

See [API Documents](https://uetchy.github.io/nature-remo/) for further details.

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
