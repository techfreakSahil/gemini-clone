import "./Main.css";
import { assets } from "../../assets/assets";
const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello, Sahil</span>
          </p>
          <p>How can I help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest best company to work with after graduation</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Suggest best place to visit with after graduation</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Suggest best company to work with after graduation</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>Suggest best company to work with after graduation</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>
      </div>
      <div className="main-bottom">
        <div className="searchbox">
          <input type="text" placeholder="Enter a prompt here" />
          <div>
            <img src={assets.gallery_icon} alt="" />
            <img src={assets.mic_icon} alt="" />
            <img src={assets.send_icon} alt="" />
          </div>
        </div>
        <p className="bottom-info">
          Gemini may display inaccurate info, including about people, so
          double-check it before forwarding it.
        </p>
      </div>
    </div>
  );
};

export default Main;
