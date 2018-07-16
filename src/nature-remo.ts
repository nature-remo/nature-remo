import axios, { AxiosInstance } from 'axios'
import querystring from 'querystring'

export class Cloud {
  private readonly token: string
  private readonly instance: AxiosInstance

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

  // Fetch the authenticated user’s information.
  async getUser(): Promise<NatureRemo.User> {
    const response = await this.instance.get('/1/users/me')
    return response.data
  }

  // Update authenticated user’s information.
  // returns updated user
  async updateUser(nickname: string): Promise<NatureRemo.User> {
    const response = await this.instance.post(
      '/1/users/me',
      querystring.stringify({ nickname })
    )
    return response.data
  }

  // Fetch the list of Remo devices the user has access to.
  async getDevices(): Promise<NatureRemo.DeviceWithEvents[]> {
    const response = await this.instance.get('/1/devices')
    return response.data
  }

  // Find the air conditioner best matching the provided infrared signal.
  // Args:
  //  message: JSON serialized object describing infrared signals.
  //           Includes "data", “freq” and “format” keys.
  async detectAppliance(
    message: object
  ): Promise<NatureRemo.DetectedAirconModel> {
    const response = await this.instance.post(
      '/1/users/me',
      querystring.stringify({ message: JSON.stringify(message) })
    )
    return response.data
  }

  // get sensor value of arbitorary device
  async getSensorValue(): Promise<NatureRemo.SensorValue> {
    const device = await this.getDevices()
    return {
      humidity: device[0].newest_events.hu.value,
      temperature: device[0].newest_events.te.value,
      illumination: device[0].newest_events.il.value,
    }
  }

  // Fetch the list of appliances.
  async getAppliances(): Promise<NatureRemo.Appliance[]> {
    const response = await this.instance.get('/1/appliances')
    return response.data
  }

  // Create a new appliance.
  async createAppliance(
    nickname: string,
    device: string,
    image: string,
    model?: string
  ): Promise<NatureRemo.Appliance[]> {
    const response = await this.instance.post(
      '/1/appliances',
      querystring.stringify({ nickname, device, image, model })
    )
    return response.data
  }

  // Reorder appliances.
  // appliances: list of appliance Ids
  async updateAppliancesOrder(appliances: string[]) {
    const response = await this.instance.post(
      '/1/appliance_orders',
      querystring.stringify({ appliances: appliances.join(',') })
    )
    return response.data
  }

  // Delete appliance.
  async deleteAppliance(applianceId: string) {
    const response = await this.instance.post(
      `/1/appliances/${applianceId}/delete`
    )
    return response.data
  }

  // Update appliance.
  async updateAppliance(
    applianceId: string,
    nickname: string,
    imageId: string
  ): Promise<NatureRemo.Appliance> {
    const response = await this.instance.post(
      `/1/appliances/${applianceId}`,
      querystring.stringify({ nickname, image: imageId })
    )
    return response.data
  }

  // get arbitorary aircon device
  async getAircon(): Promise<NatureRemo.Appliance | null> {
    const appliances = await this.getAppliances()
    for (const appliance of appliances) {
      if (appliance.type === 'AC') {
        return appliance
      }
    }
    return null
  }

  // Update air conditioner settings.
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

  // Fetch signals registered under this appliance.
  async getApplianceSignals(applianceId: string): Promise<NatureRemo.Signal[]> {
    const response = await this.instance.get(
      `/1/appliances/${applianceId}/signals`
    )
    return response.data
  }

  // Create a signal under this appliance.
  async createApplianceSignal(
    applianceId: string,
    name: string,
    message: NatureRemo.SignalMessage,
    imageId: string
  ): Promise<NatureRemo.Signal> {
    const response = await this.instance.post(
      `/1/appliances/${applianceId}/signals`,
      querystring.stringify({
        name,
        message,
        appliance: applianceId,
        image: imageId,
      })
    )
    return response.data
  }

  // Reorder signals under this appliance.
  async updateSignalOrders(applianceId: string, signalIds: string[]) {
    const response = await this.instance.post(
      `/1/appliances/${applianceId}/signal_orders`,
      querystring.stringify({
        signals: signalIds.join(','),
      })
    )
    return response.data
  }

  // Update infrared signal.
  async updateSignal(signalId: string, name: string, imageId: string) {
    const response = await this.instance.post(
      `/1/signals/${signalId}`,
      querystring.stringify({
        name,
        image: imageId,
      })
    )
    return response.data
  }

  // Delete an infrared signal.
  async deleteSignal(signalId: string) {
    const response = await this.instance.post(`/1/signals/${signalId}/delete`)
    return response.data
  }

  // Send infrared signal.
  async sendSignal(signalId: string) {
    const response = await this.instance.post(`/1/signals/${signalId}`)
    return response.data
  }

  // Update Remo
  async updateDevice(deviceId: string, name: string) {
    const response = await this.instance.post(
      `/1/devices/${deviceId}`,
      querystring.stringify({
        name,
      })
    )
    return response.data
  }

  // Delete Remo
  async deleteDevice(deviceId: string) {
    const response = await this.instance.post(`/1/devices/${deviceId}/delete`)
    return response.data
  }

  // Update temperature offset.
  async updateTemperatureOffset(deviceId: string, offset: number) {
    const response = await this.instance.post(
      `/1/devices/${deviceId}/temperature_offset`,
      querystring.stringify({
        offset,
      })
    )
    return response.data
  }

  // Update humidity offset.
  async updateHumidityOffset(deviceId: string, offset: number) {
    const response = await this.instance.post(
      `/1/devices/${deviceId}/humidity_offset`,
      querystring.stringify({
        offset,
      })
    )
    return response.data
  }
}

export class Local {
  private readonly instance: AxiosInstance

  constructor(address: string) {
    this.instance = axios.create({
      baseURL: address,
      timeout: 5000,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      },
    })
  }

  // Fetch the newest received IR signal
  async fetchReceivedSignal(): Promise<NatureRemo.SignalMessage> {
    const response = await this.instance.get('/messages')
    return response.data
  }

  // Send a signal
  async sendSignal(signal: NatureRemo.SignalMessage) {
    const response = await this.instance.post('/messages', signal)
    return response.data
  }
}
