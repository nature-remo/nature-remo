/* tslint:disable:object-literal-sort-keys */
import nock from 'nock'
import { Cloud } from '../cloud'

const TOKEN = 'anonymous'

beforeEach(() => {
  nock.disableNetConnect()
  nock('https://api.nature.global/1/')
    .get('/devices')
    .reply(200, [
      {
        name: 'Living Room',
        id: '4115884d-d846-4bd9-b0d1-95b6ae7d0664',
        created_at: '2017-10-18T01:16:02Z',
        updated_at: '2019-02-14T03:45:59Z',
        mac_address: 'aa:aa:aa:aa:aa',
        serial_number: '00000000000000',
        firmware_version: 'Remo/1.0.62-c33619c7',
        temperature_offset: 0,
        humidity_offset: 0,
        users: [
          {
            id: 'cc6dc349-4e78-41e4-9ce9-4442914ac972',
            nickname: 'johndoe',
            superuser: true,
          },
        ],
        newest_events: {
          hu: {
            value: 30,
            created_at: '2019-02-14T11:28:52Z',
          },
          il: {
            value: 24.6,
            created_at: '2019-02-14T10:00:22Z',
          },
          te: {
            value: 21.6,
            created_at: '2019-02-14T06:18:27Z',
          },
        },
      },
    ])
    .get('/appliances')
    .reply(200, [
      {
        id: '64f9cb47-428b-49e5-9ec6-0390cd00a4d1',
        device: {
          name: 'Living Room',
          id: '4115884d-d846-4bd9-b0d1-95b6ae7d0664',
          created_at: '2017-10-18T01:16:02Z',
          updated_at: '2019-02-14T03:45:59Z',
          mac_address: 'a0:20:a6:1f:e4:47',
          serial_number: '01000000003891',
          firmware_version: 'Remo/1.0.62-gabbf5bd',
          temperature_offset: -2,
          humidity_offset: 0,
        },
        model: {
          id: '0f743ab9-61fa-4781-a384-83855886e8fb',
          manufacturer: 'hitachi',
          remote_name: 'rar-4z3',
          series: 'Hitachi AC',
          name: 'Hitachi AC 002',
          image: 'ico_ac_1',
        },
        type: 'AC',
        nickname: 'Hitachi AC',
        image: 'ico_ac_1',
        settings: {
          temp: '26',
          mode: 'warm',
          vol: '4',
          dir: '',
          button: '',
          updated_at: '2019-02-14T03:25:00Z',
        },
        aircon: {
          range: {
            modes: {
              blow: {
                temp: [''],
                dir: [''],
                vol: ['1', '2', '3', '4', '5', 'auto'],
              },
              cool: {
                temp: [
                  '16',
                  '17',
                  '18',
                  '19',
                  '20',
                  '21',
                  '22',
                  '23',
                  '24',
                  '25',
                  '26',
                  '27',
                  '28',
                  '29',
                  '30',
                  '31',
                  '32',
                ],
                dir: [''],
                vol: ['1', '2', '3', '4', '5', 'auto'],
              },
              dry: {
                temp: [
                  '16',
                  '17',
                  '18',
                  '19',
                  '20',
                  '21',
                  '22',
                  '23',
                  '24',
                  '25',
                  '26',
                  '27',
                  '28',
                  '29',
                  '30',
                  '31',
                  '32',
                ],
                dir: [''],
                vol: ['1', '2', 'auto'],
              },
              warm: {
                temp: [
                  '16',
                  '17',
                  '18',
                  '19',
                  '20',
                  '21',
                  '22',
                  '23',
                  '24',
                  '25',
                  '26',
                  '27',
                  '28',
                  '29',
                  '30',
                  '31',
                  '32',
                ],
                dir: [''],
                vol: ['1', '2', '3', '4', '5', 'auto'],
              },
            },
            fixedButtons: ['airdir-tilt', 'power-off'],
          },
          tempUnit: 'c',
        },
        signals: [],
      },
      {
        id: 'a30f7bb3-81a6-40c2-9eca-bd23992dee78',
        device: {
          name: 'Living Room',
          id: 'e0381781-7f96-4a78-8cc7-4f10f9c554c0',
          created_at: '2017-10-18T01:16:02Z',
          updated_at: '2019-02-14T03:45:59Z',
          mac_address: 'a0:20:a6:1f:e4:47',
          serial_number: '01000000003891',
          firmware_version: 'Remo/1.0.62-gabbf5bd',
          temperature_offset: -2,
          humidity_offset: 0,
        },
        model: null,
        type: 'IR',
        nickname: 'TV',
        image: 'ico_tv',
        settings: null,
        aircon: null,
        signals: [
          {
            id: '56c070e0-30c9-4991-bc94-3df36de540fc',
            name: 'Power',
            image: 'ico_io',
          },
          {
            id: 'b4d6ff4c-9f79-418b-88b2-9650d261a04c',
            name: 'チャンネル',
            image: 'ico_display',
          },
        ],
      },
      {
        id: '45ef6b37-7e5b-f6d4-e92f-9f883794cc3d',
        device: {
          name: 'Remo E lite',
          id: '72f822bb-3b6b-8a10-a9ed-af9e12b7e4ae',
          created_at: '2020-05-02T01:42:08Z',
          updated_at: '2021-03-22T02:49:02Z',
          mac_address: '52:42:00:47:e6:85',
          bt_mac_address: '52:42:00:6f:2f:d5',
          serial_number: '4W122222222222',
          firmware_version: 'Remo-E-lite/1.1.27',
          temperature_offset: 0,
          humidity_offset: 0,
        },
        model: {
          id: '6e6b6f43-7d9f-7315-371c-80fc44ce9616',
          manufacturer: '',
          name: 'Smart Meter',
          image: 'ico_smartmeter',
        },
        type: 'EL_SMART_METER',
        nickname: 'Smart Meter',
        image: 'ico_smartmeter',
        settings: null,
        aircon: null,
        signals: [],
        smart_meter: {
          echonetlite_properties: [
            {
              name: 'coefficient',
              epc: 211,
              val: '1',
              updated_at: '2021-07-09T14:00:39Z',
            },
            {
              name: 'cumulative_electric_energy_effective_digits',
              epc: 215,
              val: '6',
              updated_at: '2021-07-09T14:00:39Z',
            },
            {
              name: 'normal_direction_cumulative_electric_energy',
              epc: 224,
              val: '100000',
              updated_at: '2021-07-09T14:00:39Z',
            },
            {
              name: 'cumulative_electric_energy_unit',
              epc: 225,
              val: '1',
              updated_at: '2021-07-09T14:00:39Z',
            },
            {
              name: 'reverse_direction_cumulative_electric_energy',
              epc: 227,
              val: '12',
              updated_at: '2021-07-09T14:00:39Z',
            },
            {
              name: 'measured_instantaneous',
              epc: 231,
              val: '500',
              updated_at: '2021-07-09T14:00:39Z',
            },
          ],
        },
      },
    ])
    .post(/\/appliances\/.+\/aircon_settings/)
    .reply(200, {
      temp: '26',
      mode: 'warm',
      vol: '4',
      dir: '',
      button: '',
      updated_at: '2019-02-14T12:47:59Z',
    })
    .get(/\/appliances\/.+\/signals/)
    .reply(200, [
      {
        id: '56c070e0-30c9-4991-bc94-3df36de540fc',
        name: 'Power',
        image: 'ico_io',
      },
      {
        id: 'b4d6ff4c-9f79-418b-88b2-9650d261a04c',
        name: 'チャンネル',
        image: 'ico_display',
      },
    ])
})

