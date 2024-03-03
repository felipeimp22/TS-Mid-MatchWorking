import { Schema, model } from 'mongoose';
import { socialUserInterfaceDocument } from '../dto/socialUser.dto'

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

const SocialUserSchema = new Schema({
    username:{
        type: String,
        required: false
      },
      email:{
        type: String,
        required: true
      },
      provider:{
        type: String,
        required: true
      },
      style: {
        type: Array,
        required: false
    },
    geoLocation: {
      type: geoLocationScheema,
      required: false
    },
    birthDay: {
      type: String,
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

const SocialUser = model<socialUserInterfaceDocument>('SocialUser', SocialUserSchema);

export default SocialUser;