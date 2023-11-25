import useAuth from "../../../Hooks/useAuth";
import useCarts from "../../../Hooks/useCarts";

const AddCarts = () => {
  const { user } = useAuth();
  const { carts } = useCarts();
  const currentUserCart = carts?.filter(
    (item) => item?.userinfo?.email == user?.email
  );
  const totalprice = currentUserCart.reduce((previewsValue, currentValue) => {
    return previewsValue + currentValue.price;
  }, 0);

  return (
    <div>
      <h1 className="text-3xl font-bold uppercase mb-5">
        Total Item:{currentUserCart.length}
      </h1>
      <h1 className="text-xl  uppercase mb-5">
        Total Price: ${totalprice.toFixed(2)}
      </h1>
      <div className="overflow-x-auto ">
        <table className="table">
          {/* head */}
          <thead className="text-white font-bold bg-red-700">
            <tr>
              <th></th>
              <th>Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {currentUserCart?.map((item, id) => {
              return (
                <tr key={item._id}>
                  <th>
                    <label>{id * 0 + 1}</label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            className="rounded-full"
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item?.name}</td>
                  <td>${item.price}</td>
                  <td>
                    <button className="btn btn-ghost btn-xs">update</button>
                  </td>
                  <td>
                    <button className="btn btn-ghost btn-xs">remove</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddCarts;
