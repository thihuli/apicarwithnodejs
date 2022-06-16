import { v4 as uuidv4 } from 'uuid';

import { ICreateSpecificationDTO } from '../repositories/ISpecificationRepository';

class Specification {
  name: string;
  id?: string;
  description: string;
  created_at: Date;

  constructor({ name, description }: ICreateSpecificationDTO) {
    if (!this.id) {
      this.id = uuidv4();
    }
    if (!this.created_at) {
      this.created_at = new Date();
    }
    this.name = name;
    this.description = description;
  }
}

export { Specification };
