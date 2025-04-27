import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import Game_rules from './game-rules'
import Scoreboard from './scoreboard'

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { index: true, Component: Scoreboard },
      { path: "game-rules", Component: Game_rules }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
