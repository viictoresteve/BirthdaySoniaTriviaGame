export interface Question {
    question: string;
    options: string[];
    answer: string;
    category: string;
  }
  export interface Team {
    name: string;
    color: string;
    skipCounter: number; // Add this property
  }