declare namespace NatureRemo {
  export interface User {
    id: string
    nickname: string
  }

  export interface DetectedAirconModel {
    model: ApplianceModel
    params: PlainAirconSettings
  }

  export interface PlainDevice {
    id: string
    name: string
    firmware_version: string
    temperature_offset: number
    humidity_offset: number
    created_at: Date
    updated_at: Date
  }

  export interface Device {
    id: string
    name: string
    version: string
    offset: {
      temperature: number
      humidity: number
    }
    created_at: Date
    updated_at: Date
  }

  export interface PlainDeviceWithSensorValue extends PlainDevice {
    newest_events: {
      te: {
        val: number
        created_at: Date
      }
      hu: {
        val: number
        created_at: Date
      }
      il: {
        val: number
        created_at: Date
      }
    }
  }

  export interface DeviceWithSensorValue extends Device {
    sensor: {
      temperature: {
        value: number
        created_at: Date
      }
      humidity: {
        value: number
        created_at: Date
      }
      illumination: {
        value: number
        created_at: Date
      }
    }
  }

  export interface PlainAirconSettings {
    mode: string
    temp: string
    vol: string
    dir: string
    button: string
  }

  export interface AirconSettings {
    mode: string
    temperature: string
    speed: string
    wind_direction: string
    power: boolean
  }

  export interface UpdateAirconSettingsResponse extends PlainAirconSettings {
    updated_at: Date
  }

  export interface AirconModeSpec {
    temp: string[]
    vol: string[]
    dir: string[]
  }

  export interface PlainAirconSpec {
    range: {
      modes: {
        cool: AirconModeSpec
        warm: AirconModeSpec
        dry: AirconModeSpec
        blow: AirconModeSpec
        auto: AirconModeSpec
      }
      fixedButtons: string[]
    }
    tempUnit: string
  }

  export interface AirconSpec {
    range: {
      modes: {
        cool: AirconModeSpec
        warm: AirconModeSpec
        dry: AirconModeSpec
        blow: AirconModeSpec
        auto: AirconModeSpec
      }
      fixed_buttons: string[]
    }
    temperature_unit: string
  }

  export interface Signal {
    id: string
    name: string
    image: string
  }

  export interface ApplianceModel {
    id: string
    name: string
    manufacturer: string
    remote_name: string
    image: string
  }

  export interface PlainAppliance {
    id: string
    nickname: string
    type: string
    device: PlainDevice
    model: ApplianceModel
    image: string
    signals: Signal[]
    settings: PlainAirconSettings
    aircon?: PlainAirconSpec
  }

  export interface Appliance {
    id: string
    name: string
    type: string
    device: Device
    model: ApplianceModel
    image: string
    signals: Signal[]
    aircon?: {
      settings: AirconSettings
      spec: AirconSpec
    }
  }

  export interface SignalMessage {
    data: number[]
    freq: number
    format: 'us'
  }
}
