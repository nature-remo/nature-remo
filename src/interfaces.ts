export type ApplianceType = 'AC' | 'TV' | 'LIGHT'

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
  name: string
  id: string
  created_at: string
  updated_at: string
  mac_address: string
  serial_number: string
  firmware_version: string
  temperature_offset: number
  humidity_offset: number
}

export type DeviceEventType = 'te' | 'hu' | 'il'

export interface DeviceWithEvents extends Device {
  /**
   * te: Temperature
   * hu: Humidity
   * il: Illumination
   */
  newest_events: { [key in DeviceEventType]: EventValue }
}

export interface EventValue {
  val: number
  created_at: string
}

export interface Model {
  id: string
  country: string
  manufacturer: string
  remote_name: string
  series: string
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
  dirh: string
  button: string
}

export interface UpdateAirconSettingsOptions {
  temperature: string
  operation_mode: string
  air_volume: string
  air_direction: string
  button: string
}

export interface AirconSettingsWithTimestamp extends AirconSettings {
  updated_at: string
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
  model: Model | null
  settings: AirconSettingsWithTimestamp | null
  aircon: Aircon | null
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
  updated_at: string
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
