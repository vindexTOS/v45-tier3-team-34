import express from 'express';
import {
  getAllCompanies,
  createCompany,
  getCompany,
  updateCompany,
  deleteCompany,
} from '../controller/company-project-controller';

const router = express.Router();

router.route('/').get(getAllCompanies).post(createCompany);
router.route('/:id').get(getCompany).put(updateCompany).delete(deleteCompany);

export default router;
