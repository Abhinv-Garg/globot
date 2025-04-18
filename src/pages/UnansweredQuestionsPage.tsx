import React from "react";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Button,
  InputBase,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Paper,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import RefreshIcon from "@mui/icons-material/Refresh";

const UnansweredQuestionsPage = () => {
  const [tab, setTab] = React.useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log(event);
    setTab(newValue);
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h5" fontWeight={600} mb={2}>
        Unanswered questions
      </Typography>

      <Tabs value={tab} onChange={handleTabChange} sx={{ mb: 2 }}>
        <Tab label="Relevant" sx={{ textTransform: "none", fontWeight: 500 }} />
        <Tab
          label="Irrelevant"
          sx={{ textTransform: "none", fontWeight: 500 }}
        />
      </Tabs>

      <Box display="flex" alignItems="center" gap={2} mb={2}>
        <Button
          variant="outlined"
          size="small"
          sx={{
            borderRadius: "16px",
            textTransform: "none",
            backgroundColor: "#f0f0f0",
            fontWeight: 500,
          }}
        >
          Status : Unanswered
        </Button>
        <Button
          variant="text"
          size="small"
          sx={{ textTransform: "none", fontWeight: 500 }}
        >
          + Add filter
        </Button>

        <Box sx={{ flexGrow: 1 }} />

        <Box display="flex" alignItems="center" gap={1}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#f5f5f5",
              borderRadius: 1,
              px: 1,
            }}
          >
            <SearchIcon fontSize="small" />
            <InputBase placeholder="Search" sx={{ ml: 1, fontSize: 14 }} />
          </Box>
          <IconButton>
            <FilterListIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <RefreshIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>

      <Paper variant="outlined">
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox size="small" />
                </TableCell>
                <TableCell>Title & Description</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Conversations</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell colSpan={5} align="center" sx={{ py: 10 }}>
                  <Typography fontWeight={600}>
                    There are no unanswered questions right now.
                  </Typography>
                  <Typography fontSize={14} mt={1} color="text.secondary">
                    When your users ask questions that the bot does not have
                    answers to, they will appear here.
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default UnansweredQuestionsPage;
