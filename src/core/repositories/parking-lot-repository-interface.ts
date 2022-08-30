import { ParkingLotEntity } from '../entities/parking-lot-entity'

export interface ParkingLotRepositoryInterface {
  getByCode(code: string): Promise<ParkingLotEntity>
  saveParkedCar(code: string, plate: string, date: Date): Promise<void>
}
