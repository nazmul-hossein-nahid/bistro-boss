import ItemCard from "../../../Components/itemCard/itemCard";

const Category = ({ category }) => {
  return (
    <div className="grid grid-cols-2 gap-10 mt-12">
      {category.length > 0 &&
        category?.map((item) => (
          <ItemCard key={item?._id} item={item}></ItemCard>
        ))}
    </div>
  );
};

export default Category;
