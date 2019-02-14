import axios, { AxiosInstance } from 'axios'
import { NatureRemo } from './interfaces'

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

  /**
   * Fetch the newest received IR signal
   */
  async fetchReceivedSignal(): Promise<NatureRemo.SignalMessage> {
    const response = await this.instance.get('/messages')
    return response.data
  }

  /**
   * Send a signal
   */
  async sendSignal(signal: NatureRemo.SignalMessage) {
    const response = await this.instance.post('/messages', signal)
    return response.data
  }
}
