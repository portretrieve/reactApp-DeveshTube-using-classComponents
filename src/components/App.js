import React from "react";
import "./App.css";
import youtube from "../apis/youTube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
class App extends React.Component {
  state = { videosList: [], selectedVideo: null };

  onSearch = async (textInput) => {
    const response = await youtube.get("/search", {
      params: {
        q: textInput
      }
    });
    this.setState({
      videosList: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoClick = (video) => {
    this.setState({ selectedVideo: video });
  };

  componentDidMount() {
    this.onSearch("intermittent fasting");
  }

  render() {
    return (
      <div className="ui container">
        <h1>Welcome to DeveshTube Website</h1>
        <SearchBar onSearch={this.onSearch} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videosList}
                onVideoSelect={this.onVideoClick}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
