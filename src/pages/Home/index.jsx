import { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/recipe-list";

export default function Home() {
  const { recipeList, loading } = useContext(GlobalContext);

  if (loading)
    return (
      <div className="p-10 flex justify-center lg:text-4xl text-xl text-center text-customBrown">
        Loading... Please wait!
        <img src="burger.png" className="h-10" alt="burger logo" />
      </div>
    );

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipeItem item={item} />)
      ) : (
        <div className="lg:text-4xl text-xl flex flex-col md:flex-row items-center justify-center text-customRed">
          <img src="pizza.png" alt="pizza logo" className="h-20" />
          <p>Search something delicious!!.</p>
        </div>
      )}
    </div>
  );
}
