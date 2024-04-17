import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { useState } from "react";
const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <div className="sidebar">
      <div className="top">
        <img
          src={assets.menu_icon}
          alt=""
          className="menu"
          onClick={() => setSidebarOpen((prev) => !prev)}
        />
        <div className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {sidebarOpen ? <p>New Chat</p> : null}
        </div>
        {sidebarOpen ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
              <img src={assets.message_icon} alt="" />
              <p>What is React.....</p>
            </div>
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {sidebarOpen ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {sidebarOpen ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {sidebarOpen ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
