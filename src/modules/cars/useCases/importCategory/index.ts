import { CategoriesRepository } from '../../repositories/implementations/categoriesRepository';
import { ImportCategoryController } from './importCategoriesController';
import { ImportCategoryUseCase } from './importCategoriesUseCase';

const categoriesRepository = CategoriesRepository.getInstance();
const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepository);
const importCategoryController = new ImportCategoryController(importCategoryUseCase);

export { importCategoryController };