test('#getDevices()', async () => {
  const app = new Cloud(TOKEN)
  const response = await app.getDevices()
  expect(response).toBeInstanceOf(Array)
  expect(response[0].name).toEqual('Living Room')
})

test('#getAppliances()', async () => {
  const app = new Cloud(TOKEN)
  const response = await app.getAppliances()
  expect(response).toBeInstanceOf(Array)
  expect(response[0].device.name).toEqual('Living Room')
  expect(response[0]).not.toHaveProperty('smart_meter')

  expect(response[2].device.name).toEqual('Remo E lite')
  expect(response[2]).toHaveProperty('smart_meter')
  expect(response[2].smart_meter?.echonetlite_properties[0]).toEqual({
    name: 'coefficient',
    epc: 211,
    val: '1',
    updated_at: '2021-07-09T14:00:39Z',
  })
})

test('#listAircon', async () => {
  const app = new Cloud(TOKEN)
  const airconList = await app.listAircon()
  // assert.hasAnyKeys(airconList[0], ['id', 'aircon', 'signals'])
  expect(airconList[0]).toHaveProperty('id')
})

test('#getApplianceSignals', async () => {
  const app = new Cloud(TOKEN)
  const airconList = await app.listAircon()
  const airconId = airconList[0].id
  const response = await app.getApplianceSignals(airconId)
  expect(response).toBeInstanceOf(Array)
})

test('#updateAirconSettings()', async () => {
  const app = new Cloud(TOKEN)
  const airconList = await app.listAircon()
  const airconId = airconList[0].id
  const response = await app.updateAirconSettings(airconId, {
    button: 'power-off',
  })
  expect(Object.keys(response)).toEqual([
    'temp',
    'mode',
    'vol',
    'dir',
    'button',
    'updated_at',
  ])
})
