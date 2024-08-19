import { Register } from "./components/Register";
import { About } from "./components/About";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/about',
    element: <About />
  }
];

export default AppRoutes;
