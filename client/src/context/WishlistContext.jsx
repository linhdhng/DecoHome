// import { createContext, useContext, useState, useEffect } from 'react';
// import { useCookies } from 'react-cookie';
// import { useAuth } from './fetch';


// const WishlistContext = createContext();

// export const WishlistProvider = ({ children }) => {

//     const [cookies] = useCookies();
//     //Get cookies from fetch.jsx
//     const {cookies: authCookies} = useAuth();
//     const [wishlist, setWishlist] = useState();

//     // Function to update wishlist based on user's data
//   const updateWishlistFromUserData = (userData) => {
//     if (userData && userData.wishlist) {
//       setWishlist(userData.wishlist);
//     }
//   };

//     useEffect(() => {
//         const fetchWishlistItems = async () => {
//           try {
//             // Fetch wishlist items from users data API
//             const userId = authCookies.userId //need auth context
//             const response = await fetch(`http://localhost:5000/api/product/${userId}/list`);
//             if (!response.ok) {
//               throw new Error('Failed to fetch wishlist items');
//             }
//             const userData = await response.json();
//             updateWishlistFromUserData(userData)
//             setWishlist(data);
//           } catch (error) {
//             console.error('Error fetching wishlist items:', error);
//           }
//         };
    
//         fetchWishlistItems();
//       }, [authCookies.userId]);

//               // Update wishlist on the server
//       const addToWishlist = (product) => {
//         setWishlist(prevWishlist => [...prevWishlist, product]);

//       };
//     const removeFromWishlist = (productId) => {
//       setWishlist(prevWishlist => prevWishlist.filter(product => product._id !== productId));
//     };
  
//     return (
//       <WishlistContext.Provider value={{ wishlist, updateWishlistFromUserData, addToWishlist, removeFromWishlist }}>
//         {children}
//       </WishlistContext.Provider>
//     );
// }

// export const useWishlist = () => { return useContext(WishlistContext)};