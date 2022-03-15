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
  humidity: number | undefined
  illumination: number | undefined
}

export interface IDevice {
  id: string
  name: string
  temperature_offset: number
  humidity_offset: number
  created_at: Date
  updated_at: Date
  firmware_version: string
  mac_address: string
  serial_number: string
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

export type TemperatureUnit = 'c' | 'f'

export interface IAirconSettings {
  temp: string
  temp_unit: TemperatureUnit
  mode: IAirconModeType
  vol: string
  dir: string
  button: string
}

export interface IUpdateAirconSettingsOptions {
  temperature: string
  operation_mode: string
  air_volume: string
  air_direction: string
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

export interface IButton {
  name: string
  image: string
  label: string
}

export interface ILightState {
  brightness: string
  power: 'on' | 'off'
  last_button: string
}

export interface ILight {
  state: ILightState
  buttons: IButton[]
}

export interface ITVState {
  input: 't' | 'bs' | 'cs'
}

export interface ITV {
  state: ITVState
  buttons: IButton[]
}

export interface ISignal {
  id: string
  name: string
  image: string
}

export interface IAppliance {
  id: string
  device: IDevice
  nickname: string
  image: string
  type: string
  signals: ISignal[]
  aircon?: IAircon
  settings?: IAirconSettings
  model?: IModel
  tv?: ITV
  light?: ILight
  smart_meter?: ISmartMeter
}

export interface ISmartMeter {
  echonetlite_properties: IEchonetliteProperties[]
}

export interface IEchonetliteProperties {
  name: string
  epc: number
  val: string
  updated_at: Date
}

export interface ISignal {
  id: string
  name: string
  image: string
}

export interface ISignalMessage {
  freq: number
  data: number[]
  format: 'us'
}
