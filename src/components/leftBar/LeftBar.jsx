import React from "react";
import "./leftBar.scss";
const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              src={
                "https://images.pexels.com/photos/14906973/pexels-photo-14906973.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              }
              alt="user"
            />
            <span>Salim</span>
          </div>
          <div className="item">
            <img
              src={
                "https://images.pexels.com/photos/5157169/pexels-photo-5157169.jpeg?auto=compress&cs=tinysrgb&w=300"
              }
              alt="user"
            />
            <span>Friends</span>
          </div>
          <div className="item">
            <img
              src={
                "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=300"
              }
              alt="user"
            />
            <span>Group</span>
          </div>
          <div className="item">
            <img
              src={
                "https://images.pexels.com/photos/2386152/pexels-photo-2386152.jpeg?auto=compress&cs=tinysrgb&w=300"
              }
              alt="user"
            />
            <span>MarketPlace</span>
          </div>
          <div className="item">
            <img
              src={
                "https://images.pexels.com/photos/7241291/pexels-photo-7241291.jpeg?auto=compress&cs=tinysrgb&w=300"
              }
              alt="user"
            />
            <span>Watch</span>
          </div>
          <div className="item">
            <img
              src={
                "https://images.pexels.com/photos/3419719/pexels-photo-3419719.jpeg?auto=compress&cs=tinysrgb&w=300"
              }
              alt="user"
            />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Shortcutes</span>
          <div className="item">
            <img
              src={
                "https://images.pexels.com/photos/50675/banquet-wedding-society-deco-50675.jpeg?auto=compress&cs=tinysrgb&w=300"
              }
              alt="user"
            />
            <span>Event</span>
          </div>
          <div className="item">
            <img
              src={
                "https://images.pexels.com/photos/596750/pexels-photo-596750.jpeg?auto=compress&cs=tinysrgb&w=300"
              }
              alt="user"
            />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img
              src={
                "https://images.pexels.com/photos/2372978/pexels-photo-2372978.jpeg?auto=compress&cs=tinysrgb&w=300"
              }
              alt="user"
            />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img
              src={
                "https://images.pexels.com/photos/3831849/pexels-photo-3831849.jpeg?auto=compress&cs=tinysrgb&w=300"
              }
              alt="user"
            />
            <span>Messages</span>
          </div>
        </div>{" "}
        <hr />
        <div className="menu">
          <span>others</span>
          <div className="item">
            <img
              src={
                "https://images.pexels.com/photos/6646907/pexels-photo-6646907.jpeg?auto=compress&cs=tinysrgb&w=300"
              }
              alt="user"
            />
            <span>Fundraisers</span>
          </div>
          <div className="item">
            <img
              src={
                "https://images.pexels.com/photos/4160063/pexels-photo-4160063.jpeg?auto=compress&cs=tinysrgb&w=300"
              }
              alt="user"
            />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img
              src={
                "https://images.pexels.com/photos/4443162/pexels-photo-4443162.jpeg?auto=compress&cs=tinysrgb&w=300"
              }
              alt="user"
            />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
