import type { Lesson } from "./Lesson";

export interface Section {
  id: number;
  title: string;
  description: string;
  sequence: number;
  lessons: Array<Lesson>;
}
