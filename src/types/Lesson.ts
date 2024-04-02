export interface Lesson {
  id: number;
  title: string;
  description: string;
  type: string;
  url: string;
  sequence: number;
  links: Array<string>;
}
