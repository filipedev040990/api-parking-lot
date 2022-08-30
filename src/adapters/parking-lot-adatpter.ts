import { ParkingLotEntity } from '../core/entities/parking-lot-entity'

export class ParkingLotAdapter {
  static create (code: string, capacity: number, openHour: number, closeHour: number, occupiedSpaces: number): ParkingLotEntity {
    return new ParkingLotEntity(code, capacity, openHour, closeHour, occupiedSpaces)
  }
}
