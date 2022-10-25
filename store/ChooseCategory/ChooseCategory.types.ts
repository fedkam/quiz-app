export type Category = {
  id: number;
  title: string;
  created_at?: Date;
  updated_at?: Date;
  clues_count?: number;
};

export type Question = {
  id: number;
  answer: string;
  question: string;
  value: number;
  airdate: Date;
  created_at: Date;
  updated_at: Date;
  category_id: number;
  game_id: number;
  invalid_count?: any;
  category: Category;
};
