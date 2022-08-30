import express from 'express'
import { ExpressAdapter } from '../../../adapters/express.adapter'
import { ParkingLotController } from '../../../controllers/parking-lot-controller'

const app = express()

app.get('/parkingLots/:code', ExpressAdapter.create(ParkingLotController.getByCode))
app.listen(3000, () => console.log('Server running ...'))