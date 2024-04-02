import type { Section } from "./Section";

export interface Course {
  id: number;
  name: string;
  description: string;
  prices?: Array<CoursePrice>;
  type: "PREMIUM" | "TALLER";
  image: string;
  public: boolean;
  sections?: Array<Section>;
}

export interface CoursePrice {
  id: number;
  currency: "USD" | "COP" | "EUR";
  value: number;
}