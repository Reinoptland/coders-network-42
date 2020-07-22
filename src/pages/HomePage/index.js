import React, { useEffect, useState } from "react";
import { selectPosts, isLoading } from "../../store/posts/selectors";
import { fetched5Posts, loadingPosts } from "../../store/posts/actions";
import { useSelector, useDispatch } from "react-redux";
import "./HomePage.css";
import axios from "axios";

export default function HomePage() {
  const posts = useSelector(selectPosts);
  const loading = useSelector(isLoading);
  console.log("LOADING?", loading);
  const dispatch = useDispatch();
  //   console.log("What are posts in component?", posts);

  useEffect(() => {
    async function getPosts() {
      const loadingAction = loadingPosts();
      console.log(loadingAction);
      dispatch(loadingAction);
      const response = await axios.get(
        "https://codaisseur-coders-network.herokuapp.com/posts?offset=0&limit=5"
      );
      //   console.log("RES:", response.data.rows);
      const action = fetched5Posts(response.data.rows);
      //   console.log("ACTION?", action);
      dispatch(action);
    }

    getPosts();
  }, [dispatch]);

  if (loading) {
    return <h1>Loading</h1>;
  }

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
