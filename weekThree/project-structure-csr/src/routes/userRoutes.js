import AccountView from "../components/AccountView";
import CartView from "../components/CartView";
import OrdersView from "../components/OrdersView";

export const userRoutes = [
  { path: "/accountView", element: <AccountView /> },
  { path: "/cartView", element: <CartView /> },
  { path: "/ordersView", element: <OrdersView /> },
];
