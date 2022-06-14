import { Router } from 'express';

import { CategoriesRepositories } from '../repositories/categoriesRepository';

const categoriesRoutes = Router();
const categoriesRepositories = new CategoriesRepositories();

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  categoriesRepositories.create({ name, description });
  return response.status(201).send();
});

categoriesRoutes.get('/', (request, response) => {
  const allCategories = categoriesRepositories.list();

  return response.json(allCategories);
});

export { categoriesRoutes };
