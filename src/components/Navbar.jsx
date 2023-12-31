import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <nav className="flex gap-8 py-2 border-b-2 border-sky-700 mb-4">
      <Link className={`${pathname === "/" && "text-sky-700"}`} to="/">
        Semua
      </Link>
      <Link
        className={`${pathname === "/notes/active" && "text-sky-700"}`}
        to="/notes/active"
      >
        Aktif
      </Link>
      <Link
        className={`${pathname === "/notes/archive" && "text-sky-700"}`}
        to="/notes/archive"
      >
        Arsip
      </Link>
    </nav>
  );
};

export default Navbar;
