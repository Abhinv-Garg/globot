// src/pages/KnowledgeBase.tsx
import {
  Box,
  Typography,
  Button,
  IconButton,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Paper,
  Stack,
  Tooltip,
} from "@mui/material";
import {
  Search,
  FilterList,
  Refresh,
  Add,
  Edit,
  MoreVert,
} from "@mui/icons-material";

const articles = [
  {
    title: "GeeksforGeeks | Your All-in-One Learning Portal",
    createdOn: "17 Apr, 2025",
    modifiedOn: "17 Apr, 2025",
    status: "Success",
  },
  {
    title: "SOmething",
    createdOn: "17 Apr, 2025",
    modifiedOn: "17 Apr, 2025",
    status: "Success",
  },
  {
    title: "Superstar - Wikipedia",
    createdOn: "17 Apr, 2025",
    modifiedOn: "17 Apr, 2025",
    status: "Success",
  },
  {
    title: "Whatever",
    createdOn: "16 Apr, 2025",
    modifiedOn: "16 Apr, 2025",
    status: "Success",
  },
];

const KnowledgeBase = () => {
  return (
    <>
      <Box p={3}>
        <Typography variant="h6" fontWeight="600" mb={2}>
          Knowledge base
        </Typography>

        {/* Top Bar */}
        <Box display="flex" justifyContent="space-between" mb={2}>
          <Typography variant="subtitle2" color="text.secondary">
            Articles
          </Typography>

          <Stack direction="row" spacing={1}>
            <Tooltip title="Search">
              <IconButton>
                <Search fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Filter">
              <IconButton>
                <FilterList fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Refresh">
              <IconButton>
                <Refresh fontSize="small" />
              </IconButton>
            </Tooltip>
            <Button
              variant="contained"
              size="small"
              startIcon={<Add />}
              sx={{
                textTransform: "none",
                borderRadius: "8px",
                fontWeight: 500,
              }}
            >
              New
            </Button>
          </Stack>
        </Box>

        {/* Table */}
        <TableContainer component={Paper} elevation={0}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#f9fafb" }}>
                <TableCell padding="checkbox">
                  <Checkbox size="small" />
                </TableCell>
                <TableCell sx={{ fontWeight: 500 }}>
                  Title & Description
                </TableCell>
                <TableCell sx={{ fontWeight: 500 }}>Created on</TableCell>
                <TableCell sx={{ fontWeight: 500 }}>Modified on</TableCell>
                <TableCell sx={{ fontWeight: 500 }}>Status</TableCell>
                <TableCell sx={{ fontWeight: 500 }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {articles.map((article, index) => (
                <TableRow key={index} hover>
                  <TableCell padding="checkbox">
                    <Checkbox size="small" />
                  </TableCell>
                  <TableCell>{article.title}</TableCell>
                  <TableCell>{article.createdOn}</TableCell>
                  <TableCell>{article.modifiedOn}</TableCell>
                  <TableCell>
                    <Chip
                      label="Success"
                      color="success"
                      size="small"
                      variant="outlined"
                      sx={{ borderRadius: "8px", fontWeight: 500 }}
                    />
                  </TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={1}>
                      <Tooltip title="Edit">
                        <IconButton size="small">
                          <Edit fontSize="small" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="More">
                        <IconButton size="small">
                          <MoreVert fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default KnowledgeBase;
