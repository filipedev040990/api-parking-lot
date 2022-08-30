import { ParkingLotAdapter } from "../../adapters/parking-lot-adatpter";
import { ParkingLotEntity } from "../../core/entities/parking-lot-entity";
import { ParkingLotRepositoryInterface } from "../../core/repositories/parking-lot-repository-interface";
import {dbPg} from '../db/pg-database'

export class ParkingLotRepositoryPg implements ParkingLotRepositoryInterface {
    async getByCode(code: string): Promise<ParkingLotEntity>{
        const parkingLotData = await dbPg.oneOrNone('select *, (select count(*) from parked_car pc where pc.code = pl.code) as occupied_spaces from parking_lot pl where pl.code = $1', [code])
        return ParkingLotAdapter.create(parkingLotData.code, parkingLotData.capacity, parkingLotData.open_hour, parkingLotData.close_hour, parkingLotData.occupied_spaces)
    }
    async saveParkedCar(code: string, plate: string, date: Date): Promise<void> {
        await dbPg.none('insert into parked_car (code, plate, date) values ($1, $2, $3)', [code, plate, date])
    }
}