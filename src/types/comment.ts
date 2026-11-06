import { CommentAuthor } from './user';

export type Comment = {
  id: string;
  date: string; // ISO
  user: CommentAuthor;
  comment: string;
  rating: number;
};
