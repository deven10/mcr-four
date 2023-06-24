import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Homepage } from "./Homepage";
import { SinglePost } from "./SinglePost";

function App() {
  return (
    <div className="App">
      <div className="header">
        <p>MyForum</p>
      </div>

      {/* Main Wrapper */}
      <div className="main-wrapper">
        {/* Left side */}
        <div className="quick-links">
          <div className="links-group">
            <div className="link bold">
              <i className="fa-solid fa-house icon"></i>
              Home
            </div>
            <div className="link">
              <i className="fa-solid fa-compass icon"></i>
              Explore
            </div>
            <div className="link">
              <i className="fa-solid fa-bookmark icon"></i>
              Bookmarks
            </div>
            <div className="link">
              <i className="fa-solid fa-user icon"></i>
              Profile
            </div>
          </div>
          <div className="profile">
            <div className="img"></div>
            <div className="profile-details">
              <p className="name">Tanay Pratap</p>
              <p className="username">@tanaypratap</p>
            </div>
          </div>
        </div>

        {/* Center part */}
        <div className="homepage">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/:postId" element={<SinglePost />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
