import React from 'react';

import {
    Toolbar,
    BackButton,
    ToolbarButton
} from "react-onsenui";

const NavApp = ({ title, navigator, backButton }) => (
  <Toolbar>
    <div className="left">
      <ToolbarButton>
        <i className="ion-navicon" />
      </ToolbarButton>
    </div>
    <div className="center">{title}</div>
  </Toolbar>
);

export default NavApp;