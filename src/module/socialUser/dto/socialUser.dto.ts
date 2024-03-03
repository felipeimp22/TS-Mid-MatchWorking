import { Document} from 'mongoose';
    interface socialUser {
        username: string;
        email: string;
        style?: string;
        geoLocation?: { lat?: string, long?:string};
        provider: string;
        birthDay?: string;
        deleted?: boolean;
        createdAt?: string;
        updatedAt?: string;

     /**
     * to do:
     * I need define data to be used
     */
    }
export interface socialUserInterfaceDocument extends Document, socialUser {}

export interface responseSocialUserDTO extends socialUser {
    _id?: string;
}
export interface requestSocialUserDTO extends Omit<socialUser,'updatedAt'| "createdAt"| "deleted">{}