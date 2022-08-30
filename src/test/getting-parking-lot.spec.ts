import { GettingPartingLotUseCase } from '../core/usecases/getting-parking-lot-usecase'
import { ParkingLotRepositoryInMemory } from '../infra/repositories/parking-lot-repository-in-memory'
interface ISut {
  sut: GettingPartingLotUseCase
  parkingLotRepositoryInMemory: ParkingLotRepositoryInMemory
}

const makeSut = (): ISut => {
  const parkingLotRepositoryInMemory = new ParkingLotRepositoryInMemory()
  const sut = new GettingPartingLotUseCase(parkingLotRepositoryInMemory)
  return { sut, parkingLotRepositoryInMemory }
}

describe('Enter Parking Lot', () => {
  test('Should get parking lot', async () => {
    const { sut } = makeSut()
    const parkingLot = await sut.execute('shopping')
    expect(parkingLot).toEqual(parkingLot)
  })
})
