import * as express from 'express'
import CompanyRouter from './company/company'
import ReviewRouter from './review/review'

let apiRouter:express.Router = express.Router()



apiRouter.use('/company', CompanyRouter)
apiRouter.use('/review', ReviewRouter)
export default apiRouter
