import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppLayout } from "./AppLayout";
import { AccountPage } from "./pages/AccountPage";
import { DashboardPage } from "./pages/DashboardPage";

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/account/:id" element={<AccountPage />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
