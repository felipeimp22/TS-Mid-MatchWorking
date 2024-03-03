import { Document} from 'mongoose';
    interface user {
        surname: string;
        name:string;
        userName:string;
        email: string;
        birthDay: string;
        password?: string;
        style?: Array<any>;
        deleted?: boolean;
        geoLocation?: { lat?: string, long?:string};
        createdAt?: string;
        updatedAt?: string;

     /**
     * to do:
     * I need define data to be used
     */
    }
export interface userInterfaceDocument extends Document, user {}

export interface responseUserDTO extends user {
    _id?: string;
}

export interface requestUserDTO extends Omit<user,'updatedAt'| "createdAt"| "deleted">{}