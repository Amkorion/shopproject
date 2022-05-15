import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart-dropdown.context";
import { useNavigate } from "react-router-dom";
import { CartDropdownContainer, CartItems, EmptyMessage } from "./cart-dropdown.styles.jsx";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Тут порожньо :-( Додайте товар</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckout}>Замовити</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
