import React from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryReel from "./StoryReel";
export default function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      {/* MessageSender */}
      <MessageSender />

      <Post />
    </div>
  );
}
