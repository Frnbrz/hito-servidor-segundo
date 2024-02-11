
import ThemeProvider from '@/components/atoms/theme'
import { ModeToggle } from '@/components/atoms/theme/mode-toggle'
import { BrowserRouter as Router, Routes } from 'react-router-dom'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <ModeToggle />
        <Routes>
          {/* Define your routes here */}
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App