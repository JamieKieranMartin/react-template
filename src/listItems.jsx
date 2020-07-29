import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import { Dashboard, Settings, Input } from '@material-ui/icons';

export const mainListItems = (
  <div>
    <ListItemLink href="/">
      <ListItemIcon>
        <Dashboard />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemLink>

    <ListItemLink href="/form">
      <ListItemIcon>
        <Input />
      </ListItemIcon>
      <ListItemText primary="Form" />
    </ListItemLink>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Settings</ListSubheader>

    <ListItemLink href="/settings">
      <ListItemIcon>
        <Settings />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItemLink>
  </div>
);

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}
