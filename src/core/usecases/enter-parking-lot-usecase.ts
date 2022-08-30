import { ParkedCarEntity } from '../entities/parked-car-entity'
import { ParkingLotRepositoryInterface } from '../repositories/parking-lot-repository-interface'

export class EnterParkingLotUseCase {
  constructor (private readonly parkingLotRepository: ParkingLotRepositoryInterface) {}

  async execute (parkingLotData: any): Promise<ParkedCarEntity> {
    const { code, plate, date } = parkingLotData
    const parkingLot = await this.parkingLotRepository.getByCode(code)
    const parkedCar = new ParkedCarEntity(code, plate, date)

    if (!parkingLot.isOpen(parkedCar.date)) {
      throw new Error('The parking lot is closed')
    }
    if(parkingLot.isFull()){
      throw new Error('The parking lot is full')
    }
    await this.parkingLotRepository.saveParkedCar(parkedCar.code, parkedCar.plate, parkedCar.date)
    return parkedCar
  }
}
