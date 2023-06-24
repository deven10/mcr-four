import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { forumData } from "./data";

import "./App.css";

export const Homepage = () => {
  const [postData, setPostData] = useState(forumData.posts);
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    if (sortBy === "trending") {
      const sorted = [...postData];
      sorted.sort(
        (a, b) => b.upvotes - b.downvotes - (a.upvotes - a.downvotes)
      );
      setPostData(sorted);
    } else {
      const sorted = [...postData];
      sorted.sort(
        (a, b) => a.upvotes - a.downvotes - (b.upvotes - b.downvotes)
      );
      setPostData(sorted);
    }
  }, [sortBy]);

  const handleUpvote = (postId) => {
    setPostData(
      postData.map((post) =>
        post.postId === postId ? { ...post, upvotes: post.upvotes + 1 } : post
      )
    );
  };

  const handleDownvote = (postId) => {
    setPostData(
      postData.map((post) =>
        post.postId === postId ? { ...post, upvotes: post.upvotes - 1 } : post
      )
    );
  };

  return (
    <div className="homepage-wrapper">
      <div className="posts">
        <p className="heading">Latest Posts</p>
        <div className="posts-wrapper">
          {postData.map((post) => {
            const {
              postId,
              upvotes,
              downvotes,
              username,
              timeAgo,
              postTitle,
              tags,
              postDescription,
              isBookmarked,
            } = post;
            return (
              <div key={postId} className="single-post">
                <div className="votes-wrapper">
                  <button
                    onClick={() => handleUpvote(postId)}
                    className="vote-button"
                  >
                    <i className="fa-solid fa-caret-up upvote-caret"></i>
                  </button>
                  <p>{upvotes - downvotes}</p>
                  <button
                    onClick={() => handleDownvote(postId)}
                    className="vote-button"
                  >
                    <i className="fa-solid fa-caret-down downvote-caret"></i>
                  </button>
                </div>
                <div className="post-details">
                  <div className="user-details">
                    <div className="img"></div>
                    <p>
                      Posted by{" "}
                      <span>
                        @{username} • {timeAgo}m
                      </span>
                    </p>
                  </div>
                  <p className="post-title">{postTitle}</p>
                  <div className="post-tags">
                    {tags.map((tag, index) => (
                      <p key={index} className="tag">
                        {tag}
                      </p>
                    ))}
                  </div>
                  <p className="post-content">{postDescription}</p>
                  <div className="post-action-buttons">
                    <Link to={`/${postId}`} className="comment">
                      <i className="fa-regular fa-comment"></i>
                    </Link>
                    <div className="comment">
                      <i className="fa-solid fa-share-nodes"></i>
                    </div>
                    <div className="comment">
                      {isBookmarked ? (
                        <i
                          onClick={() =>
                            setPostData((prev) => ({
                              ...prev,
                              isBookmarked: false,
                            }))
                          }
                          className="fa-solid fa-bookmark"
                        ></i>
                      ) : (
                        <i
                          onClick={() =>
                            setPostData((prev) => ({
                              ...prev,
                              isBookmarked: true,
                            }))
                          }
                          className="fa-regular fa-bookmark"
                        ></i>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="sortby">
        <p className="heading">Sort By</p>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          id=""
        >
          <option value="latest">Latest Posts</option>
          <option value="trending">Trending Posts</option>
        </select>
      </div>
    </div>
  );
};
