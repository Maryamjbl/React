import { useEffect, useState } from "react";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

function PostList2() {
  const [posts, setPosts] = useState<Post[]>([]);
  const fetchPosts = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();
    setPosts(data); 
  };

  useEffect(() => {
    fetchPosts();
  }, []); 

  return (
    <div className="container mb-4">
      <h2 className="text-info my-4">Post List</h2>     
      <ul className="list-group">
        {posts.map((post) => (
          <li key={post.id} className="list-group-item">
            <h4 className="text-danger mb-2">{post.title}</h4>
            <p className="text-secondary">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default PostList2;