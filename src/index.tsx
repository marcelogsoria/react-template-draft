import React from "react";
import { createRoot } from "react-dom/client";
import { IntlProvider } from "react-intl";
import messages from "./i18n";
import "./index.css";
import App from "./App";

const locale = "es-AR";

const root = createRoot(document.getElementById("root")!);

root.render(
  <IntlProvider messages={messages[locale]} locale={locale} defaultLocale="es">
    <App />
  </IntlProvider>
);
