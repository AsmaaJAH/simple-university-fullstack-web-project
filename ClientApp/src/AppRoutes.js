import { StudentForm } from "./components/StudentForm";
import { About } from "./components/About";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/form',
    element: <StudentForm />
  },
  {
    path: '/about',
    element: <About />
  }
];

export default AppRoutes;
