import { useState } from "../../node_modules/react";
import ItemList from "./ItemList";

const ItemCategory = (prop) => {
  const category = prop.categories;
  console.log(category);
  function handleClick() {
    setShowList(!showList);
  }
  const categoryList = category.card.card.itemCards;
  const [showList, setShowList] = useState(false);
  return (
    <div className="bg-green-50 p-4 my-2 shadow-xl ">
      <div onClick={handleClick}>
        <div className="flex justify-between cursor-pointer">
          <div>
            <h2 className="text-xl font-semibold">
              {category.card.card.title +
                " (" +
                category.card.card.itemCards.length +
                ")"}
            </h2>
          </div>
          <div>
            <h1 className="text-xl">{showList ? "⬆️" : "🔽"}</h1>
          </div>
        </div>
      </div>
      {showList && (
        <div className="mt-6">
          {categoryList.map((item, idx) => (
            <ItemList key={idx} item={item} fromCart={false}>
             
            </ItemList>
          ))}

          <div></div>
        </div>
      )}
    </div>
  );
};

export default ItemCategory;
