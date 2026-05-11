import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { GoKart } from "./pages/GoKart";
import { Robotics } from "./pages/Robotics";
import { Achievements } from "./pages/Achievements";
import { Sponsorship } from "./pages/Sponsorship";
import { Gallery } from "./pages/Gallery";
import { Events } from "./pages/Events";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "gokart", Component: GoKart },
      { path: "robotics", Component: Robotics },
      { path: "achievements", Component: Achievements },
      { path: "sponsorship", Component: Sponsorship },
      { path: "gallery", Component: Gallery },
      { path: "events", Component: Events },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
