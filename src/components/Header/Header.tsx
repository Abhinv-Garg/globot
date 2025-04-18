import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

const Header = () => (
  <AppBar position="static" elevation={0} color="transparent">
    <Toolbar sx={{ justifyContent: "flex-end" }}>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Chats
      </Typography>
      <IconButton>
        <NotificationsNoneIcon />
      </IconButton>
    </Toolbar>
  </AppBar>
);

export default Header;
