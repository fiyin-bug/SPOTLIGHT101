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
import TicketPage from "./pages/Tickets";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import TicketDetails from "./pages/Checkout/TicketDetails"; // Adjust path based on your file structure

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/tickets" element={<TicketPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/ticket-details/:ticketId" element={<TicketDetails />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;