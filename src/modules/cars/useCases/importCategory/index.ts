import { ImportCategoryController } from './importCategoriesController';
import { ImportCategoryUseCase } from './importCategoriesUseCase';

const importCategoryUseCase = new ImportCategoryUseCase();
const importCategoryController = new ImportCategoryController(importCategoryUseCase);

export { importCategoryController };
