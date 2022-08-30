import express from 'express'
import { ExpressAdapter } from '../../../adapters/express.adapter'
import { ParkingLotController } from '../../../controllers/parking-lot-controller'
import { route } from '../../routes/routes'

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(route)
app.listen(3000, () => console.log('Server running ...'))