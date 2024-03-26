import { useWishlist } from "../context/WishlistContext"

function WishList() {
    const { wishlist } = useWishlist();

    return (
      <div>
        <h1>Wishlist</h1>
        {wishlist.length === 0 ? (
          <p>Your wishlist is empty</p>
        ) : (
          <ul>
            {wishlist.map(item => (
              <li key={item._id}>{item.title}</li>
            ))}
          </ul>
        )}
      </div>
    );
}

export default WishList