import { Button } from "@/components/ui/button"
import { WavesIcon } from 'lucide-react'
import { Link } from "react-router-dom"


function Navbar() {
  return (
    <nav className="flex flex-row items-center h-14 px-4 border-b gap-4 md:gap-6">
      <div className="flex flex-1 gap-4">
        <Link className="flex items-center gap-2 text-lg font-semibold" to="#">
          <WavesIcon />
          <span>Magic Water</span>
        </Link>
      </div>
      <div className="flex justify-end gap-4">
        <ul className="hidden md:flex gap-4">
          <li>
            <Link to="#">Dashboard</Link>
          </li>
          <li>
            <Link to="#">Projects</Link>
          </li>
          <li>
            <Link to="#">Team</Link>
          </li>
          <li>
            <Link to="#">Settings</Link>
          </li>
        </ul>
        <Button size="sm" variant="outline">
          <LogOutIcon className="mr-2 h-4 w-4" />
          Logout
        </Button>

      </div>
    </nav>
  )
}

export default Navbar

function LogOutIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  )
}
