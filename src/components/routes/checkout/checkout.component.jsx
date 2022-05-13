import "./checkout.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../../contexts/cart-dropdown.context";
import CheckoutItem from "../../checkout-items/checkout-items";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Товар</span>
        </div>
        <div className="header-block">
          <span>Назва</span>
        </div>
        <div className="header-block">
          <span>Кількість</span>
        </div>
        <div className="header-block">
          <span>Ціна</span>
        </div>
        <div className="header-block">
          <span>Вилучити</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className="total">Загальна вартість: ₴{cartTotal}</span>
    </div>
  );
};

export default Checkout;
