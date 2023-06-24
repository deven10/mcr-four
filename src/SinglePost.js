import React from "react";
import { Link, useParams } from "react-router-dom";
import { forumData } from "./data";

export const SinglePost = () => {
  const { postId } = useParams();
  const post = forumData.posts.find((post) => post.postId === postId);
  console.log(post);
  const {
    upvotes,
    downvotes,
    username,
    timeAgo,
    postTitle,
    tags,
    postDescription,
    isBookmarked,
    comments,
  } = post;
  return (
    <div>
      <Link className="back-link" to="/">
        <i className="fa-solid fa-left-long"></i> Post
      </Link>
      <div className="single-post">
        <div className="post-wrapper">
          <div className="post-information">
            <div className="votes-wrapper">
              <button className="vote-button">
                <i className="fa-solid fa-caret-up upvote-caret"></i>
              </button>
              <p>{upvotes - downvotes}</p>
              <button className="vote-button">
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
                <i className="fa-regular fa-comment"></i>
                <div className="comment">
                  <i className="fa-solid fa-share-nodes"></i>
                </div>
                <div className="comment">
                  {isBookmarked ? (
                    <i className="fa-solid fa-bookmark"></i>
                  ) : (
                    <i className="fa-regular fa-bookmark"></i>
                  )}
                </div>
              </div>
            </div>
          </div>
          {comments.map((comment) => {
            const { commentId, firstname, lastname, username, timeAgo } =
              comment;
            return (
              <div key={commentId} className="post-comments">
                <div className="img"></div>
                <div className="comment-details">
                  <p className="comment-username">
                    {firstname} {lastname}{" "}
                    <span>
                      @{username} • {timeAgo}m
                    </span>
                  </p>
                  <p className="repy-to-username">
                    Replying to <span>@{post.username}</span>
                  </p>
                  <p className="comment-content">{comment.comment}</p>
                  <div className="comment-action-button">
                    <i className="fa-regular fa-heart"></i>
                    <i className="fa-regular fa-comment"></i>
                    <i className="fa-solid fa-share-nodes"></i>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
