import React from "react";
import Story from "./Story";
import "./StoryReel.css";

const coverImage = "https://i.ytimg.com/vi/a0Xm1OahWQA/maxresdefault.jpg";
const profileUrl =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTaCcvzDeiaAOP-cFSz0OJ0XvlR83YzYRXl_g&usqp=CAU";

export default function StoryReel() {
  return (
    <div className="storyReel">
      <Story image={coverImage} profileSrc={profileUrl} title="Sallar Bhutto" />
      <Story image={coverImage} profileSrc={profileUrl} title="Sallar Bhutto" />
      <Story image={coverImage} profileSrc={profileUrl} title="Sallar Bhutto" />
      <Story image={coverImage} profileSrc={profileUrl} title="Sallar Bhutto" />
      <Story image={coverImage} profileSrc={profileUrl} title="Sallar Bhutto" />
    </div>
  );
}
