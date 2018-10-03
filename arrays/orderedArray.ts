
export class OrderedArray {

    internalArray: number[];

    constructor() {
        this.internalArray = [];
    }


    public add(value: number) : boolean {
        this.internalArray[this.internalArray.length] = value;
        return true;
    }
    public addValues(values: number[]) : boolean {
        //Agrego un valor al final
        if (values.length === 0) {
            return false;
        }

        values.forEach((value) => {
            this.internalArray[this.internalArray.length] = value;
        });
        return true;
    }
    
    public find(searchValue: number, lowerIndex: number = 0, upperIndex: number = this.internalArray.length -1) : number {

        //Inicio
        let currIndex = Math.floor((lowerIndex + upperIndex) / 2);

        //Si no lo encontre
        if (lowerIndex > upperIndex || this.internalArray.length === 0) {
            return -1;
        }
        let value = this.internalArray[currIndex];
        //Si lo encontre
        if (value === searchValue) {
            return currIndex;
        } else if (value > searchValue) {
            //Voy a la mitad menor
            return this.find(searchValue, lowerIndex, currIndex - 1 );
        } else {//if (value < searchValue){
            return this.find(searchValue, currIndex + 1, upperIndex);
        }

    }

    public findInsertPosition(searchValue: number, lowerIndex: number = 0, upperIndex: number = this.internalArray.length -1) : number {

        //Inicio
        let currIndex = Math.floor((lowerIndex + upperIndex) / 2);

        //Si no lo encontre
        if (lowerIndex > upperIndex) {
            return lowerIndex;
        }
        let value = this.internalArray[currIndex];
        //Si lo encontre, duplicado, no se puede insertar
        if (value === searchValue) {
            return -1;
        } else if (value > searchValue) {
            //Voy a la mitad menor
            return this.findInsertPosition(searchValue, lowerIndex, currIndex - 1 );
        } else {//if (value < searchValue){
            return this.findInsertPosition(searchValue, currIndex + 1, upperIndex);
        }

    }
    
    public printAllValues() : string {
        let result = '';
        for (let i = 0; i < this.internalArray.length; i++) {
            result += this.internalArray[i];
        }
        return result;
    }

}