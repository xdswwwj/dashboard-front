import URL from "@/config/url";
import AuthGuard from "@/guard/AuthGuard";
import LoginPage from "@/pages/Auth/LoginPage";
import HomePage from "@pages/HomePage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import MyPage from "./pages/Auth/MyPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import ClubCreatePage from "./pages/Club/ClubCreatePage";
import ClubListPage from "./pages/Club/ClubListPage";
import ClubPage from "./pages/Club/ClubPage";
import NotFoundPage from "./pages/NotFound/NotFound";
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
          <Route path={URL.registerUrl} element={<RegisterPage />} />
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
          <Route
            path={URL.clubUrl}
            element={
              <AuthGuard>
                <ClubPage />
              </AuthGuard>
            }
          />
          <Route
            path={URL.clubCreateUrl}
            element={
              <AuthGuard>
                <ClubCreatePage />
              </AuthGuard>
            }
          />
          <Route
            path={URL.clubListUrl}
            element={
              <AuthGuard>
                <ClubListPage />
              </AuthGuard>
            }
          />
          {/* 404 페이지 라우팅 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
