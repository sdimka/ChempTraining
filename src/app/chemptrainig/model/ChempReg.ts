import { Training } from './training';

export class ChempReg {
    id : number;
    name : string;
    surName : string;
    phone : string;
    email : string;

    classType : number;
    trainingType : number;

    sumTotal : number;

    selectedTrainig : Array<string>; 
}