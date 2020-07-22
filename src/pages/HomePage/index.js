import React, { useEffect, useState } from "react";
import "./HomePage.css";
import axios from "axios";

export default function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const response = await axios.get(
        "https://codaisseur-coders-network.herokuapp.com/posts"
      );
      console.log(response.data.rows);
      setPosts(response.data.rows);
    }

    getPosts();
  }, []);

  console.log(posts);

  return (
    <div>
      <h1>Hello I am homepage</h1>
      {posts.map((post) => {
        console.log(post);
        return (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
          </div>
        );
      })}
    </div>
  );
}
