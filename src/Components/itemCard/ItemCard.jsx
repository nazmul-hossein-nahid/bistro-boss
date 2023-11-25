const ItemCard = ({ item }) => {
  const { image, name, recipe, price } = item;
  return (
    <div key={item._id} className="flex gap-3 ">
      <img
        className="w-28 h-28 rounded-b-full  rounded-tr-full shadow-md shadow-black"
        src={item?.image}
        alt=""
      />
      <div>
        <h1 className="text-2xl uppercase">{item?.name}---------------</h1>
        <p className="text-gray-500">{item?.recipe}</p>
      </div>
      <p className="text-xl text-yellow-700">${item?.price}</p>
    </div>
  );
};

export default ItemCard;
