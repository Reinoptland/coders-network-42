import React, { useEffect, useState } from "react";
import { selectPosts } from "../../store/posts/selectors";
import { fetched5Posts } from "../../store/posts/actions";
import { useSelector } from "react-redux";
import "./HomePage.css";
import axios from "axios";

export default function HomePage() {
  const posts = useSelector(selectPosts);
  //   console.log("What are posts in component?", posts);

  useEffect(() => {
    async function getPosts() {
      const response = await axios.get(
        "https://codaisseur-coders-network.herokuapp.com/posts?offset=0&limit=5"
      );
      //   console.log("RES:", response.data.rows);
      const action = fetched5Posts(response.data.rows);
      console.log("ACTION?", action);
    }

    getPosts();
  }, []);
  return (
    <div>
      <h1>Hello I am homepage</h1>
      {posts.map((post) => {
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
