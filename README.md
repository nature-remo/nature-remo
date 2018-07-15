# Nature Remo

## Cloud API Coverage

GET /1/users/me

| ✓   | method | endpoint                                  |
| --- | ------ | ----------------------------------------- |
|     | POST   | /1/users/me                               |
| ✓   | GET    | /1/devices                                |
|     | POST   | /1/detectappliance                        |
| ✓   | GET    | /1/appliances                             |
|     | POST   | /1/appliances                             |
|     | POST   | /1/appliance_orders                       |
|     | POST   | /1/appliances/{appliance}/delete          |
|     | POST   | /1/appliances/{appliance}                 |
| ✓   | POST   | /1/appliances/{appliance}/aircon_settings |
| ✓   | GET    | /1/appliances/{appliance}/signals         |
|     | POST   | /1/appliances/{appliance}/signals         |
|     | POST   | /1/appliances/{appliance}/signal_orders   |
|     | POST   | /1/signals/{signal}                       |
|     | POST   | /1/signals/{signal}/delete                |
|     | POST   | /1/signals/{signal}/send                  |
|     | POST   | /1/devices/{device}                       |
|     | POST   | /1/devices/{device}/delete                |
|     | POST   | /1/devices/{device}/temperature_offset    |
|     | POST   | /1/devices/{device}/humidity_offset       |
