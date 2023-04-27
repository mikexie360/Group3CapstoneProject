import { JwtPayload } from "jwt-decode";

export const BASE_URL = 'http://localhost:8080';

export interface JWTCustomPayload extends JwtPayload {
    user: {
        id: number;
        name: string;
        username: string;
        password: string;
        email: string;
        userType: string;
    }
}

export interface UserLoginType {
    userName: string;
    password: string;
}
export interface UserRegisterType {
    username: string;
    password: string;
    name: string;
    email: string;
    userType: string;
}

export interface User {
    id:number;
    username: string;
    password: string;
    name: string;
    email: string;
    userType: string;
}

export interface UserType extends Omit<UserRegisterType, 'password'> {
    id: number;
}

export interface QuestionPostType {
    description_question: string;
    topic: string;
    title: string
    image_src: string;
}

export interface QuestionType extends QuestionPostType {
    id: number;
    qcreated_by: User;
    qapproved_by: User;
	datetime: string;
	status: string;
    answers: AnswerType;
}

export interface AnswerPostType {
    description_answer: string;
    img_src: string;
}

export interface AnswerType extends AnswerPostType {
    id: number;
    acreated_by: User;
	datetime: string;
	aapproved_by: User;
	status: string;
    question: QuestionType;
}

export const QUESTIONS_TOPICS = [
    'Actors',
    'Algebra',
    'Applications',
    'Arts',
    'Books',
    'Climate Change',
    'Comedy / Humour',
    'Commerce',
    'Computer Science',
    'Current Affairs',
    'Electronics',
    'Engineering',
    'Food',
    'Games',
    'General',
    'General Knowledge',
    'History',
    'Hobbies',
    'Humanity',
    'Information Technology',
    'Internet',
    'Mathematics',
    'Movies',
    'Music',
    'Pets',
    'Philosophy',
    'Programming',
    'Random',
    'Restaurants',
    'Science',
    'Television',
    'Travel',
    'Weather',
];
