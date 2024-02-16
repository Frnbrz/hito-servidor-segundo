import { ModeToggle } from "@/components/theme";
import { useUserState } from "@/zustand/store";
import { WavesIcon } from "lucide-react";
import { Link } from "react-router-dom";
import Logos from "../logo";
import { Button } from "../ui";

function Navbar() {
  const user = useUserState((state) => state.user);

  const Routes = [
    {
      name: "Tasks",
      path: "/tasks",
    },
  ];

  function logout(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    try {
      event.preventDefault();
      useUserState.getState().logout();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <nav className="flex flex-row items-center h-14 px-4 border-b gap-4 md:gap-6">
      <div className="flex flex-1 gap-4">
        <Link className="flex items-center gap-2 text-lg font-semibold" to="/">
          <WavesIcon />
          <span>Magic Water</span>
        </Link>
      </div>
      <div className="flex justify-end gap-4">
        <ul className="hidden md:flex gap-4">
          {Routes.map((route, index) => (
            <li key={index}>
              <Link to={route.path} className="text-sm font-semibold">
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-4">
        <ModeToggle />
        {user.email === "" ? (
          <Link to="/login">
            <Button variant="outline">Login</Button>
          </Link>
        ) : (
          <Button variant="outline" className="flex gap-2" onClick={logout}>
            <Logos.LogOut />
            Logout
          </Button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
