// src/pages/Chats/UnassignedChats.tsx
import { Box, Typography, Button } from "@mui/material";

const UnassignedChats = () => {
  return (
    <>
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        height="100%"
        bgcolor="#fff"
        borderRadius={2}
      >
        {/* Left Sidebar */}
        <Box
          width={{ xs: "100%", md: "300px" }}
          borderRight={{ md: "1px solid #eee" }}
          borderBottom={{ xs: "1px solid #eee", md: "none" }}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          px={4}
          py={6}
        >
          <img
            src="https://via.placeholder.com/60" // Replace with your local asset later
            alt="Unassigned"
            style={{ width: 60, marginBottom: 16 }}
          />
          <Typography
            variant="body2"
            fontStyle="italic"
            textAlign="center"
            color="text.secondary"
          >
            When your users initiate new conversations, they will appear here.
          </Typography>
          <Button variant="contained" size="small" sx={{ mt: 2 }}>
            Invite Users
          </Button>
        </Box>

        {/* Right Panel */}
        <Box
          flexGrow={1}
          display="flex"
          alignItems="center"
          justifyContent="center"
          px={4}
        >
          <Typography color="text.disabled" textAlign="center">
            Select a chat to view the conversation or wait for new chats to
            appear.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default UnassignedChats;
