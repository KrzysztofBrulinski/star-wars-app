import { useDispatch, useSelector } from "react-redux";

const Page = () => {
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  const allCharacters = Object.values(wishlist);

  return (
    <div>
      <h2>Favorite List</h2>
      {allCharacters.map(({ name, id }) => (
        <div key={id}>
          <h3>{name}</h3>
          <button
            onClick={() => {
              dispatch({ type: "REMOVE_FROM_WISHLIST", id });
            }}
          >
            Remove me
          </button>
        </div>
      ))}
    </div>
  );
};

export default Page;
