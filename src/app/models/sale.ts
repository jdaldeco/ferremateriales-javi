import { User } from './user';
import { Product } from './product';

export class Sale {

    constructor(
        public nombre: string,
        public clientes: User,
        public productos: Product,
        public importe: number,
        public fecha: Date
    ) { }

}