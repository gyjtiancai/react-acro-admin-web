/*
 * Copyright (c) 2024 YuJie Ge(Smile)
 * Licensed under the MIT License.
 */
import { createRoot } from "react-dom/client"
import "@arco-design/web-react/dist/css/arco.css"
import "./i18n"
import "./index.css"
import Router from "./router"

createRoot(document.getElementById("root")!).render(
  <Router />
)
