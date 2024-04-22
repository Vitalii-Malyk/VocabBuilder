import GlobalStyled from "../GlobalStyle.styled";
import { Suspense, lazy, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import authOperations from "../redux/auth/auth-operations";

const Layout = lazy(() => import("./layout"));
const RegisterPage = lazy(() => import("../pages/registerPage"));
const LogInPage = lazy(() => import("../pages/login"));
const PrivateRoute = lazy(() => import("./Routes/PrivatRoute"));
const PublicRoute = lazy(() => import("./Routes/PublicRoute"));
const HomePage = lazy(() => import("../pages/home"));
const RecommendPage = lazy(() => import("../pages/recommended"));
const TrainingPage = lazy(() => import("../pages/training"));
const DictionaryPage = lazy(() => import("../pages/dictionary"));
export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    (state) => state.auth.isFetchingCurrentUser
  );

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  const location = useLocation();
  const [backgroundColor, setBackgroundColor] = useState("");

  useEffect(() => {
    if (
      location.pathname.includes("/dictionary") ||
      location.pathname.includes("/recommend") ||
      location.pathname.includes("/training")
    ) {
      setBackgroundColor("#f8f8f8");
    } else {
      setBackgroundColor("#fff");
    }
  }, [location]);

  return (
    <>
      {isFetchingCurrentUser ? (
        <h1>...Loading</h1>
      ) : (
        <Suspense fallback={<p>Загружаем...</p>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                exact
                element={
                  <PublicRoute>
                    <HomePage />
                  </PublicRoute>
                }
              />
              <Route
                path="dictionary"
                element={
                  <PrivateRoute>
                    <DictionaryPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="recommend"
                element={
                  <PrivateRoute>
                    <RecommendPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="training"
                element={
                  <PrivateRoute>
                    <TrainingPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="register"
                element={
                  <PublicRoute redirectTo="/dictionary" restricted>
                    <RegisterPage />
                  </PublicRoute>
                }
              />
              <Route
                path="login"
                element={
                  <PublicRoute redirectTo="/dictionary" restricted>
                    <LogInPage />
                  </PublicRoute>
                }
              />
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
          </Routes>
        </Suspense>
      )}
      <GlobalStyled backgroundColor={backgroundColor} />
      <Toaster />
    </>
  );
};
export default App;
