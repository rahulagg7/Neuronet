import {model, Schema} from "mongoose";
import { ObjectId } from "mongodb";

const userSchema = new Schema({
    username: string,
    password: string
})

export const UserModal = new modal({
    
})