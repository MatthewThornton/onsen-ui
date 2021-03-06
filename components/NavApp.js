import React from 'react';

import {
    Toolbar,
    BackButton,
    ToolbarButton,
    Icon
} from "react-onsenui";

const NavApp = ({ title, navigator, backButton }) => (
  <Toolbar>
    <div className="left">
      <ToolbarButton>
        <Icon icon="ion-navicon, material:md-menu" />
      </ToolbarButton>
    </div>
    <div className="center">{title}</div>
  </Toolbar>
);

export default NavApp;