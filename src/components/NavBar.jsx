import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <h1 className="text-xl font-bold">CommunionHub</h1>
      <div>
        <Link to="/" className="mx-2">Home</Link>
        <Link to="/events" className="mx-2">Events</Link>
      </div>
    </nav>
  );
};

export default NavBar;  
