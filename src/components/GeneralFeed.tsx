import { INIFINITE_SCROLLING_PAGINATION_RESULTS } from "@/config";
import { db } from "@/lib/db";
import PostFeed from "./PostFeed";

const GeneralFeed = async () => {
  const post = await db.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      vote: true,
      author: true,
      comments: true,
      subreddit: true,
    },
    take: INIFINITE_SCROLLING_PAGINATION_RESULTS,
  });
  return <PostFeed initialPosts={post} />;
};

export default GeneralFeed;