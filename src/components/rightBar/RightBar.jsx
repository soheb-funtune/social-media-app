import React from "react";
import "./rightBar.scss";
const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Shortcutes</span>
          <div className="user">
            <div className="userInfo">
              <img
                src={
                  "https://images.pexels.com/photos/50675/banquet-wedding-society-deco-50675.jpeg?auto=compress&cs=tinysrgb&w=300"
                }
                alt="user"
              />
              <span>Event</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activity</span>
          <div className="user">
            <div className="userInfo">
              <img
                src={
                  "https://images.pexels.com/photos/50675/banquet-wedding-society-deco-50675.jpeg?auto=compress&cs=tinysrgb&w=300"
                }
                alt="user"
              />
              <p>
                <span>Soheb</span>
                Lorem ipsum dolor sit amet.
              </p>
            </div>

            <spna>1 min ago</spna>
          </div>
        </div>
        <div className="item">
          <span>Latest Activity</span>
          <div className="user">
            <div className="userInfo">
              <img
                src={
                  "https://images.pexels.com/photos/50675/banquet-wedding-society-deco-50675.jpeg?auto=compress&cs=tinysrgb&w=300"
                }
                alt="user"
              />
              <p>
                <span>Soheb</span>
                Lorem ipsum dolor sit amet.
              </p>
            </div>

            <spna>1 min ago</spna>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
