// Dummy imports for learning
import {Post} from '@/lib/posts'

export default async function CommunityLayout(){
  const posts = await getPosts();
  return (
    <ul>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </ul>
  );
}