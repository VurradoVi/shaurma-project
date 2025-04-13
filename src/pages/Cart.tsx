import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import ShaurmaBlockCart from "../components/ShaurmaBlockCart";
import { clearItems, selectCart } from "../redux/slices/cartSlice";
import CartEmpty from "../components/CartEmpty";

const Cart = () => {
  const { items, totalPrice } = useSelector(selectCart);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);
  const dispatch = useDispatch();

  const ClickClearCart = () => {
    if (window.confirm("Ты действительно хочешь очистить корзину?")) {
      dispatch(clearItems());
    }
  };
  return (
    <div className="max-w-4xl mx-auto h-[75vh] flex flex-col justify-between">
      {items.length > 0 ? (
        <div>
          <div className="flex items-end justify-between mb-5.5">
            <div className="flex items-center gap-2">
              <img src="./shop.svg" width={26} height={26} alt="cart" />
              <h1 className="text-3xl font-bold">Корзина</h1>
            </div>
            <div className="flex items-center gap-1 group">
              <svg
                className="w-4 h-4 text-gray-400 transition-colors duration-200 group-hover:text-red-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z" />
              </svg>
              <button
                onClick={ClickClearCart}
                className="text-gray-400 cursor-pointer transition-colors duration-200 group-hover:text-red-600"
              >
                Очистить корзину
              </button>
            </div>
          </div>
          <div className="overflow-auto">
            {items.map((items) => (
              <ShaurmaBlockCart key={items.id} {...items} />
            ))}
          </div>

          <div className="mt-auto">
            <div className="flex items-center justify-between mt-10">
              <h3 className="text-xl">
                Всего шаурмы: <strong>{totalCount} шт.</strong>
              </h3>
              <h3 className="text-xl">
                Сумма заказа:{" "}
                <span className="text-red-500">{totalPrice}р.</span>
              </h3>
            </div>
            <div className="flex items-center justify-between mt-10">
              <div className="group">
                <Link to="/">
                  <button className=" text-gray-400 px-5.5 py-3 rounded-3xl cursor-pointer border border-gray-300 flex gap-2 transition duration-200 group-hover:border-gray-400 group-hover:text-gray-400">
                    <img
                      className=" group-hover:-translate-x-1 transition duration-200"
                      src="./Path.svg"
                      alt="back"
                    />
                    Вернуться назад
                  </button>
                </Link>
              </div>
              <button className="bg-red-500 text-white px-5.5 py-3 rounded-3xl cursor-pointer transition duration-200  hover:bg-red-400">
                Оплатить сейчас
              </button>
            </div>
          </div>
        </div>
      ) : (
        <CartEmpty />
      )}
    </div>
  );
};

export default Cart;
