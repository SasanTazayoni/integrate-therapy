import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Fees from "./pages/Fees";
import FAQ from "./pages/FAQ";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Training from "./pages/Training";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "fees", element: <Fees /> },
      { path: "faq", element: <FAQ /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "contact", element: <Contact /> },
      { path: "training", element: <Training /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
