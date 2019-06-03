/** User */
export interface IUser {
  id: string
  nickname: string
}

export interface IDetectedAirconModel {
  model: IModel
  params: IAirconSettings
}

export interface IEventValue {
  value: number
  created_at: Date
}

export interface INewestEvents {
  te: IEventValue
  hu: IEventValue
  il: IEventValue
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

export interface IDeviceWithEvents extends IDevice {
  newest_events: INewestEvents
}

export interface IModel {
  id: string
  manufacturer: string
  remote_name: string
  name: string
  image: string
}

export interface IAirconSettings {
  temp: number
  mode: string
  vol: string
  dir: string
  button: string
}

export interface IUpdateAirconSettingsResponse extends IAirconSettings {
  updated_at: Date
}

export interface IRange {
  modes: 'cool' | 'warm' | 'dry' | 'blow' | 'auto'
  fixedButtons: string[]
}

export interface IAircon {
  range: IRange
  tempUnit: string
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
