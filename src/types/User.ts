import { Course } from "./Course";

export interface User {
  id: number;
  email: string;
  name: string;
  image: string | null;
  courses: Array<Course>;
}