import { calcTotalPrice } from "./calcTotalPrice";

export const getCartItems = () => {
  const items = JSON.parse(localStorage.getItem("item") || "[]");
  const totalPrice = calcTotalPrice(items);

  return {
    items,
    totalPrice,
  };
};
