import { Fallback, Navbar, ThemeProvider } from "@/components";
import { Login, Tasks } from "@/pages";
import { ErrorBoundary } from "react-error-boundary";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <ErrorBoundary FallbackComponent={Fallback} onReset={() => {}}>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Tasks />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Router>
        </ErrorBoundary>
      </ThemeProvider>
    </div>
  );
}

export default App;
