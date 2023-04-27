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
    question: string;
    topic: string;
    images: string[];
}

export interface QuestionType extends QuestionPostType {
    id: number;
    postedBy: string;
	postedAt: Date;
	approvedBy: string;
	isApproved: boolean;
}

export interface AnswerPostType {
    answer: string;
    images: string[];
}

export interface AnswerType extends AnswerPostType {
    id: number;
    postedBy: string;
	postedAt: Date;
	approvedBy: string;
	isApproved: boolean;
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
