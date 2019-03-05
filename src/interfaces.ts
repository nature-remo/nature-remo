/** User */
export interface IUser {
  id: string
  nickname: string
}

export interface IDetectedAirconModel {
  model: IModel
  params: IAirconSettings
}

export interface ITemperature {
  value: number
  created_at: Date
}

export interface IHumidity {
  value: number
  created_at: Date
}

export interface IIllumination {
  value: number
  created_at: Date
}

export interface INewestEvents {
  te: ITemperature
  hu: IHumidity
  il: IIllumination
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
  temp: string
  mode: string
  vol: string
  dir: string
  button: string
}

export interface IUpdateAirconSettingsResponse extends IAirconSettings {
  updated_at: Date
}

export interface ICoolMode {
  temp: string[]
  vol: string[]
  dir: string[]
}

export interface IWarmMode {
  temp: string[]
  vol: string[]
  dir: string[]
}

export interface IDryMode {
  temp: string[]
  vol: string[]
  dir: string[]
}

export interface IBlowMode {
  temp: string[]
  vol: string[]
  dir: string[]
}

export interface IAutoMode {
  temp: string[]
  vol: string[]
  dir: string[]
}

export interface IModes {
  cool: ICoolMode
  warm: IWarmMode
  dry: IDryMode
  blow: IBlowMode
  auto: IAutoMode
}

export interface IRange {
  modes: IModes
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
