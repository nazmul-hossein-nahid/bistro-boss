import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";
import useCarts from "../../Hooks/useCarts";

const FoodCard = ({ item }) => {
  const { _id, image, name, recipe, price } = item;
  const { user,loading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const AxiosBaseURL = useAxios();
  const { refetch } = useCarts();
  if(loading){
    return
  }
  const handleAddToCart = (item) => {
    if (user && user.email) {
      const { _id, image, name, price } = item;
      const cartItem = {
        foodId: _id,
        name,
        image,
        price,
        userinfo: {
          email: user?.email,
          name: user?.displayName,
        },
      };
      AxiosBaseURL.post("/api/v1/carts", cartItem)
        .then((res) => {
          console.log(res.data);
          refetch()
        })
        .catch((err) => {
          console.lof(err);
        });
      console.log(cartItem);
    } else {
      navigate("/login", { state: { from: location?.pathname } });
    }
  };
  return (
    <div className="card bg-zinc-700 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-primary"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
