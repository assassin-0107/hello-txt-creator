import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./components/layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import Players from "./pages/Players";
import Guilds from "./pages/Guilds";
import Economy from "./pages/Economy";
import Events from "./pages/Events";
import Monitoring from "./pages/Monitoring";
import Logs from "./pages/Logs";
import Rewards from "./pages/Rewards";
import News from "./pages/News";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          } />
          <Route path="/players" element={
            <MainLayout>
              <Players />
            </MainLayout>
          } />
          <Route path="/guilds" element={
            <MainLayout>
              <Guilds />
            </MainLayout>
          } />
          <Route path="/economy" element={
            <MainLayout>
              <Economy />
            </MainLayout>
          } />
          <Route path="/events" element={
            <MainLayout>
              <Events />
            </MainLayout>
          } />
          <Route path="/monitoring" element={
            <MainLayout>
              <Monitoring />
            </MainLayout>
          } />
          <Route path="/logs" element={
            <MainLayout>
              <Logs />
            </MainLayout>
          } />
          <Route path="/rewards" element={
            <MainLayout>
              <Rewards />
            </MainLayout>
          } />
          <Route path="/news" element={
            <MainLayout>
              <News />
            </MainLayout>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
