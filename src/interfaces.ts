export declare namespace NatureRemo {
  /** User */
  interface User {
    id: string
    nickname: string
  }

  interface DetectedAirconModel {
    model: Model
    params: AirconSettings
  }

  interface Temperature {
    value: number
    created_at: Date
  }

  interface Humidity {
    value: number
    created_at: Date
  }

  interface Illumination {
    value: number
    created_at: Date
  }

  interface NewestEvents {
    te: Temperature
    hu: Humidity
    il: Illumination
  }

  interface SensorValue {
    temperature: number
    humidity: number
    illumination: number
  }

  interface Device {
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

  interface Model {
    id: string
    manufacturer: string
    remote_name: string
    name: string
    image: string
  }

  interface AirconSettings {
    temp: string
    mode: string
    vol: string
    dir: string
    button: string
  }

  interface UpdateAirconSettingsResponse extends AirconSettings {
    updated_at: Date
  }

  interface CoolMode {
    temp: string[]
    vol: string[]
    dir: string[]
  }

  interface WarmMode {
    temp: string[]
    vol: string[]
    dir: string[]
  }

  interface DryMode {
    temp: string[]
    vol: string[]
    dir: string[]
  }

  interface BlowMode {
    temp: string[]
    vol: string[]
    dir: string[]
  }

  interface AutoMode {
    temp: string[]
    vol: string[]
    dir: string[]
  }

  interface Modes {
    cool: CoolMode
    warm: WarmMode
    dry: DryMode
    blow: BlowMode
    auto: AutoMode
  }

  interface Range {
    modes: Modes
    fixedButtons: string[]
  }

  interface Aircon {
    range: Range
    tempUnit: string
  }

  interface Signal {
    id: string
    name: string
    image: string
  }

  interface Appliance {
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

  interface Signal {
    id: string
    name: string
    image: string
  }

  interface SignalMessage {
    data: number[]
    freq: number
    format: 'us'
  }
}
