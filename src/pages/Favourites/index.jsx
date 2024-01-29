import { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/recipe-list";

export default function Favourites() {
  const { favouritesList } = useContext(GlobalContext);
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favouritesList && favouritesList.length > 0 ? (
        favouritesList.map((item) => <RecipeItem item={item} />)
      ) : (
        <div className="lg:text-4xl text-xl flex flex-col items-center justify-center text-center text-customBrown">
          <p>Nothing is added here.</p>
          <img src="cookies.png" className="h-25" alt="cookies logo" />
        </div>
      )}
    </div>
  );
}
