import {
  Box,
  Typography,
  Avatar,
  TextField,
  InputAdornment,
  IconButton,
  Paper,
  List,
  ListItem,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const BotChatPage = () => {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <Box sx={{ width: 300, borderRight: "1px solid #ddd", p: 2 }}>
        <Typography fontWeight="bold" mb={2}>
          Bot chats
        </Typography>
        <List>
          <ListItem component="div">
            <Avatar sx={{ width: 32, height: 32, mr: 1 }} />
            <Box>
              <Typography fontWeight="bold">modern-olive-tern</Typography>
              <Typography fontSize={12}>
                👋 Hello there! Welcome to Omega...
              </Typography>
            </Box>
          </ListItem>
        </List>
      </Box>

      {/* Chat panel */}
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Header */}
        <Box
          sx={{
            borderBottom: "1px solid #ddd",
            p: 2,
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Avatar sx={{ width: 32, height: 32 }} />
          <Typography fontWeight="bold">modern-olive-tern</Typography>
          <Typography variant="caption" sx={{ ml: 1 }}>
            #1
          </Typography>
        </Box>

        {/* Messages */}
        <Box
          sx={{ flex: 1, p: 3, backgroundColor: "#f9f9fb", overflowY: "auto" }}
        >
          <Typography variant="caption" color="textSecondary" align="center">
            Wednesday, April 16, 2025
          </Typography>

          <Box my={2}>
            <Paper
              sx={{ display: "inline-block", p: 1.2, px: 2, mb: 1 }}
              variant="outlined"
            >
              hey there
            </Paper>
            <Typography fontSize={12} color="text.secondary">
              23:36 PM
            </Typography>
          </Box>

          <Box my={2} alignSelf="flex-end" textAlign="right">
            <Paper
              sx={{
                display: "inline-block",
                p: 1.2,
                px: 2,
                backgroundColor: "#0a0a23",
                color: "white",
                borderRadius: 2,
                maxWidth: "60%",
              }}
            >
              <Typography>
                👋 Hello there! Welcome to Omega.
                <br />
                • How can I assist you today?
                <br />• I'm ready to help with any questions or support you
                might need.
              </Typography>
            </Paper>
            <Typography fontSize={12} color="text.secondary">
              23:37 PM • AI agent
            </Typography>
          </Box>
        </Box>

        {/* Input field */}
        <Box sx={{ p: 2, borderTop: "1px solid #ddd" }}>
          <TextField
            fullWidth
            size="small"
            placeholder="Type here..."
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <SendIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default BotChatPage;
