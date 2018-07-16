const { assert } = require('chai')
const lib = require('../dist').Cloud

const token = process.env.NATURE_REMO_CLOUD_TOKEN
const airconId = process.env.NATURE_REMO_AIRCON_ID

describe('NatureRemo.Cloud', function() {
  describe('#getDevices()', function() {
    it('should return response', async () => {
      const app = new lib(token)
      const response = await app.getDevices()
      assert.isArray(response)
      assert.equal(response[0].name, 'Remo')
    })
  })

  describe('#getAppliances()', function() {
    it('should return response', async () => {
      const app = new lib(token)
      const response = await app.getAppliances()
      assert.isArray(response)
      assert.equal(response[0].device.name, 'Remo')
    })
  })

  describe('#getAircon', function() {
    it('should return response', async () => {
      const app = new lib(token)
      const aircon = await app.getAircon()
      assert.hasAnyKeys(aircon, ['id', 'aircon', 'signals'])
      assert.exists(aircon.id)
    })
  })

  describe('#getApplianceSignals', function() {
    it('should return response', async () => {
      const app = new lib(token)
      const response = await app.getApplianceSignals(airconId)
      assert.isArray(response)
    })
  })

  describe('#updateAirconSettings()', function() {
    it('should return response', async () => {
      const app = new lib(token)
      const response = await app.updateAirconSettings(airconId, {
        button: 'power-off',
      })
      assert.hasAllKeys(response, [
        'temp',
        'mode',
        'vol',
        'dir',
        'button',
        'updated_at',
      ])
    })
  })
})
