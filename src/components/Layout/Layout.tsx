// src/components/Layout/Layout.tsx
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { Box } from "@mui/material";
import Sidebar from "../SIdebar/Sidebar";

const Layout = () => {
  return (
    <Box display="flex" height="100vh">
      <Sidebar />
      <Box flexGrow={1} display="flex" flexDirection="column">
        <Header />
        <Box flexGrow={1} overflow="auto" p={2}>
          <Outlet /> {/* This is where the child route content goes */}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
