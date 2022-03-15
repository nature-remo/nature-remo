import axios, { AxiosError, AxiosInstance } from 'axios'
import { ParsedUrlQueryInput, stringify } from 'querystring'
import * as NatureRemo from './interfaces'

export class Cloud {
  private readonly token: string
  private readonly instance: AxiosInstance

  constructor(token: string) {
    this.token = token
    this.instance = axios.create({
      baseURL: 'https://api.nature.global',
      headers: {
        Authorization: `Bearer ${this.token}`,
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      },
      timeout: 5000,
    })
  }

  /**
   * Fetch the authenticated user’s information.
   */
  public async getUser(): Promise<NatureRemo.User> {
    const response = await this._get<NatureRemo.User>('/1/users/me')
    return response
  }

  /**
   * Update authenticated user’s information.
   * @returns updated user
   */
  public async updateUser(nickname: string): Promise<NatureRemo.User> {
    const response = await this._post<NatureRemo.User>('/1/users/me', {
      nickname,
    })
    return response
  }

  /**
   * Fetch the list of Remo devices the user has access to.
   */
  public async getDevices(): Promise<NatureRemo.DeviceWithEvents[]> {
    const response = await this._get<NatureRemo.DeviceWithEvents[]>(
      '/1/devices'
    )
    return response
  }

  /**
   * Find the air conditioner best matching the provided infrared signal.
   * @param message JSON serialized object describing infrared signals. Includes "data", “freq” and “format” keys.
   */
  public async detectAppliance(
    message: NatureRemo.SignalMessage
  ): Promise<NatureRemo.DetectedAirconModel> {
    const response = await this._post<NatureRemo.DetectedAirconModel>(
      '/1/users/me',
      {
        message: JSON.stringify(message),
      }
    )
    return response
  }

  /**
   * get sensor value of arbitrary device. "humidity" and "illumination" will be undefined if Nature Remo mini
   */
  public async getSensorValue(): Promise<NatureRemo.SensorValue> {
    const device = await this.getDevices()
    return {
      humidity: device[0].newest_events.hu?.val,
      illumination: device[0].newest_events.il?.val,
      temperature: device[0].newest_events.te.val,
    } as NatureRemo.SensorValue
  }

  /**
   * Fetch the list of appliances.
   */
  public async getAppliances(
    type?: 'AC' | 'TV' | 'LIGHT'
  ): Promise<NatureRemo.Appliance[]> {
    const response = await this._get<NatureRemo.Appliance[]>('/1/appliances')

    if (type) {
      return response.filter((appliance) => appliance.type === type)
    } else {
      return response
    }
  }

  /**
   * Create a new appliance.
   */
  public async createAppliance(
    nickname: string,
    device: string,
    image: string,
    model?: string
  ): Promise<NatureRemo.Appliance[]> {
    const response = await this._post<NatureRemo.Appliance[]>('/1/appliances', {
      device,
      image,
      model,
      nickname,
    })
    return response
  }

  /**
   * Reorder appliances.
   * @param appliances list of appliance Ids
   */
  public async updateAppliancesOrder(appliances: string[]) {
    const response = await this._post('/1/appliance_orders', {
      appliances: appliances.join(','),
    })

    return response
  }

  /**
   * Delete appliance.
   */
  public async deleteAppliance(applianceId: string) {
    const response = await this._post(`/1/appliances/${applianceId}/delete`)
    return response
  }

  /**
   * Update appliance.
   */
  public async updateAppliance(
    applianceId: string,
    nickname: string,
    imageId: string
  ): Promise<NatureRemo.Appliance> {
    const response = await this._post<NatureRemo.Appliance>(
      `/1/appliances/${applianceId}`,
      {
        image: imageId,
        nickname,
      }
    )

    return response
  }

  /**
   * get all appliances which has AC characteristics
   */
  public async listAircon(): Promise<NatureRemo.Appliance[]> {
    return await this.getAppliances('AC')
  }

  /**
   * Update air conditioner settings.
   */
  public async updateAirconSettings(
    applianceId: string,
    settings: Partial<NatureRemo.UpdateAirconSettingsOptions>
  ): Promise<NatureRemo.AirconSettingsWithTimestamp> {
    const response = await this._post<NatureRemo.AirconSettingsWithTimestamp>(
      `/1/appliances/${applianceId}/aircon_settings`,
      settings
    )

    return response
  }

