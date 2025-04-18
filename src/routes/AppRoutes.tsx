// src/routes/AppRoutes.tsx
import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import KnowledgeBase from "../pages/KnowledgeBase";
import UnassignedChats from "../pages/UnassignedChats";
import UnansweredQuestionsPage from "../pages/UnansweredQuestionsPage";
import BotSettingsPage from "../pages/BotSettingsPage";
import WebsiteChatbotSettings from "../pages/WebsiteChatbotSettings";
import BotChatPage from "../pages/BotChatPage";
import GoLivePage from "../pages/GoLivePage";

const AppRoutes = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<KnowledgeBase />} />
      <Route path="/chats/unassigned" element={<UnassignedChats />} />
      <Route path="/chats/my" element={<UnassignedChats />} />
      <Route path="/chats/bot" element={<BotChatPage />} />
      <Route path="/unanswered" element={<UnansweredQuestionsPage />} />
      <Route path="/settings" element={<BotSettingsPage />} />
      <Route path="/chatbot" element={<WebsiteChatbotSettings />} />
      <Route path="/live" element={<GoLivePage />} />
      {/* Add other routes here */}
    </Route>
  </Routes>
);

export default AppRoutes;
