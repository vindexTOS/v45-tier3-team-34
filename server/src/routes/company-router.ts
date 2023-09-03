import express from 'express'
import {
  update_company_detail_info,
  get_company_detail_info,
} from '../controller/company-controllers/Company-details-controller'

const companyRouter = express.Router()
// prefix /company
companyRouter
  .route('/info/:user_id')
  .get(get_company_detail_info)
  .patch(update_company_detail_info)

export default companyRouter
