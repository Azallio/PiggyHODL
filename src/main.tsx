import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import Game_rules from './pages/game-rules'
import Scoreboard from './pages/scoreboard'

const queryClient = new QueryClient()

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
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>

)
