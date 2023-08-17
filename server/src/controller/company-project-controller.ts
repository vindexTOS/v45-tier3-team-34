import Company_Project_model from '../model/company_project_model';
import { tryCatch } from '../middleware/tryCatch';
import { Request, Response, NextFunction } from 'express';

export const getAllCompanies = tryCatch(async (req: Request, res: Response) => {
  const companies = await Company_Project_model.find({});
  res.status(200).json({ companies });
});

export const createCompany = tryCatch(async (req: Request, res: Response) => {
  const newCompany = await Company_Project_model.create(req.body);
  res.status(201).json({ company: newCompany });
});

export const getCompany = tryCatch(async (req: Request, res: any) => {
  const projectId = req.params.id;
  const company = await Company_Project_model.findById(projectId);
  if (!company) {
    return res.status(404).json({ message: 'Company not found' });
  }
  res.status(200).json({ company });
});

export const updateCompany = tryCatch(async (req: Request, res: any) => {
  const projectId = req.params.id;
  const updatedCompany = await Company_Project_model.findByIdAndUpdate(
    projectId,
    req.body,
    { new: true },
  );
  if (!updatedCompany) {
    return res.status(404).json({ message: 'Company not found' });
  }
  res.status(200).json({ company: updatedCompany });
});

export const deleteCompany = tryCatch(async (req: Request, res: any) => {
  const projectId = req.params.id;
  const deletedCompany = await Company_Project_model.findByIdAndDelete(
    projectId,
  );
  if (!deletedCompany) {
    return res.status(404).json({ message: 'Company not found' });
  }
  res.status(204).send();
});
