import { ICategoriesRepository } from '../repositories/ICategoriesRepository';

interface IRequest {
  name: string;
  description: string;
}

// aplicando conceitos de SOLID

class CreateCategoryService {
  constructor(private categoryRepository: ICategoriesRepository) {}

  execute({ name, description }: IRequest): void {
    const categoryExists = this.categoryRepository.findByName(name);

    if (categoryExists) {
      throw new Error('Categoria já cadastrada anteriormente');
    }

    this.categoryRepository.create({ name, description });
  }
}

export { CreateCategoryService };
