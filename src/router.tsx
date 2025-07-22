import { createHashRouter } from "react-router-dom";
import { Layout } from "./layouts/Layout.tsx";
import { HomePage } from "./pages/HomePage.tsx";
import { CatalogPage } from "./pages/CatalogPage.tsx";
import { AboutUsPage } from "./pages/AboutUsPage.tsx";
import { NotFound } from "./pages/404.tsx";
import { ContactsPage } from "./pages/СontactsPage.tsx";
import { CartPage } from "./pages/CartPage.tsx";
import { FavoritesPage } from "./pages/FavoritesPage.tsx";
import { UserProfilePage } from "./pages/UserProfilePage.tsx";
import { ServicesPage } from "./pages/ServicesPage.tsx";
import { AssistentToTheBayerPage } from "./pages/AssistentToTheBayerPage.tsx";
import { ItemDescriptionPage } from "./pages/ItemDescriptionPage.tsx";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "catalog", element: <CatalogPage /> },
      { path: "contacts", element: <ContactsPage /> },
      { path: "about", element: <AboutUsPage /> },
      { path: "cart", element: <CartPage /> },
      { path: "favorites", element: <FavoritesPage /> },
      { path: "profile", element: <UserProfilePage /> },
      { path: "services", element: <ServicesPage /> },
      { path: "assistent", element: <AssistentToTheBayerPage /> },
      { path: "description", element: <ItemDescriptionPage /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default router;
