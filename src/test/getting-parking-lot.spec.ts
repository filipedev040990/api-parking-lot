import { GettingPartingLotUseCase } from '../core/usecases/getting-parking-lot-usecase'
import { ParkingLotRepositoryInMemory } from '../infra/repositories/parking-lot-repository-in-memory'
import { ParkingLotRepositoryPg } from '../infra/repositories/parking-lot-repository-pg'

interface ISut {
  sut: GettingPartingLotUseCase
  parkingLotRepositoryInMemory: ParkingLotRepositoryInMemory,
  parkingLotRepositoryPg: ParkingLotRepositoryPg
}

const makeSut = (): ISut => {
  const parkingLotRepositoryInMemory = new ParkingLotRepositoryInMemory()
  const parkingLotRepositoryPg = new ParkingLotRepositoryPg()
  const sut = new GettingPartingLotUseCase(parkingLotRepositoryPg)
  return { sut, parkingLotRepositoryInMemory, parkingLotRepositoryPg }
}

describe('Enter Parking Lot', () => {
  test('Should get parking lot', async () => {
    const { sut } = makeSut()
    const parkingLot = await sut.execute('shopping')
    expect(parkingLot).toEqual(parkingLot)
  })
})
