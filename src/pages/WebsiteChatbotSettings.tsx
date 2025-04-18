import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  ToggleButton,
  ToggleButtonGroup,
  Switch,
  Paper,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import EditIcon from "@mui/icons-material/Edit";

const WebsiteChatbotSettings = () => {
  const [size, setSize] = useState("Medium");
  const [questions, setQuestions] = useState(["whatever"]);
  const [greetingEnabled, setGreetingEnabled] = useState(true);
  const [greeting, setGreeting] = useState("Have questions about Omega?");
  const [color, setColor] = useState("#000000");

  const handleSizeChange = (
    event: React.MouseEvent<HTMLElement>,
    newSize: string
  ) => {
    console.log(event);
    if (newSize !== null) setSize(newSize);
  };

  const handleQuestionChange = (index: number, value: string) => {
    const newQuestions = [...questions];
    newQuestions[index] = value;
    setQuestions(newQuestions);
  };

  const addQuestion = () => {
    if (questions.length < 3) {
      setQuestions([...questions, ""]);
    }
  };

  const removeQuestion = (index: number) => {
    const newQuestions = [...questions];
    newQuestions.splice(index, 1);
    setQuestions(newQuestions);
  };

  useEffect(() => {
    setColor("#000000");
  }, []);

  return (
    <Box sx={{ display: "flex", p: 3, gap: 4 }}>
      <Box sx={{ flex: 1 }}>
        <Typography variant="h6" fontWeight={600} mb={2}>
          Customize your website chatbot
        </Typography>

        <Typography fontWeight={500}>Chatbot logo</Typography>
        <TextField
          placeholder="Enter URL for chatbot icon"
          fullWidth
          size="small"
          sx={{ mt: 1, mb: 2 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <EditIcon fontSize="small" />
              </InputAdornment>
            ),
          }}
        />

        <Typography fontWeight={500}>Chatbot size</Typography>
        <ToggleButtonGroup
          value={size}
          exclusive
          onChange={handleSizeChange}
          size="small"
          sx={{ my: 2 }}
        >
          <ToggleButton value="Small">Small</ToggleButton>
          <ToggleButton value="Medium">Medium</ToggleButton>
          <ToggleButton value="Large">Large</ToggleButton>
        </ToggleButtonGroup>

        <Typography fontWeight={500}>
          Initial questions (Up to 3 questions)
        </Typography>
        {questions.map((q, idx) => (
          <Box
            key={idx}
            display="flex"
            alignItems="center"
            mt={1}
            mb={1}
            gap={1}
          >
            <TextField
              value={q}
              onChange={(e) => handleQuestionChange(idx, e.target.value)}
              size="small"
              fullWidth
            />
            {questions.length > 1 && (
              <Button color="error" onClick={() => removeQuestion(idx)}>
                Delete
              </Button>
            )}
          </Box>
        ))}
        {questions.length < 3 && (
          <Button size="small" onClick={addQuestion} sx={{ mb: 2 }}>
            + Add
          </Button>
        )}

        <Typography fontWeight={500}>Initial greetings</Typography>
        <Box display="flex" alignItems="center" gap={1} my={1}>
          <Switch
            checked={greetingEnabled}
            onChange={() => setGreetingEnabled(!greetingEnabled)}
          />
          <TextField
            fullWidth
            size="small"
            value={greeting}
            onChange={(e) => setGreeting(e.target.value)}
          />
        </Box>

        <Typography fontWeight={500}>Background colour</Typography>
        <Box display="flex" alignItems="center" gap={1} my={2}>
          <IconButton>
            <EditIcon />
          </IconButton>
          <TextField value={color} size="small" sx={{ width: 120 }} />
          <Box
            sx={{
              width: 24,
              height: 24,
              borderRadius: "4px",
              backgroundColor: color,
              border: "1px solid #ccc",
            }}
          />
        </Box>

        <Typography fontWeight={500} mb={1}>
          Integration code
        </Typography>
        <Paper variant="outlined" sx={{ p: 2, position: "relative", mb: 2 }}>
          <Box component="pre" sx={{ whiteSpace: "pre-wrap", fontSize: 13 }}>
            {`<script>
(function() {
  var script = document.createElement('script');
  script.src = "https://joyz.ai/lib/chatbot.bundle.js";
  script.setAttribute('eid', "67fff16197d7352a968d405fb");
  script.setAttribute('chatbotId', "6b18e7a7-2cfb-4136-baeb-7fad55ca9103");
  document.head.appendChild(script);
})();
</script>`}
          </Box>
          <IconButton
            size="small"
            sx={{ position: "absolute", top: 8, right: 8 }}
          >
            <ContentCopyIcon fontSize="small" />
          </IconButton>
        </Paper>

        <Button variant="contained" sx={{ borderRadius: 2 }}>
          Save
        </Button>
      </Box>

      <Box
        sx={{ width: 360, backgroundColor: "#f5f5f5", borderRadius: 2, p: 2 }}
      >
        <Typography fontWeight={600} mb={1}>
          Omega
        </Typography>
        <Typography fontSize={14} mb={1}>
          Select relevant question to start
        </Typography>
        {questions.map((q, idx) => (
          <Button
            key={idx}
            variant="outlined"
            size="small"
            sx={{ textTransform: "none", fontSize: 13, mb: 1 }}
            fullWidth
          >
            {q || "Question"}
          </Button>
        ))}
        <Typography align="center" color="text.secondary" fontSize={12} my={2}>
          Click one, or type your own
        </Typography>
        <TextField
          placeholder="Type here..."
          fullWidth
          size="small"
          sx={{ backgroundColor: "white" }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button size="small">→</Button>
              </InputAdornment>
            ),
          }}
        />
        <Typography
          variant="caption"
          display="block"
          align="center"
          mt={2}
          color="text.secondary"
        >
          Powered by JoyzAI
        </Typography>
      </Box>
    </Box>
  );
};

export default WebsiteChatbotSettings;
