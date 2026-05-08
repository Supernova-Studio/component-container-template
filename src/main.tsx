// This is the main entry point for the application.
// Add your top-level configuration here: providers, wrappers, analytics, etc.
// The App component (app.tsx) is where AI-generated code will be placed.
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "@supernovaio/prototyping-tooling/client"

import { SnPrototype } from "../supernova/helpers/snPrototype"

import App from "./app.tsx"
import "./index.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SnPrototype>
      <App />
    </SnPrototype>
  </StrictMode>
)
