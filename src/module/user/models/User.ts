import { Schema, model } from 'mongoose';
import { userInterfaceDocument } from '../dto/user.dto'

const geoLocationScheema:Schema = new Schema({
    lat:{
        type: String,
        required: false
    },
    long: {
        type: String,
        required: false
    },
  },{ _id : false })

const UserSchema = new Schema({
    /**
     * to do:
     * I need define data to be used
     */
    surname:{
        type: String,
        required: true
      },
    name:{
        type: String,
        required: true
      },
    userName:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    birthDay: {
        type: String,
        required: true
    },
    style: {
        type: Array,
        required: false
    },

    // geoLocation:geoLocationScheema,
    geoLocation: {
        type: geoLocationScheema,
        required: false
    },
    
    deleted:{
        type: Boolean,
        required: true
    },
    createdAt:{
        type: String,
        required: true
    },
    updatedAt:{
        type: String,
        required: true
    }
})

const User = model<userInterfaceDocument>('User', UserSchema);

export default User;