import React, { CSSProperties } from "react";
import SocialLinks from "./SocialLinks";
import ContactInfo from "./ContactInfo";
import ThemeToggleBtn from "../components/ThemeToggleBtn";

interface TopBarProps {
  style?: CSSProperties;
}

const TopBar: React.FC<TopBarProps> = ({ style }) => {
  return (
    <header className="top-bar" style={style}>
      <div className="top-bar-left">
        <h1 className="user-name">Mohammed Riyazuddin</h1>
      </div>
      <div className="top-bar-content">
        <ContactInfo />
        <SocialLinks />
        <ThemeToggleBtn />
      </div>
    </header>
  );
};

export default TopBar;
