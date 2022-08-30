import { ParkingLotEntity } from '../entities/parking-lot-entity'
import { ParkingLotRepositoryInterface } from '../repositories/parking-lot-repository-interface'

export class GettingPartingLotUseCase {
  constructor (private readonly userRepository: ParkingLotRepositoryInterface) {}

  async execute (code: string): Promise<ParkingLotEntity> {
    return await this.userRepository.getByCode(code)
  }
}
