import AuthGuard from "@/guard/AuthGuard";
import HomePage from "@pages/HomePage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SocialLoginSuccessRedirect from "./routes/SocialLoginSuccessRedirect";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login-success" element={<SocialLoginSuccessRedirect />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/"
          element={
            <AuthGuard>
              <HomePage />
            </AuthGuard>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
