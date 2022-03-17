import axios, { AxiosInstance } from 'axios'
import * as NatureRemo from './interfaces'

export class Local {
  private readonly instance: AxiosInstance

  constructor(address: string) {
    this.instance = axios.create({
      baseURL: address,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
        'accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
      timeout: 5000,
    })
  }

  /**
   * Fetch the newest received IR signal
   */
  public async fetchReceivedSignal(): Promise<NatureRemo.SignalMessage> {
    const response = await this.instance.get('/messages')
    return response.data
  }

  /**
   * Send a signal
   */
  public async sendSignal(signal: NatureRemo.SignalMessage) {
    const response = await this.instance.post('/messages', signal)
    return response.data
  }
}
