import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="flex justify-end gap-11 py-4 px-8 backdrop-blur-md bg-white/70 sticky top-0 border-b border-zinc-200 font-medium text-zinc-500 z-50">
      <NavLink
        to=""
        className={({ isActive }) =>
          isActive ? "text-zinc-900" : "hover:text-zinc-900 transition-colors"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="create-emp"
        className={({ isActive }) =>
          isActive ? "text-zinc-900" : "hover:text-zinc-900 transition-colors"
        }
      >
        Create Employee
      </NavLink>

      <NavLink
        to="list"
        className={({ isActive }) =>
          isActive ? "text-zinc-900" : "hover:text-zinc-900 transition-colors"
        }
      >
        List of Employees
      </NavLink>
    </nav>
  );
}

export default Header;