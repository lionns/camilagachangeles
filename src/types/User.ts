import type { Course } from "./Course";

export interface User {
    id: number;
    email: string;
    name: string;
    image?: string;
    courses?: Array<Course>;
    createdAt: Date;
}