import { Router } from 'express'
import { ExpressAdapter } from '../../adapters/express.adapter'
import { ParkingLotController } from '../../controllers/parking-lot-controller'

const route = Router()

route.get('/parkingLots/:code', ExpressAdapter.create(ParkingLotController.getByCode))

export { route }