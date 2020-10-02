import { IconButton } from "@material-ui/core";
import { Brightness4Outlined, EmojiFlags } from "@material-ui/icons";
import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <div className="header__logo">
          <h1>
            BUILD<span> ME </span> PC
          </h1>
        </div>
      </div>
      <div className="header__right">
        <IconButton>
          <EmojiFlags />
        </IconButton>
        <IconButton>
          <Brightness4Outlined />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
