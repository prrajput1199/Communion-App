import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-lg font-bold">Communion App</h1>
      <nav>
        <Link className="mr-4" to="/">Home</Link>
        <Link className="mr-4" to="/events">Events</Link>
      </nav>
    </header>
  );
};

export default Header;
