import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./layout/layout";
import "./App.css";
import HomePage from "./pages/Home";
import AboutPage from "./pages/AboutUs";
import TicketPage from "./pages/Ticket";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/ticket" element={<TicketPage />} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    )
  )
  return <RouterProvider router={router} />;
}

export default App;
