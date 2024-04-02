import type { User } from "./User";

export interface Article {
  id: number;
  title: string;
  content: Array<Content>;
  comments?: Array<Comment>;
}

export interface Content {
  id: number;
  type: "IMAGE" | "TEXT";
  text: string;
  sequence: number;
}

export interface Comment {
  id: number;
  content: string;
  user: User;
  likes: number;
}
