import { RouteProvider } from "react-router-dom";
import { MantineProvider } from "@mantine/core";

import router from "./route";

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <RouteProvider router={router} />
    </MantineProvider>
  );
}
