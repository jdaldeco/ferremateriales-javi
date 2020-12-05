export class Sale {

    constructor(
        public folio: string,
        public productos: [],
        public cliente: string,
        public importe: number,
        public fecha: Date
    ) { }

}