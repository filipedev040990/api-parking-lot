import { EnterParkingLotUseCase } from '../core/usecases/enter-parking-lot-usecase'
import { ParkingLotRepositoryInMemory } from '../infra/repositories/parking-lot-repository-in-memory'
import { ParkingLotRepositoryPg } from '../infra/repositories/parking-lot-repository-pg'

interface ISut {
  sut: EnterParkingLotUseCase
  parkingLotRepositoryInMemory: ParkingLotRepositoryInMemory,
  parkingLotRepositoryPg: ParkingLotRepositoryPg
}

const makeSut = (): ISut => {
  const parkingLotRepositoryInMemory = new ParkingLotRepositoryInMemory()
  const parkingLotRepositoryPg = new ParkingLotRepositoryPg()
  const sut = new EnterParkingLotUseCase(parkingLotRepositoryInMemory)
  return { sut, parkingLotRepositoryInMemory, parkingLotRepositoryPg }
}

const makeParkingLotData = (): any => ({
  code: 'shopping',
  plate: 'ABD-1234',
  date: new Date('2022-08-28T20:00:00')
})

describe('Enter Parking Lot', () => {
  test('Should EnterParkingLot', async () => {
    const { sut } = makeSut()
    const parkingLotData = makeParkingLotData()
    const parkingLot = await sut.execute(parkingLotData)
    expect(parkingLot).toEqual(parkingLot)
  })

  test('Should be closed', async () => {
    const { sut } = makeSut()
    const parkingLotData = makeParkingLotData()
    parkingLotData.date = new Date('2022-08-28T23:00:00')
    const parkingLot = sut.execute(parkingLotData)
    await expect(parkingLot).rejects.toThrowError('The parking lot is closed')
  })

  test('Should be full', async () => {
    const { sut } = makeSut()
    const parkingLotData = makeParkingLotData()

    for(let i = 0; i <= 5; i++){
      await sut.execute(parkingLotData)
    }

    const parkingLot = sut.execute(parkingLotData)
    await expect(parkingLot).rejects.toThrowError('The parking lot is full')
  })
})
