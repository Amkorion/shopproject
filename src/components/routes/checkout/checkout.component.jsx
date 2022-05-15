import "./checkout.styles.jsx";
import { useContext } from "react";
import { CartContext } from "../../../contexts/cart-dropdown.context";
import CheckoutItem from "../../checkout-items/checkout-items";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  TotalContainer,
} from "./checkout.styles.jsx";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Товар</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Назва</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Кількість</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Ціна</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Вилучити</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <TotalContainer>Загальна вартість: ₴{cartTotal}</TotalContainer>
    </CheckoutContainer>
  );
};

export default Checkout;
