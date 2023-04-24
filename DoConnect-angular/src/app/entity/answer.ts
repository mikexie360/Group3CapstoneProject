import { Question } from "./question";
import { User } from "./user";

export class Answer{
    constructor(
        public id:number,
        public description_answer:string,
        public img_src:string,
        public status:string,
        public datetime:string,
        public question:Question,
        public aaproved_by:User,
        public acreated_by:User
    ){}
}