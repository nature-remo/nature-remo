import axios, { AxiosInstance } from 'axios'
import querystring from 'querystring'

class NatureRemo {
  token: string
  instance: AxiosInstance

  constructor(token: string) {
    this.token = token
    this.instance = axios.create({
      baseURL: 'https://api.nature.global',
      timeout: 5000,
      headers: {
        Authorization: `Bearer ${this.token}`,
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      },
    })
  }

  async getDevices(): Promise<NatureRemo.DeviceWithEvents[]> {
    const response = await this.instance.get('/1/devices')
    return response.data
  }

  async getSensorValue(): Promise<NatureRemo.SensorValue> {
    const device = await this.getDevices()
    return {
      humidity: device[0].newest_events.hu.value,
      temperature: device[0].newest_events.te.value,
      illumination: device[0].newest_events.il.value,
    }
  }

  async getAppliances(): Promise<NatureRemo.Appliance[]> {
    const response = await this.instance.get('/1/appliances')
    return response.data
  }

  async getAircon(): Promise<NatureRemo.Appliance | null> {
    const appliances = await this.getAppliances()
    for (const appliance of appliances) {
      if (appliance.type === 'AC') {
        return appliance
      }
    }
    return null
  }

  async updateAirconSettings(
    applianceId: string,
    settings: {}
  ): Promise<NatureRemo.UpdateAirconSettingsResponse> {
    const response = await this.instance.post(
      `/1/appliances/${applianceId}/aircon_settings`,
      querystring.stringify(settings)
    )
    return response.data
  }

  async getApplianceSignals(applianceId: string): Promise<NatureRemo.Signal[]> {
    const response = await this.instance.get(
      `/1/appliances/${applianceId}/signals`
    )
    return response.data
  }
}

module.exports = NatureRemo
