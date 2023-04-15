import { AppBar, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';

const ROUTES = [
  {
    component: 'Search',
    path: '',
  },
  {
    component: 'Non-Followers',
    path: 'non-followers',
  },
  {
    component: 'About me',
    path: 'about',
  },
];

export default function NavBar() {
  return (
    <AppBar component="nav">
      <Toolbar className="nav">
        {ROUTES.map((item) => (
          <Link to={item.path} key={item.component}>
            {item.component}
          </Link>
        ))}
      </Toolbar>
    </AppBar>
  );
}
