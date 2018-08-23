declare namespace NatureRemo {
  /** User */
  export interface User {
    id: string
    nickname: string
  }

  export interface DetectedAirconModel {
    model: Model
    params: AirconSettings
  }

  export interface Temperature {
    value: number
    created_at: Date
  }

  export interface Humidity {
    value: number
    created_at: Date
  }

  export interface Illumination {
    value: number
    created_at: Date
  }

  export interface NewestEvents {
    te: Temperature
    hu: Humidity
    il: Illumination
  }

  export interface SensorValue {
    temperature: number
    humidity: number
    illumination: number
  }

  export interface Device {
    id: string
    name: string
    temperature_offset: number
    humidity_offset: number
    created_at: Date
    updated_at: Date
    firmware_version: string
  }

  interface DeviceWithEvents extends Device {
    newest_events: NewestEvents
  }

  export interface Model {
    id: string
    manufacturer: string
    remote_name: string
    name: string
    image: string
  }

  export interface AirconSettings {
    temp: string
    mode: string
    vol: string
    dir: string
    button: string
  }

  export interface UpdateAirconSettingsResponse extends AirconSettings {
    updated_at: Date
  }

  export interface CoolMode {
    temp: string[]
    vol: string[]
    dir: string[]
  }

  export interface WarmMode {
    temp: string[]
    vol: string[]
    dir: string[]
  }

  export interface DryMode {
    temp: string[]
    vol: string[]
    dir: string[]
  }

  export interface BlowMode {
    temp: string[]
    vol: string[]
    dir: string[]
  }

  export interface AutoMode {
    temp: string[]
    vol: string[]
    dir: string[]
  }

  export interface Modes {
    cool: CoolMode
    warm: WarmMode
    dry: DryMode
    blow: BlowMode
    auto: AutoMode
  }

  export interface Range {
    modes: Modes
    fixedButtons: string[]
  }

  export interface Aircon {
    range: Range
    tempUnit: string
  }

  export interface Signal {
    id: string
    name: string
    image: string
  }

  export interface Appliance {
    id: string
    device: Device
    model: Model
    nickname: string
    image: string
    type: string
    settings: AirconSettings
    aircon?: Aircon
    signals: Signal[]
  }

  export interface Signal {
    id: string
    name: string
    image: string
  }

  export interface SignalMessage {
    data: number[]
    freq: number
    format: 'us'
  }
}
