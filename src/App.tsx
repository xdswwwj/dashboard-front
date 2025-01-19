import URL from "@/config/url";
import AuthGuard from "@/guard/AuthGuard";
import HomePage from "@pages/HomePage";
import LoginPage from "@pages/LoginPage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import MyPage from "./pages/MyPage";
import SocialLoginSuccessRedirect from "./routes/SocialLoginSuccessRedirect";

function App() {
  return (
    <>
      <Toaster />
      <Router>
        <Routes>
          <Route
            path={URL.loginSuccessUrl}
            element={<SocialLoginSuccessRedirect />}
          />
          <Route path={URL.loginUrl} element={<LoginPage />} />
          <Route
            path={URL.mypageUrl}
            element={
              <AuthGuard>
                <MyPage />
              </AuthGuard>
            }
          />
          <Route
            path={URL.mainUrl}
            element={
              <AuthGuard>
                <HomePage />
              </AuthGuard>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
