import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { userRoutes } from "./routes/userRoutes";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/accountView">Account</Link>
            </li>
            <li>
              <Link to="/cartView">Cart</Link>
            </li>
            <li>
              <Link to="/ordersView">Orders</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Routes>
        {userRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element}></Route>
        ))}
      </Routes>
    </Router>
  );
}

export default App;
