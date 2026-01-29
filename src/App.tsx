import { AppLayout } from "@/AppLayout";
import { AccountPage } from "@/pages/AccountPage";
import { DashboardPage } from "@/pages/DashboardPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/account" element={<AccountPage />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
};
