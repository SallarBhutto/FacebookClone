import { Avatar } from "@material-ui/core";
import { InsertEmoticon, PhotoLibrary, Videocam } from "@material-ui/icons";
import React, { useState } from "react";
import "./MessageSender.css";

function MessageSender() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    //db stuff

    setInput("");
    setImageUrl("");
  };
  return (
    <div className="messageSender">
      <div className="messageSender_top">
        <Avatar />
        <form>
          <input
            type="text"
            placeholder="What's on your mind?"
            className="messageSender_input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <input
            placeholder="image URL(Optional)"
            className="messageSender_imageUrlInput"
            onChange={(e) => setImageUrl(e.target.value)}
            value={imageUrl}
          />
          <button onClick={handleSubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>
      <div className="messageSender_bottom">
        <div className="messageSender_option">
          <Videocam style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>

        <div className="messageSender_option">
          <PhotoLibrary style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>

        <div className="messageSender_option">
          <InsertEmoticon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
