import { useState } from "react";

type Post = {
  id: number;
  title: string;
  body: string;
};
const postsStatic: Post[] = [
  {
    id: 101,
    title: "Understanding Digital Lifestyle",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt nihil, quo, unde assumenda commodi deserunt vitae earum at cumque nam est laboriosam. Dolorem itaque expedita similique a porro libero ipsam.",
  },
  {
    id: 102,
    title: "Mastering Time Management",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt nihil, quo, unde assumenda commodi deserunt vitae earum at cumque nam est laboriosam. Dolorem itaque expedita similique a porro libero ipsam.",
  },
  {
    id: 103,
    title: "Timeless Travel Tips",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt nihil, quo, unde assumenda commodi deserunt vitae earum at cumque nam est laboriosam. Dolorem itaque expedita similique a porro libero ipsam.",
  },
];
function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);
   const fetchPosts = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();
    setPosts(data); 
  };

  return (
    <div className="container mb-4">
      <h2 className="text-success my-4">Post List</h2>
      <button className="btn btn-success" onClick={fetchPosts}>
        Fetch Posts
      </button>
      <ul className="list-group">
        {postsStatic.map((post) => (
          <li key={post.id} className="list-group-item">
            <h4 className="text-primary mb-2">{post.title}</h4>
            <p className="text-secondary">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default PostList;
