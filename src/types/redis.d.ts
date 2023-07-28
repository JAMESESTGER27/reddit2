import { VoteType } from "@prisma/client";
export type CachedPost = {
  id: string;
  title: string;
  authorUsarname: string;
  content: string;
  currentVote: VoteType | null;
  createdAt: Date;
};
