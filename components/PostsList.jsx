import useSWR from 'swr';
import { motion } from 'framer-motion';
import { Post } from './cards/Post';
import MasonryWrapper from './wrappers/MasonryWrapper';
import Subheader from './Subheader';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function PostsList({ kind }) {
  const { data, error } = useSWR('/api/posts', fetcher);

  if (error) return <div>Failed to load posts</div>;
  if (!data)
    return (
      <div>
        <Subheader />
      </div>
    );

  const filteredPosts = data.filter(
    (post) =>
      (kind === 'all' ? true : post.kind === kind) && post.published === 'true'
  );

  return (
    <MasonryWrapper>
      {filteredPosts.map((post, index) => (
        <motion.li
          initial={{ opacity: 0, translateY: 10 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            when: 'afterChildren',
            delay: index * 0.05,
            type: 'spring',
            stiffness: 100,
          }}
          className="list-none"
          key={`${post.id}-${index}`}
        >
          <Post post={post} />
        </motion.li>
      ))}
    </MasonryWrapper>
  );
}
