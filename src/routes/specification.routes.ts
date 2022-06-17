import { Router } from 'express';

import { createSpecificationController } from '../modules/cars/useCases/createSpecifications';

const specificationsRouter = Router();

specificationsRouter.post('/', (request, response) => createSpecificationController.handle(request, response));

export { specificationsRouter };
