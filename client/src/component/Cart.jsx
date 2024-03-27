import { useCookies } from 'react-cookie';

const CartPage = () => {
  const [cookies] = useCookies(['cart']);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {cookies.cart.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CartPage;