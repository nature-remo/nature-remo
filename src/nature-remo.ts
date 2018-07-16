import axios, { AxiosInstance, AxiosPromise, AxiosResponse } from 'axios'
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

  private async _post<T>(path: string, body?: object): Promise<T> {
    try {
      const response = await this.instance.post(
        path,
        querystring.stringify(body)
      )
      return response.data
    } catch (error) {
      if (error.response) {
        throw new Error(`Response code is out of 2xx: ${error.response.status}`)
      }
      throw error
    }
  }

  private async _get<T>(path: string): Promise<T> {
    try {
      const response = await this.instance.get(path)
      return response.data
    } catch (error) {
      if (error.response) {
        throw new Error(`Response code is out of 2xx: ${error.response.status}`)
      }
      throw error
    }
  }

  // Fetch the authenticated user’s information.
  async getUser(): Promise<NatureRemo.User> {
    const response = await this._get<NatureRemo.User>('/1/users/me')
    return response
  }

  // Update authenticated user’s information.
  // returns updated user
  async updateUser(nickname: string): Promise<NatureRemo.User> {
    const response = await this._post<NatureRemo.User>('/1/users/me', {
      nickname,
    })
    return response
  }

  // Fetch the list of Remo devices the user has access to.
  async getDevices(): Promise<NatureRemo.DeviceWithEvents[]> {
    const response = await this._get<NatureRemo.DeviceWithEvents[]>(
      '/1/devices'
    )
    return response
  }

  // Find the air conditioner best matching the provided infrared signal.
  // Args:
  //  message: JSON serialized object describing infrared signals.
  //           Includes "data", “freq” and “format” keys.
  async detectAppliance(
    message: object
  ): Promise<NatureRemo.DetectedAirconModel> {
    const response = await this._post<NatureRemo.DetectedAirconModel>(
      '/1/users/me',
      {
        message: JSON.stringify(message),
      }
    )
    return response
  }

  // get sensor value of arbitorary device
  async getSensorValue(): Promise<NatureRemo.SensorValue> {
    const device = await this.getDevices()
    return <NatureRemo.SensorValue>{
      humidity: device[0].newest_events.hu.value,
      temperature: device[0].newest_events.te.value,
      illumination: device[0].newest_events.il.value,
    }
  }

  // Fetch the list of appliances.
  async getAppliances(): Promise<NatureRemo.Appliance[]> {
    const response = await this._get<NatureRemo.Appliance[]>('/1/appliances')
    return response
  }

  // Create a new appliance.
  async createAppliance(
    nickname: string,
    device: string,
    image: string,
    model?: string
  ): Promise<NatureRemo.Appliance[]> {
    const response = await this._post<NatureRemo.Appliance[]>('/1/appliances', {
      nickname,
      device,
      image,
      model,
    })
    return response
  }

  // Reorder appliances.
  // appliances: list of appliance Ids
  async updateAppliancesOrder(appliances: string[]) {
    const response = await this._post('/1/appliance_orders', {
      appliances: appliances.join(','),
    })

    return response
  }

  // Delete appliance.
  async deleteAppliance(applianceId: string) {
    const response = await this._post(`/1/appliances/${applianceId}/delete`)
    return response
  }

  // Update appliance.
  async updateAppliance(
    applianceId: string,
    nickname: string,
    imageId: string
  ): Promise<NatureRemo.Appliance> {
    const response = await this._post<NatureRemo.Appliance>(
      `/1/appliances/${applianceId}`,
      {
        nickname,
        image: imageId,
      }
    )

    return response
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
    const response = await this._post<NatureRemo.UpdateAirconSettingsResponse>(
      `/1/appliances/${applianceId}/aircon_settings`,
      settings
    )

    return response
  }

  // Fetch signals registered under this appliance.
  async getApplianceSignals(applianceId: string): Promise<NatureRemo.Signal[]> {
    const response = await this._get<NatureRemo.Signal[]>(
      `/1/appliances/${applianceId}/signals`
    )
    return response
  }

  // Create a signal under this appliance.
  async createApplianceSignal(
    applianceId: string,
    name: string,
    message: NatureRemo.SignalMessage,
    imageId: string
  ): Promise<NatureRemo.Signal> {
    const response = await this._post<NatureRemo.Signal>(
      `/1/appliances/${applianceId}/signals`,
      {
        name,
        message,
        appliance: applianceId,
        image: imageId,
      }
    )
    return response
  }

  // Reorder signals under this appliance.
  async updateSignalOrders(applianceId: string, signalIds: string[]) {
    const response = await this._post(
      `/1/appliances/${applianceId}/signal_orders`,
      {
        signals: signalIds.join(','),
      }
    )
    return response
  }

  // Update infrared signal.
  async updateSignal(signalId: string, name: string, imageId: string) {
    const response = await this._post(`/1/signals/${signalId}`, {
      name,
      image: imageId,
    })
    return response
  }

  // Delete an infrared signal.
  async deleteSignal(signalId: string) {
    const response = await this._post(`/1/signals/${signalId}/delete`)
    return response
  }

  // Send infrared signal.
  async sendSignal(signalId: string) {
    const response = await this._post(`/1/signals/${signalId}`)
    return response
  }

  // Update Remo
  async updateDevice(deviceId: string, name: string) {
    const response = await this._post(`/1/devices/${deviceId}`, {
      name,
    })
    return response
  }

  // Delete Remo
  async deleteDevice(deviceId: string) {
    const response = await this._post(`/1/devices/${deviceId}/delete`)
    return response
  }

  // Update temperature offset.
  async updateTemperatureOffset(deviceId: string, offset: number) {
    const response = await this._post(
      `/1/devices/${deviceId}/temperature_offset`,
      {
        offset,
      }
    )
    return response
  }

  // Update humidity offset.
  async updateHumidityOffset(deviceId: string, offset: number) {
    const response = await this._post(
      `/1/devices/${deviceId}/humidity_offset`,
      {
        offset,
      }
    )
    return response
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
