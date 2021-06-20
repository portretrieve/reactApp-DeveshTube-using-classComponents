import React from "react";
import "./App.css";
import youtube from "../apis/youTube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
class App extends React.Component {
  state = { videosList: [] };

  onSearch = async (textInput) => {
    const response = await youtube.get("/search", {
      params: {
        q: textInput
      }
    });
    this.setState({ videosList: response.data.items });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearch={this.onSearch} />
        <VideoList videos={this.state.videosList} />
      </div>
    );
  }
}

export default App;
