import { useEffect, useState } from "react";
interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const PostList3 = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

 const fetchPosts = async () => {
    try { 
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) {
        throw new Error("Error occured while calling the API");
      } 
      const data: Post[] = await response.json();
      setPosts(data); 
      setLoading(false); 
    } catch (error: any) {
      setError(error.message); 
    } finally {
      setLoading(false); 
    }
  };


  useEffect(() => {
    fetchPosts();
  }, []);

  
  if (loading == true) {
    return (
      <div className="container text-center">
        <h1 className="text-danger">Loading... </h1>
      </div>
    );
  }

   if (error) {
    return (
      <div className="container text-center">
        <h1 className="text-danger fw-bold">{error}</h1>
      </div>
    );
  }
 
  return (
    <div>
      <h1 className="text-danger fw-bold mb-4">Posts</h1>

      <div className="row">
        {posts.map((post) => (
          <div className="col-md-3 mb-3" key={post.id}>
          
            <div className="card h-100 d-flex flex-column">
            
              <img src={`https://picsum.photos/id/${post.id}/300`} alt="" />
              <div className="card-body d-flex flex-column">
               
                <h4 className="card-title text-danger">{post.title}</h4>
               
                <p className="card-text text-secondary">{post.body}</p>
               
                <div className="flex-grow-1">&nbsp;</div>
               
                <a href="" className="btn btn-primary">
                  View Entire Post
                </a>
              </div>
              <div className="card-footer text-muted">
                Author - {post.userId}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList3;