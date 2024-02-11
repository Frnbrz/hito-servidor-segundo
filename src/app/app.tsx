
import { Navbar, ThemeProvider } from '@/components'
import { Tasks } from '@/pages'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Tasks />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App