import { GettingPartingLotUseCase } from "../core/usecases/getting-parking-lot-usecase"
import { ParkingLotRepositoryPg } from "../infra/repositories/parking-lot-repository-pg"

export class ParkingLotController {
    static async getByCode(params,body) {
        const parkingLotRepository = new ParkingLotRepositoryPg()  
        const getParkingLotUsecase = new GettingPartingLotUseCase(parkingLotRepository)
        const parkinLot = await getParkingLotUsecase.execute(params.code)
        return parkinLot
    }
}