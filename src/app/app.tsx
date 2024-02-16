import { Fallback, Navbar, ThemeProvider } from "@/components";
import { Footer } from "@/components/footer";
import { AuthGuard } from "@/components/guard";
import { Suspense, lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const LazyHome = lazy(() => import("../pages/home/Home"));
const LazyLogin = lazy(() => import("../pages/login/Login"));
const LazyRegister = lazy(() => import("../pages/register/Register"));
const LazyProjects = lazy(() => import("../pages/projects/Projects"));
const Tasks = lazy(() => import("../pages/tasks/Tasks"));

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <ErrorBoundary FallbackComponent={Fallback} onReset={() => {}}>
          <Router>
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={
                  <Suspense fallback={<LoaderSpinner />}>
                    <LazyHome />
                  </Suspense>
                }
              />
              <Route
                path="/login"
                element={
                  <Suspense fallback={<LoaderSpinner />}>
                    <LazyLogin />
                  </Suspense>
                }
              />
              <Route
                path="/register"
                element={
                  <Suspense fallback={<LoaderSpinner />}>
                    <LazyRegister />
                  </Suspense>
                }
              />
              <Route element={<AuthGuard privateValidation />}>
                <Route
                  path="/projects"
                  element={
                    <Suspense fallback={<LoaderSpinner />}>
                      <LazyProjects />
                    </Suspense>
                  }
                />
                <Route
                  path="/tasks"
                  element={
                    <Suspense fallback={<LoaderSpinner />}>
                      <Tasks />
                    </Suspense>
                  }
                />
              </Route>
            </Routes>
            <Footer />
          </Router>
        </ErrorBoundary>
      </ThemeProvider>
    </div>
  );
}

export default App;

function LoaderSpinner() {
  return (
    <div className="flex items-center justify-center h-screen">
      <svg
        className="animate-spin h-5 w-5 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.001 8.001 0 0112 4.472v3.09a4 4 0 100 7.078v3.09A8.001 8.001 0 016.472 17.29z"
        ></path>
      </svg>
    </div>
  );
}
