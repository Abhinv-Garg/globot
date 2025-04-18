import { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Switch,
} from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";

const GoLivePage = () => {
  const [connected, setConnected] = useState(false);

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" fontWeight={600} mb={3}>
        Go live
      </Typography>

      <Card sx={{ width: 300, borderRadius: 2 }}>
        <CardContent sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
          <PublicIcon sx={{ fontSize: 30, mt: 0.5 }} />
          <Box sx={{ flex: 1 }}>
            <Typography fontWeight={600}>Connect to Website</Typography>
            <Typography variant="body2" color="text.secondary">
              Customize your chatbot appearance, get integration code and go
              live.
            </Typography>
          </Box>
          <Switch
            checked={connected}
            onChange={(e) => setConnected(e.target.checked)}
            sx={{ ml: "auto", mt: 0.5 }}
          />
        </CardContent>
        <CardActions sx={{ justifyContent: "flex-end", px: 2, pb: 2 }}>
          <Button variant="outlined" size="small">
            Setup
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default GoLivePage;
