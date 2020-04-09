/** User */
export interface IUser {
  id: string
  nickname: string
}

export interface IDetectedAirconModel {
  model: IModel
  params: IAirconSettings
}

export interface ISensorValue {
  temperature: number
  humidity: number
  illumination: number
}

export interface IDevice {
  id: string
  name: string
  temperature_offset: number
  humidity_offset: number
  created_at: Date
  updated_at: Date
  firmware_version: string
}

export type IDeviceEventType = 'te' | 'hu' | 'il'

export interface IDeviceWithEvents extends IDevice {
  newest_events: { [key in IDeviceEventType]: IEventValue }
}

export interface IEventValue {
  val: number
  created_at: Date
}

export interface IModel {
  id: string
  manufacturer: string
  remote_name: string
  name: string
  image: string
}

export interface IAirconSettings {
  temp: string
  mode: IAirconModeType
  vol: string
  dir: string
  button: string
}

export interface IUpdateAirconSettingsResponse extends IAirconSettings {
  updated_at: Date
}

export type IAirconModeType = 'cool' | 'warm' | 'dry' | 'blow' | 'auto'
export interface IAirconModeValue {
  temp: string[]
  dir: string[]
  vol: string[]
}

export interface IAirconRange {
  modes: { [key in IAirconModeType]: IAirconModeValue }
  fixedButtons: string[]
}

export interface IAircon {
  range: IAirconRange
  tempUnit: 'c' | 'f'
}

export interface IUpdateTVResponse {
  input: 't' | 'bs' | 'cs'
}

export interface ISignal {
  id: string
  name: string
  image: string
}

export interface IAppliance {
  id: string
  device: IDevice
  model: IModel
  nickname: string
  image: string
  type: string
  settings: IAirconSettings
  aircon?: IAircon
  signals: ISignal[]
}

export interface ISignal {
  id: string
  name: string
  image: string
}

export interface ISignalMessage {
  data: number[]
  freq: number
  format: 'us'
}
