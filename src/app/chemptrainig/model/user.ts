import { Training } from './training';

export class User {
    id : number;
    name : string;
    surName : string;
    fName : string;
    phone : string;
    email : string;

    catigory : number;

    selectedTrainig : Training; 
}