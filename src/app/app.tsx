import { Fallback, Navbar, ThemeProvider } from "@/components";
import { Footer } from "@/components/footer";
import { AuthGuard } from "@/components/guard";
import { Home, Login } from "@/pages";
import { Projects } from "@/pages/projects";
import { Register } from "@/pages/register";
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
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route element={<AuthGuard privateValidation />}>
                <Route path="/projects" element={<Projects />} />
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
