import { ParkingLotAdapter } from '../../adapters/parking-lot-adatpter'
import { ParkingLotEntity } from '../../core/entities/parking-lot-entity'
import { ParkingLotRepositoryInterface } from '../../core/repositories/parking-lot-repository-interface'

export class ParkingLotRepositoryInMemory implements ParkingLotRepositoryInterface {
  parkingLots = [
    {
      code: 'shopping',
      capacity: 30,
      open_hour: 8,
      close_hour: 22
    }
  ]

  parkedCars = []

  async getByCode (code: string): Promise<ParkingLotEntity> {
    const parkingLotData = this.parkingLots.find(parkingLot => parkingLot.code === code)
    const occupiedSpaces = this.parkedCars.length
    const parkingLot = ParkingLotAdapter.create(parkingLotData.code, parkingLotData.capacity, parkingLotData.open_hour,parkingLotData.close_hour, occupiedSpaces)    
    return Promise.resolve(parkingLot)
  }

  async saveParkedCar (code: string, plate: string, date: Date): Promise<void> {
    this.parkedCars.push({ code, plate, date })
  }
}
