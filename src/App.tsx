import HomePage from "@pages/HomePage";
import AuthGuard from "@router/AuthGuard";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <AuthGuard>
              <HomePage />
            </AuthGuard>
          }
        />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
