/* tslint:disable:object-literal-sort-keys */
import nock from 'nock'
import { Local } from '../local'
import * as NatureRemo from '../interfaces'

const address = 'https://127.0.0.1'

beforeEach(() => {
  nock.disableNetConnect()
  nock(address)
    .get('/messages')
    .reply(200, {
      freq: 0,
      data: [0],
      format: 'us',
    })
    .post('/messages')
    .reply(200, {
      freq: 0,
      data: [0],
      format: 'us',
    })
})

test('#fetchReceivedSignal()', async () => {
  const app = new Local(address)
  const response = await app.fetchReceivedSignal()
  expect(Object.keys(response)).toEqual(['freq', 'data', 'format'])
})

test('#sendSignal(signal)', async () => {
  const app = new Local(address)
  const signal: NatureRemo.ISignalMessage = {
    freq: 0,
    data: [0],
    format: 'us',
  }
  const response = await app.sendSignal(signal)
  expect(Object.keys(response)).toEqual(['freq', 'data', 'format'])
})
