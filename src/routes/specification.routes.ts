import { Router } from 'express';

import { SpecificationRepository } from '../modules/cars/repositories/specificationRepository';
import { CreateSpecificationService } from '../modules/cars/services/createSpecificationService';

const specificationsRouter = Router();

const specificationsRepository = new SpecificationRepository();

specificationsRouter.post('/', (request, response) => {
  const { name, description } = request.body;
  const createSpecificationService = new CreateSpecificationService(specificationsRepository);

  createSpecificationService.execute({ name, description });

  return response.status(201).send();
});

export { specificationsRouter };
