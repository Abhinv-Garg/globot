import { useState } from "react";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  FormControlLabel,
  Checkbox,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";

const BotSettingsPage = () => {
  const [tab, setTab] = useState(0);
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log(event);
    return setTab(newValue);
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h5" fontWeight={600} mb={2}>
        Bot settings
      </Typography>

      <Tabs value={tab} onChange={handleTabChange} sx={{ mb: 3 }}>
        <Tab label="Answer formatting" sx={{ textTransform: "none" }} />
        <Tab label="Bot Defaults" sx={{ textTransform: "none" }} />
        <Tab label="Custom instructions" sx={{ textTransform: "none" }} />
      </Tabs>

      {tab === 0 && (
        <Box>
          <Typography variant="subtitle1" fontWeight={600} mb={1}>
            Length of responses
          </Typography>
          <ToggleButtonGroup
            exclusive
            size="small"
            value="Medium"
            sx={{ mb: 2 }}
          >
            <ToggleButton value="Descriptive">Descriptive</ToggleButton>
            <ToggleButton value="Medium">Medium</ToggleButton>
            <ToggleButton value="Short">Short</ToggleButton>
          </ToggleButtonGroup>

          <Typography variant="subtitle1" fontWeight={600} mb={1}>
            Chatbot tone
          </Typography>
          <ToggleButtonGroup
            exclusive={false}
            size="small"
            value={["Neutral"]}
            sx={{ mb: 2 }}
          >
            <ToggleButton value="Matter of fact">Matter of fact</ToggleButton>
            <ToggleButton value="Friendly">Friendly</ToggleButton>
            <ToggleButton value="Humorous">Humorous</ToggleButton>
            <ToggleButton value="Neutral">Neutral</ToggleButton>
            <ToggleButton value="Professional">Professional</ToggleButton>
          </ToggleButtonGroup>

          <Typography variant="subtitle1" fontWeight={600} mb={1}>
            Chatbot gender
          </Typography>
          <ToggleButtonGroup
            exclusive
            size="small"
            value="Neutral"
            sx={{ mb: 2 }}
          >
            <ToggleButton value="Female">Female</ToggleButton>
            <ToggleButton value="Male">Male</ToggleButton>
            <ToggleButton value="Neutral">Neutral</ToggleButton>
          </ToggleButtonGroup>

          <Box>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Use emojis"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Use bullet points"
            />
          </Box>
        </Box>
      )}

      {tab === 1 && (
        <Box>
          <Typography variant="body1">
            Bot Defaults content goes here.
          </Typography>
        </Box>
      )}

      {tab === 2 && (
        <Box>
          <Typography variant="body1">
            Custom Instructions content goes here.
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default BotSettingsPage;
