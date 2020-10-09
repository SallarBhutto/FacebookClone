import React from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryReel from "./StoryReel";

const picture =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTaCcvzDeiaAOP-cFSz0OJ0XvlR83YzYRXl_g&usqp=CAU";

export default function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      {/* MessageSender */}
      <MessageSender />

      <Post
        profilePic={picture}
        message={"wow this works"}
        timestamp={new Date()}
        username={"sallar bhutto"}
        image={"https://i.ytimg.com/vi/a0Xm1OahWQA/maxresdefault.jpg"}
      />

      <Post
        profilePic={picture}
        message={"wow this works"}
        timestamp={new Date()}
        username={"sallar bhutto"}
      />
    </div>
  );
}
