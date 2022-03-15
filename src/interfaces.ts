/** User */
export interface User {
  id: string
  nickname: string
}

export interface DetectedAirconModel {
  model: Model
  params: AirconSettings
}

export interface SensorValue {
  temperature: number
  humidity: number | undefined
  illumination: number | undefined
}

export interface Device {
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

export type DeviceEventType = 'te' | 'hu' | 'il'

export interface DeviceWithEvents extends Device {
  newest_events: { [key in DeviceEventType]: EventValue }
}

export interface EventValue {
  val: number
  created_at: Date
}

export interface Model {
  id: string
  manufacturer: string
  remote_name: string
  name: string
  image: string
}

export type TemperatureUnit = 'c' | 'f'

export interface AirconSettings {
  temp: string
  temp_unit: TemperatureUnit
  mode: AirconModeType
  vol: string
  dir: string
  button: string
}

export interface UpdateAirconSettingsOptions {
  temperature: string
  operation_mode: string
  air_volume: string
  air_direction: string
  button: string
}

export interface UpdateAirconSettingsResponse extends AirconSettings {
  updated_at: Date
}

export type AirconModeType = 'cool' | 'warm' | 'dry' | 'blow' | 'auto'

export interface AirconModeValue {
  temp: string[]
  dir: string[]
  vol: string[]
}

export interface AirconRange {
  modes: { [key in AirconModeType]: AirconModeValue }
  fixedButtons: string[]
}

export interface Aircon {
  range: AirconRange
  tempUnit: 'c' | 'f'
}

export interface Button {
  name: string
  image: string
  label: string
}

export interface LightState {
  brightness: string
  power: 'on' | 'off'
  last_button: string
}

export interface Light {
  state: LightState
  buttons: Button[]
}

export interface TVState {
  input: 't' | 'bs' | 'cs'
}

export interface TV {
  state: TVState
  buttons: Button[]
}

export interface Signal {
  id: string
  name: string
  image: string
}

export interface Appliance {
  id: string
  device: Device
  nickname: string
  image: string
  type: string
  signals: Signal[]
  aircon?: Aircon
  settings?: AirconSettings
  model?: Model
  tv?: TV
  light?: Light
  smart_meter?: SmartMeter
}

export interface SmartMeter {
  echonetlite_properties: EchonetliteProperties[]
}

export interface EchonetliteProperties {
  name: string
  epc: number
  val: string
  updated_at: Date
}

export interface Signal {
  id: string
  name: string
  image: string
}

export interface SignalMessage {
  freq: number
  data: number[]
  format: 'us'
}
