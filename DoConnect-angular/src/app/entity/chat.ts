import { User } from "./user";

export class Chat{
    constructor(
        public id:number,
        public from_user:string,
        public to_user:string,
        public message:string,
        public datetime:string
    ){}
}