import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import Root from './Root.jsx'
import Body from './components/Body.jsx';

import Error404 from "./pages/Error404.jsx";
import AllApps from './pages/AllApps.jsx';

import InstalledApps from './components/InstalledApps.jsx';
import AppDescription from './pages/AppDescription.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Body
      },
      {
        path: "all-apps",
        Component: AllApps
      },
      {
        path: "installed",
        Component: InstalledApps
      },
      { 
        path: "about/:id",
        Component: AppDescription 
      },
      { path: "*", Component: Error404 }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
