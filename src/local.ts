import axios, { AxiosInstance, AxiosError } from 'axios'
import * as NatureRemo from './interfaces'

export class Local {
  private readonly instance: AxiosInstance

  constructor(address: string) {
    this.instance = axios.create({
      baseURL: 'http://' + address,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
      },
      timeout: 20000,
    })
  }

  /**
   * Fetch the newest received IR signal
   * If there's no signal, returns null.
   */
  public async fetchReceivedSignal(): Promise<NatureRemo.SignalMessage | null> {
    try {
      const response = await this.instance.get('/messages', {
        headers: { Accept: 'application/json' },
      })
      return response.data
    } catch (err) {
      if ((err as AxiosError)?.response?.status === 404) {
        return null
      }
      throw err
    }
  }

  /**
   * Send a signal
   */
  public async sendSignal(signal: NatureRemo.SignalMessage) {
    const response = await this.instance.post('/messages', signal, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return response.data
  }
}
