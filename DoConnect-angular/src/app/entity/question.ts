import { Answer } from "./answer";
import { User } from "./user";

export class Question{
    constructor(
        public id:number,
        public description_question:string,
        public image_src:string,
        public datetime:string,
        public status:string,
        public topic:string,
        public title:string,
        public answers:Answer[],
        public qcreated_by:User,
        public qapproved_by:User
    ){}
}