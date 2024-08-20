import { Registration } from "./components/Registration";
import { About } from "./components/About";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/registration',
    element: <Registration />
  },
  {
    path: '/about',
    element: <About />
  }
];

export default AppRoutes;
