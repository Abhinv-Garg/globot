import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Typography,
} from "@mui/material";
import {
  ExpandLess,
  ExpandMore,
  Chat,
  HelpOutline,
  Logout,
  Settings,
  LiveTv,
  Web,
  Article,
  SupportAgent,
  Person,
  Forum,
} from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ import this

const Sidebar = () => {
  const [openChats, setOpenChats] = useState(true);
  const navigate = useNavigate(); // ✅ use navigate hook

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: 240,
          boxSizing: "border-box",
          backgroundColor: "#f5f6fc",
          borderRight: "1px solid #e0e0e0",
        },
      }}
    >
      <Box p={2}>
        <Typography variant="h6" fontWeight={700}>
          Bee Imt
        </Typography>
      </Box>
      <List>
        <ListItemButton onClick={() => navigate("/")}>
          <ListItemIcon>
            <Article />
          </ListItemIcon>
          <ListItemText primary="Knowledge base" />
        </ListItemButton>

        <ListItemButton onClick={() => setOpenChats(!openChats)}>
          <ListItemIcon>
            <Chat />
          </ListItemIcon>
          <ListItemText primary="Chats" />
          {openChats ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={openChats} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => navigate("/chats/unassigned")}
            >
              <ListItemIcon>
                <HelpOutline />
              </ListItemIcon>
              <ListItemText primary="Unassigned" />
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => navigate("/chats/my")}
            >
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary="My Chats" />
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => navigate("/chats/bot")}
            >
              <ListItemIcon>
                <Forum />
              </ListItemIcon>
              <ListItemText primary="Bot Chats" />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton onClick={() => navigate("/unanswered")}>
          <ListItemIcon>
            <HelpOutline />
          </ListItemIcon>
          <ListItemText primary="Unanswered questions" />
        </ListItemButton>

        <ListItemButton onClick={() => navigate("/settings")}>
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>

        <ListItemButton onClick={() => navigate("/live")}>
          <ListItemIcon>
            <LiveTv />
          </ListItemIcon>
          <ListItemText primary="Go live" />
        </ListItemButton>

        <ListItemButton onClick={() => navigate("/chatbot")}>
          <ListItemIcon>
            <Web />
          </ListItemIcon>
          <ListItemText primary="Website Chatbot" />
        </ListItemButton>
      </List>

      <Box sx={{ flexGrow: 1 }} />

      <List>
        <ListItemButton onClick={() => navigate("/test-chatbot")}>
          <ListItemIcon>
            <SupportAgent />
          </ListItemIcon>
          <ListItemText primary="Test Chatbot" />
        </ListItemButton>
        <ListItemButton onClick={() => navigate("/support")}>
          <ListItemIcon>
            <HelpOutline />
          </ListItemIcon>
          <ListItemText primary="Help and support" />
        </ListItemButton>
        <ListItemButton onClick={() => navigate("/logout")}>
          <ListItemIcon>
            <Logout />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default Sidebar;
