import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import { Home, Settings, Task } from "@mui/icons-material";

const getIcon = (icon) => {
  switch (icon) {
    case "HOME":
      return <Home />;
    case "TASKS":
      return <Task />;
    case "SETTINGS":
      return <Settings />;
    default:
      return <Home />;
  }
};

const MenuListItems = ({ list }) => {
  const navigate = useNavigate();

  const goTo = (path) => {
    navigate(path);
  };

  return (
    <List>
      {list.map(({ text, path, icon }, index) => (
        <ListItem key={index} button onClick={() => goTo(path)}>
          <ListItemIcon>{getIcon(icon)}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  );
};

export default MenuListItems;