  /**
   * get all appliances which has TV characteristics
   */
  public async listTV(): Promise<NatureRemo.Appliance[]> {
    return await this.getAppliances('TV')
  }

  /**
   * Update TV button.
   */
  public async updateTV(
    applianceId: string,
    button: string
  ): Promise<NatureRemo.TVState> {
    const response = await this._post<NatureRemo.TVState>(
      `/1/appliances/${applianceId}/tv`,
      { button }
    )

    return response
  }

  /**
   * get all appliances which has LIGHT characteristics
   */
  public async listLight(): Promise<NatureRemo.Appliance[]> {
    return await this.getAppliances('LIGHT')
  }

  /**
   * Update Light button.
   */
  public async updateLight(
    applianceId: string,
    button: string
  ): Promise<NatureRemo.LightState> {
    const response = this._post<NatureRemo.LightState>(
      `/1/appliances/${applianceId}/light`,
      { button }
    )

    return response
  }

  /**
   * Fetch signals registered under this appliance.
   */
  public async getApplianceSignals(
    applianceId: string
  ): Promise<NatureRemo.Signal[]> {
    const response = await this._get<NatureRemo.Signal[]>(
      `/1/appliances/${applianceId}/signals`
    )
    return response
  }

  /**
   * Create a signal under this appliance.
   */
  public async createApplianceSignal(
    applianceId: string,
    name: string,
    message: NatureRemo.SignalMessage,
    imageId: string
  ): Promise<NatureRemo.Signal> {
    const response = await this._post<NatureRemo.Signal>(
      `/1/appliances/${applianceId}/signals`,
      {
        appliance: applianceId,
        image: imageId,
        message: JSON.stringify(message),
        name,
      }
    )
    return response
  }

  /**
   * Reorder signals under this appliance.
   */
  public async updateSignalOrders(applianceId: string, signalIds: string[]) {
    const response = await this._post(
      `/1/appliances/${applianceId}/signal_orders`,
      {
        signals: signalIds.join(','),
      }
    )
    return response
  }

  /**
   * Update infrared signal.
   */
  public async updateSignal(signalId: string, name: string, imageId: string) {
    const response = await this._post(`/1/signals/${signalId}`, {
      image: imageId,
      name,
    })
    return response
  }

  /**
   * Delete an infrared signal.
   */
  public async deleteSignal(signalId: string) {
    const response = await this._post(`/1/signals/${signalId}/delete`)
    return response
  }

  /**
   * Send infrared signal.
   */
  public async sendSignal(signalId: string) {
    const response = await this._post(`/1/signals/${signalId}/send`)
    return response
  }

  /**
   * Update Remo
   */
  public async updateDevice(deviceId: string, name: string) {
    const response = await this._post(`/1/devices/${deviceId}`, {
      name,
    })
    return response
  }

  /**
   * Delete Remo
   */
  public async deleteDevice(deviceId: string) {
    const response = await this._post(`/1/devices/${deviceId}/delete`)
    return response
  }

  /**
   * Update temperature offset.
   */
  public async updateTemperatureOffset(deviceId: string, offset: number) {
    const response = await this._post(
      `/1/devices/${deviceId}/temperature_offset`,
      {
        offset,
      }
    )
    return response
  }

  /**
   * Update humidity offset.
   */
  public async updateHumidityOffset(deviceId: string, offset: number) {
    const response = await this._post(
      `/1/devices/${deviceId}/humidity_offset`,
      {
        offset,
      }
    )
    return response
  }

  private async _post<T>(path: string, body?: ParsedUrlQueryInput): Promise<T> {
    try {
      const response = await this.instance.post(path, stringify(body))
      return response.data
    } catch (error) {
      const errResponse = (error as AxiosError).response
      if (errResponse) {
        throw new Error(`${errResponse.statusText} (${errResponse.status})`)
      }
      throw error
    }
  }

  private async _get<T>(path: string): Promise<T> {
    try {
      const response = await this.instance.get(path)
      return response.data
    } catch (error) {
      const errResponse = (error as AxiosError).response
      if (errResponse) {
        // Add the error message, it can be usefull in detecting what's heppening.
        throw new Error(`${errResponse.statusText} (${errResponse.status})`)
      }
      throw error
    }
  }
}
