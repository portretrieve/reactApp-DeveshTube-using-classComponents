import React from "react";
import "./VideoItem.css";

function Item(props) {
  return (
    <div
      className="video-item item"
      onClick={() => {
        props.onVideoSelect(props.video);
      }}
    >
      <img
        className="ui image"
        src={props.video.snippet.thumbnails.medium.url}
        alt={props.video.snippet.title}
      />
      <div class="content">
        <div class="header">{props.video.snippet.title}</div>
      </div>
    </div>
  );
}

export default Item;
