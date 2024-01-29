import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context";

export default function Navbar() {
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(GlobalContext);

  return (
    <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <h2 className="text-2xl font-semibold ">
        <NavLink
          to={"/"}
          className="text-customRed flex text-center justify-center text-3xl hover:text-gray-700 direction-300"
        >
          <i>RecipeRover</i>
        </NavLink>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Search items here..."
          value={searchParam}
          onChange={(event) => setSearchParam(event.target.value)}
          className="bg-white/75 px-8 rounded-full outline-none lg:w-96 shadow-lg shado-red-100 p-2"
        />
      </form>
      <ul className="flex gap-5">
        <li>
          <NavLink
            to={"/"}
            className="text-customRed font-bold hover:text-gray-700 direction-300"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/favourites"}
            className="text-customRed font-bold hover:text-gray-700 direction-300"
          >
            Favourites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
