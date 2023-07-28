import { Comment, Post, User, Subreddit, Vote } from "@prisma/client";

export type ExtendedPost = Post & {
  subreddit: Subreddit;
  vote: Vote[];
  author: User;
  comments: Comment[];
};
