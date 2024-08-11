import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <ul className="flex justify-center space-x-8 text-white">
        <li>
          <Link href="/admin" className="hover:text-gray-200">
            Home
          </Link>
        </li>
        <li>
          <Link href="/admin/users" className="hover:text-gray-200">
            Users
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
